import { NextRequest, NextResponse } from 'next/server'

const MONDAY_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjUzNDcyMjcwMiwiYWFpIjoxMSwidWlkIjo3Nzk3MDE3NywiaWFkIjoiMjAyNS0wNy0wM1QyMDowMjoxNS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MzAyNDc5NzcsInJnbiI6InVzZTEifQ.bJmXKWd-iZD0ZPh3m3ucG6bOarhEyMyvKpJypPHkoIU'
const MONDAY_BOARD_ID = '9729231565'

const COLUMN_MAPPING = {
  name: 'text_mktd22pq', // Name
  email: 'email_mktds472', // Email
  organization: 'text_mktdthzs', // Organization
  role: 'text_mktdhz7q', // Role/Title
  message: 'long_text_mktdendk', // Message
  status: 'color_mktd93cz', // Status
  submissionDate: 'date_mktd1vs', // Submission Date
  assignedTo: 'multiple_person_mktdpfgb', // Assigned To
  source: 'text_mktdqwzj', // Source
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== Contact Form Monday.com API Started ===')
    
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
    
    const name = get('firstName') + ' ' + get('lastName')
    const email = get('email')
    const organization = get('organization')
    const role = get('role')
    const message = get('message')

    console.log('Extracted contact form data:', {
      name,
      email,
      organization,
      role,
      messageLength: message.length
    })

    // Validate required fields
    if (!name.trim() || !email || !organization || !message) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: name, email, organization, and message are required.' 
      }, { status: 400 })
    }

    // Build column values JSON with proper Monday.com column format
    const column_values = {
      [COLUMN_MAPPING.name]: name,
      [COLUMN_MAPPING.email]: { email, text: email },
      [COLUMN_MAPPING.organization]: organization,
      [COLUMN_MAPPING.role]: role,
      [COLUMN_MAPPING.message]: message,
      [COLUMN_MAPPING.status]: { labels: ['New'] },
      [COLUMN_MAPPING.submissionDate]: new Date().toISOString().split('T')[0],
      [COLUMN_MAPPING.source]: 'Website Contact Form',
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

    console.log('Creating Monday.com contact item...')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout
    let itemId: string

    try {
      const response = await fetch('https://api.monday.com/v2', {
        method: 'POST',
        headers: {
          'Authorization': MONDAY_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)
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
      
      itemId = data.data.create_item.id
      console.log('Contact item created successfully with ID:', itemId)
    } catch (fetchError) {
      clearTimeout(timeoutId)
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error('Monday.com API request timed out')
        return NextResponse.json({ 
          success: false, 
          error: 'Request timed out. Please try again.'
        }, { status: 408 })
      }
      throw fetchError
    }

    // Create an update with contact details
    const details = [
      `**Name:** ${name}`,
      `**Email:** ${email}`,
      `**Organization:** ${organization}`,
      `**Role:** ${role}`,
      `**Message:** ${message}`,
      `**Submitted:** ${new Date().toLocaleString()}`,
    ]

    const detailsText = details.join('\n')
    console.log('Creating update with contact details...')

    const updateQuery = `mutation ($itemId: ID!, $body: String!) {
      create_update (item_id: $itemId, body: $body) { id }
    }`
    const updateVars = { itemId, body: detailsText }
    
    try {
      const updateController = new AbortController()
      const updateTimeoutId = setTimeout(() => updateController.abort(), 15000) // 15 second timeout
      
      const updateRes = await fetch('https://api.monday.com/v2', {
        method: 'POST',
        headers: {
          'Authorization': MONDAY_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: updateQuery, variables: updateVars }),
        signal: updateController.signal
      })

      clearTimeout(updateTimeoutId)

      if (!updateRes.ok) {
        const errorText = await updateRes.text()
        console.error('Update creation HTTP error:', updateRes.status, updateRes.statusText)
        console.error('Error response:', errorText)
      } else {
        const updateData = await updateRes.json()
        if (updateData.errors) {
          console.error('Update creation GraphQL errors:', updateData.errors)
        } else {
          console.log('Contact update created successfully')
        }
      }
    } catch (updateError) {
      console.error('Error creating update (non-critical):', updateError)
      // Don't fail the entire request if update creation fails
    }

    console.log('=== Contact Form Monday.com API Completed Successfully ===')

    return NextResponse.json({ 
      success: true, 
      itemId,
      message: 'Contact form submitted successfully'
    })

  } catch (error) {
    console.error('=== Contact Form Monday.com API Error ===')
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