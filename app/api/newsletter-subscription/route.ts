import { NextRequest, NextResponse } from 'next/server'

const MONDAY_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU1NTgwMzE2NCwiYWFpIjoxMSwidWlkIjo3NTU0MDgxMSwiaWFkIjoiMjAyNS0wOC0yOFQyMTowNzo0Mi4zNDFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6Mjg5NzM5NTIsInJnbiI6InVzZTEifQ.3oFQ9V95JqhU6ZTZaNWPa5do386CstnoQQdShaJtMpg'
const MONDAY_BOARD_ID = '9729192571'

const COLUMN_MAPPING = {
  name: 'text_mktdmsen', // Subscriber Name
  email: 'email_mktd6fce', // Email Address
  status: 'color_mktdej37', // Status
  signupDate: 'date_mktd5ryk', // Signup Date
  source: 'text_mktdzd6y', // Source
  campaign: 'text_mktdk4ws', // Campaign
  assignedTo: 'text_mktdjf2d', // Assigned To
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== Newsletter Subscription Monday.com API Started ===')
    
    if (!MONDAY_API_KEY || !MONDAY_BOARD_ID) {
      console.error('Missing Monday.com configuration')
      return NextResponse.json({ 
        success: false, 
        error: 'Monday.com API key or board ID not set.',
        setupRequired: true 
      }, { status: 500 })
    }
    
    const formData = await request.formData()
    console.log('Form data keys:', Array.from(formData.keys()))
    
    const get = (key: string) => {
      const value = formData.get(key)
      console.log(`Field ${key}:`, value ? typeof value : 'undefined')
      return value || ''
    }
    
    const email = get('email')
    const name = get('name') || email.split('@')[0] // Use email prefix if no name provided
    const source = get('source') || 'Website'
    const campaign = get('campaign') || ''

    console.log('Extracted newsletter subscription data:', {
      email,
      name,
      source,
      campaign
    })

    // Validate required fields
    if (!email) {
      return NextResponse.json({ 
        success: false, 
        error: 'Email address is required.' 
      }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Please enter a valid email address.' 
      }, { status: 400 })
    }

    // Build column values JSON with proper Monday.com column format
    const column_values = {
      [COLUMN_MAPPING.name]: name,
      [COLUMN_MAPPING.email]: { email, text: email },
      [COLUMN_MAPPING.status]: { labels: ['Active'] },
      [COLUMN_MAPPING.signupDate]: new Date().toISOString().split('T')[0],
      [COLUMN_MAPPING.source]: source,
      [COLUMN_MAPPING.campaign]: campaign,
    }

    console.log('Column values prepared:', column_values)

    // Monday.com API GraphQL mutation
    const query = `mutation ($boardId: ID!, $itemName: String!, $columnVals: JSON!) {
      create_item (board_id: $boardId, item_name: $itemName, column_values: $columnVals) { id }
    }`

    const variables = {
      boardId: MONDAY_BOARD_ID,
      itemName: name,
      columnVals: JSON.stringify(column_values)
    }

    console.log('Creating Monday.com newsletter subscription item...')

    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables })
    })

    console.log('Monday.com response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Monday.com HTTP error:', response.status, response.statusText)
      console.error('Error response:', errorText)
      return NextResponse.json({ 
        success: false, 
        error: `Monday.com API error: ${response.status} ${response.statusText}`,
        details: errorText
      }, { status: 500 })
    }

    const data = await response.json()
    console.log('Monday.com response data:', data)
    
    if (data.errors) {
      console.error('Monday.com GraphQL errors:', data.errors)
      return NextResponse.json({ 
        success: false, 
        error: 'Monday.com GraphQL errors',
        details: data.errors 
      }, { status: 500 })
    }
    
    const itemId = data.data.create_item.id
    console.log('Newsletter subscription item created successfully with ID:', itemId)

    // Create an update with subscription details
    const details = [
      `**Email:** ${email}`,
      `**Name:** ${name}`,
      `**Source:** ${source}`,
      `**Campaign:** ${campaign || 'None'}`,
      `**Subscribed:** ${new Date().toLocaleString()}`,
      `**Status:** Active`,
    ]

    const detailsText = details.join('\n')
    console.log('Creating update with subscription details...')

    const updateQuery = `mutation ($itemId: ID!, $body: String!) {
      create_update (item_id: $itemId, body: $body) { id }
    }`
    const updateVars = { itemId, body: detailsText }
    
    const updateRes = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: updateQuery, variables: updateVars })
    })

    if (!updateRes.ok) {
      const errorText = await updateRes.text()
      console.error('Update creation HTTP error:', updateRes.status, updateRes.statusText)
      console.error('Error response:', errorText)
    } else {
      const updateData = await updateRes.json()
      if (updateData.errors) {
        console.error('Update creation GraphQL errors:', updateData.errors)
      } else {
        console.log('Newsletter subscription update created successfully')
      }
    }

    console.log('=== Newsletter Subscription Monday.com API Completed Successfully ===')

    return NextResponse.json({ 
      success: true, 
      itemId,
      message: 'Successfully subscribed to newsletter'
    })

  } catch (error) {
    console.error('=== Newsletter Subscription Monday.com API Error ===')
    if (error instanceof Error) {
      console.error('Error type:', error.constructor.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    } else {
      console.error('Unknown error type:', typeof error)
      console.error('Error:', error)
    }
    
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      errorType: error instanceof Error ? error.constructor.name : 'Unknown',
      setupRequired: false
    }, { status: 500 })
  }
} 