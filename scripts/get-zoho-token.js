#!/usr/bin/env node

/**
 * Zoho OAuth Token Generator
 * 
 * This script helps you generate a refresh token for Zoho Recruit API access.
 * 
 * Usage:
 * 1. First, create a client in Zoho Developer Console
 * 2. Get your Client ID, Client Secret, and Authorization Code
 * 3. Run this script with your credentials
 * 
 * node scripts/get-zoho-token.js
 */

const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function makeRequest(url, data) {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams(data).toString();
    
    const options = {
      hostname: 'accounts.zoho.com',
      port: 443,
      path: '/oauth/v2/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          resolve(parsed);
        } catch (error) {
          reject(new Error(`Failed to parse response: ${responseData}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('🔐 Zoho OAuth Token Generator\n');
  console.log('This script will help you generate a refresh token for Zoho Recruit API access.\n');
  
  try {
    // Get user input
    const clientId = await question('Enter your Client ID: ');
    const clientSecret = await question('Enter your Client Secret: ');
    const authCode = await question('Enter your Authorization Code: ');
    const redirectUri = await question('Enter your Redirect URI (default: http://localhost:3000/api/zoho-callback): ') || 'http://localhost:3000/api/zoho-callback';
    
    console.log('\n🔄 Generating refresh token...\n');
    
    // Make the request
    const response = await makeRequest('https://accounts.zoho.com/oauth/v2/token', {
      code: authCode,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    });
    
    if (response.error) {
      console.error('❌ Error:', response.error);
      console.error('Description:', response.error_description || 'No description provided');
      return;
    }
    
    console.log('✅ Success! Here are your tokens:\n');
    console.log('Access Token:', response.access_token);
    console.log('Refresh Token:', response.refresh_token);
    console.log('Token Type:', response.token_type);
    console.log('Expires In:', response.expires_in, 'seconds');
    console.log('API Domain:', response.api_domain);
    
    console.log('\n📝 Add these to your .env.local file:\n');
    console.log(`ZOHO_CLIENT_ID=${clientId}`);
    console.log(`ZOHO_CLIENT_SECRET=${clientSecret}`);
    console.log(`ZOHO_REFRESH_TOKEN=${response.refresh_token}`);
    
    console.log('\n⚠️  Important Notes:');
    console.log('- Keep these tokens secure and never commit them to version control');
    console.log('- The access token expires in 1 hour, but the refresh token is long-lived');
    console.log('- The refresh token will be used to automatically get new access tokens');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

if (require.main === module) {
  main();
}

module.exports = { makeRequest }; 