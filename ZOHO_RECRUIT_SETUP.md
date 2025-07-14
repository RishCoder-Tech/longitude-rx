# Zoho Recruit Integration Setup Guide

This guide explains how to set up Zoho Recruit integration for the job application form.

## Overview

The job application form now integrates with Zoho Recruit to automatically create candidate records when applications are submitted. This provides:

- **Direct ATS Integration**: Applications go directly into your Zoho Recruit pipeline
- **Automatic Candidate Creation**: No manual data entry required
- **Dual Storage**: Applications are also saved to Contentful as backup
- **Real-time Processing**: Applications appear in Zoho Recruit immediately

## Prerequisites

1. **Zoho Recruit Account**: You need an active Zoho Recruit subscription
2. **Zoho Developer Account**: For API access credentials
3. **Contentful Account**: For backup storage (optional)

## Step 1: Set Up Zoho Developer Account

1. Go to [Zoho Developer Console](https://api-console.zoho.com/)
2. Sign in with your Zoho account
3. Create a new client application:
   - Click "Add Client"
   - Choose "Self Client"
   - Set Client Name: "Longitude Rx Job Applications"
   - Set Homepage URL: `https://your-domain.com`
   - Set Authorized Redirect URIs: `https://your-domain.com/api/zoho-callback`
   - Save the client

## Step 2: Get Zoho API Credentials

1. **Client ID & Client Secret**: Available in your client details
2. **Refresh Token**: Generate by following these steps:
   - Go to your client in the developer console
   - Click "Generate Code"
   - Copy the generated code
   - Use this URL to get the refresh token:
     ```
     https://accounts.zoho.com/oauth/v2/token?code=YOUR_CODE&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&redirect_uri=YOUR_REDIRECT_URI&grant_type=authorization_code
     ```
   - The response will contain your `refresh_token`

## Step 3: Configure Environment Variables

Add the following to your `.env.local` file:

```env
# Zoho Recruit Configuration
ZOHO_CLIENT_ID=your_client_id_here
ZOHO_CLIENT_SECRET=your_client_secret_here
ZOHO_REFRESH_TOKEN=your_refresh_token_here

# Contentful Configuration (for backup)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

## Step 4: Customize Zoho Recruit Fields

The integration maps form fields to Zoho Recruit candidate fields. You may need to customize these mappings based on your Zoho Recruit setup:

### Default Field Mappings

| Form Field | Zoho Recruit Field | Required |
|------------|-------------------|----------|
| firstName | First_Name | Yes |
| lastName | Last_Name | Yes |
| email | Email | Yes |
| phone | Phone | No |
| location | Location | Yes |
| currentCompany | Current_Company | No |
| currentTitle | Current_Job_Title | No |
| experience | Experience_in_Years | Yes |
| education | Education | No |
| coverLetter | Cover_Letter | No |
| workAuthorization | Work_Authorization | No |
| remoteWork | Remote_Work_Preference | No |
| salaryExpectation | Salary_Expectation | No |
| startDate | Earliest_Start_Date | No |
| source | Source | No |
| linkedinUrl | LinkedIn_URL | No |
| portfolioUrl | Portfolio_URL | No |
| jobTitle | Applied_Job_Title | Yes |
| jobId | Applied_Job_ID | Yes |
| diversity | Diversity_Information | No |

### Customizing Field Mappings

If your Zoho Recruit instance uses different field names, update the `createZohoRecruitCandidate` function in:
- `app/api/job-application/route.ts`
- `app/api/job-application-simple/route.ts`

## Step 5: Test the Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Test the API endpoint**:
   ```bash
   curl -X POST http://localhost:3000/api/job-application-simple \
     -H "Content-Type: application/json" \
     -d '{
       "firstName": "John",
       "lastName": "Doe",
       "email": "john.doe@example.com",
       "location": "New York, NY",
       "experience": "5",
       "jobTitle": "Software Engineer",
       "jobId": "test-job-001"
     }'
   ```

3. **Check Zoho Recruit**: Verify that a new candidate appears in your Zoho Recruit Candidates module

## Step 6: Configure Zoho Recruit Workflows

Set up automated workflows in Zoho Recruit:

1. **Email Notifications**: Send confirmation emails to candidates
2. **Team Notifications**: Alert hiring managers of new applications
3. **Status Updates**: Automatically update application status
4. **Interview Scheduling**: Integrate with calendar systems

## Troubleshooting

### Common Issues

1. **"Zoho credentials not configured"**
   - Check that all environment variables are set correctly
   - Restart your development server after adding variables

2. **"Failed to get Zoho access token"**
   - Verify your refresh token is valid
   - Check that client ID and secret are correct
   - Ensure your Zoho account has Recruit access

3. **"Zoho Recruit API error: 400"**
   - Check field mappings match your Zoho Recruit setup
   - Verify required fields are being sent
   - Check Zoho Recruit API documentation for field requirements

4. **"Zoho Recruit API error: 401"**
   - Your access token may have expired
   - The refresh token process should handle this automatically
   - Check if your Zoho account permissions are correct

### Debug Mode

Enable detailed logging by checking the server console for:
- Form data received
- Zoho Recruit API calls
- Response details
- Error messages

## Advanced Configuration

### Custom Field Mappings

To add custom fields or change mappings, modify the `candidateData` object in the API routes:

```javascript
const candidateData = {
  data: [{
    // Standard fields
    First_Name: applicationData.firstName,
    Last_Name: applicationData.lastName,
    Email: applicationData.email,
    
    // Custom fields
    Custom_Field_1: applicationData.customValue,
    Custom_Field_2: applicationData.anotherValue,
    
    // ... other fields
  }]
}
```

### Multiple Job Boards

If you're posting jobs to multiple boards, you can track the source:

```javascript
Source: applicationData.source || 'Website', // 'LinkedIn', 'Indeed', 'Website', etc.
```

### File Uploads

For resume and portfolio uploads, you'll need to:
1. Upload files to a cloud storage service (AWS S3, Google Cloud Storage)
2. Store the file URLs in Zoho Recruit
3. Update the API to handle file uploads

## Security Considerations

1. **Environment Variables**: Never commit API credentials to version control
2. **Rate Limiting**: Implement rate limiting to prevent abuse
3. **Input Validation**: Validate all form inputs on both client and server
4. **HTTPS**: Always use HTTPS in production
5. **Access Control**: Restrict API access to authorized domains

## Support

For issues with:
- **Zoho Recruit API**: Check [Zoho Recruit API Documentation](https://www.zoho.com/recruit/developer-guide/)
- **Integration Setup**: Review this guide and check server logs
- **Custom Development**: Contact your development team

## Next Steps

After setup, consider:
1. **Email Integration**: Set up automated email notifications
2. **Calendar Integration**: Connect with Google Calendar or Outlook
3. **Analytics**: Track application sources and conversion rates
4. **Custom Workflows**: Create automated hiring workflows
5. **Reporting**: Set up dashboards for application metrics 