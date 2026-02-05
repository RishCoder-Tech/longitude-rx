import { NextRequest, NextResponse } from 'next/server'

const MONDAY_API_KEY = process.env.MONDAY_API_KEY || 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU1NTgwMzE2NCwiYWFpIjoxMSwidWlkIjo3NTU0MDgxMSwiaWFkIjoiMjAyNS0wOC0yOFQyMTowNzo0Mi4zNDFaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6Mjg5NzM5NTIsInJnbiI6InVzZTEifQ.3oFQ9V95JqhU6ZTZaNWPa5do386CstnoQQdShaJtMpg'
const MONDAY_BOARD_ID = process.env.MONDAY_NEWSLETTER_BOARD_ID || '9729192571'

const COLUMN_MAPPING = {
  name: 'text_mktdmsen',
  email: 'email_mktd6fce',
  status: 'color_mktdej37',
  signupDate: 'date_mktd5ryk',
  source: 'text_mktdzd6y',
  campaign: 'text_mktdk4ws',
  assignedTo: 'text_mktdjf2d',
}

export async function POST(request: NextRequest) {
  try {
    if (!MONDAY_API_KEY || !MONDAY_BOARD_ID) {
      return NextResponse.json(
        { success: false, error: 'Monday.com API key or board ID not set.', setupRequired: true },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const get = (key: string) => {
      const value = formData.get(key)
      return (typeof value === 'string' ? value : '') || ''
    }

    const email = get('email')
    const name = get('name') || email.split('@')[0]
    const source = get('source') || 'Website'
    const campaign = get('campaign') || ''

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email address is required.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const column_values = {
      [COLUMN_MAPPING.name]: name,
      [COLUMN_MAPPING.email]: { email, text: email },
      [COLUMN_MAPPING.status]: { labels: ['Active'] },
      [COLUMN_MAPPING.signupDate]: new Date().toISOString().split('T')[0],
      [COLUMN_MAPPING.source]: source,
      [COLUMN_MAPPING.campaign]: campaign,
    }

    const query = `mutation ($boardId: ID!, $itemName: String!, $columnVals: JSON!) {
      create_item (board_id: $boardId, item_name: $itemName, column_values: $columnVals) { id }
    }`
    const variables = {
      boardId: MONDAY_BOARD_ID,
      itemName: name,
      columnVals: JSON.stringify(column_values),
    }

    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        Authorization: MONDAY_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Monday.com HTTP error:', response.status, errorText)
      return NextResponse.json(
        { success: false, error: `Monday.com API error: ${response.status} ${response.statusText}`, details: errorText },
        { status: 500 }
      )
    }

    const data = await response.json()
    if (data.errors) {
      console.error('Monday.com GraphQL errors:', data.errors)
      return NextResponse.json(
        { success: false, error: 'Monday.com GraphQL errors', details: data.errors },
        { status: 500 }
      )
    }

    const itemId = data.data.create_item.id

    const detailsText = [
      `**Email:** ${email}`,
      `**Name:** ${name}`,
      `**Source:** ${source}`,
      `**Campaign:** ${campaign || 'None'}`,
      `**Subscribed:** ${new Date().toLocaleString()}`,
      `**Status:** Active`,
    ].join('\n')

    const updateQuery = `mutation ($itemId: ID!, $body: String!) {
      create_update (item_id: $itemId, body: $body) { id }
    }`
    try {
      await fetch('https://api.monday.com/v2', {
        method: 'POST',
        headers: {
          Authorization: MONDAY_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: updateQuery, variables: { itemId, body: detailsText } }),
      })
    } catch {
      // non-fatal
    }

    return NextResponse.json({ success: true, itemId, message: 'Successfully subscribed to newsletter' })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        errorType: error instanceof Error ? error.constructor.name : 'Unknown',
        setupRequired: false,
      },
      { status: 500 }
    )
  }
}
