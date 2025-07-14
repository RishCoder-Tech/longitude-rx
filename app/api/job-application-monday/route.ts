import { NextRequest, NextResponse } from 'next/server'

const MONDAY_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjUzNDcyMjcwMiwiYWFpIjoxMSwidWlkIjo3Nzk3MDE3NywiaWFkIjoiMjAyNS0wNy0wM1QyMDowMjoxNS42ODlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MzAyNDc5NzcsInJnbiI6InVzZTEifQ.FGVhzRX9X2ciQEzfSTc77nf8MAx-hOp1uvacoPpkwBw'
const MONDAY_BOARD_ID = '9518124651'

// Map your form fields to Monday.com column IDs here
const COLUMN_MAPPING = {
  name: 'name', // The name column (pulse name)
  email: 'email_mksgnac4',
  phone: 'text_mksgerae',
  jobTitle: 'text_mksgw404',
  coverLetter: 'text_mksg141h',
  files: 'file_mksgbnb5', // Files column for resume and portfolio
  // Add more mappings as needed
}

export async function POST(request: NextRequest) {
  try {
    if (!MONDAY_API_KEY || !MONDAY_BOARD_ID) {
      return NextResponse.json({ success: false, error: 'Monday.com API key or board ID not set.' }, { status: 500 })
    }
    const formData = await request.formData()
    const get = (key: string) => formData.get(key) || ''
    const name = get('firstName') + ' ' + get('lastName')
    const email = get('email')
    const phone = get('phone')
    const jobTitle = get('jobTitle')
    const coverLetter = get('coverLetter')
    // Add all other fields
    const location = get('location')
    const linkedinUrl = get('linkedinUrl')
    const portfolioUrl = get('portfolioUrl')
    const currentCompany = get('currentCompany')
    const currentTitle = get('currentTitle')
    const experience = get('experience')
    const education = get('education')
    const salaryExpectation = get('salaryExpectation')
    const startDate = get('startDate')
    const source = get('source')
    const diversity = get('diversity')
    const workAuthorization = get('workAuthorization')
    const remoteWork = get('remoteWork')
    const visaSponsorship = get('visaSponsorship')
    const infoAccurate = get('infoAccurate')

    // Build column values JSON with proper Monday.com column format
    const column_values = {
      [COLUMN_MAPPING.email]: { email, text: email },
      [COLUMN_MAPPING.phone]: phone,
      [COLUMN_MAPPING.jobTitle]: jobTitle,
      [COLUMN_MAPPING.coverLetter]: coverLetter,
      location_mkspbkm5: location,
      link_mksp64qf: linkedinUrl,
      link_mksp30yy: portfolioUrl,
      text_mkspcm96: currentCompany,
      text_mkspg1dr: currentTitle,
      text_mksprn6w: experience,
      text_mkspgz9y: education,
      numeric_mkspec9f: salaryExpectation,
      date_mkspm557: startDate,
      text_mkspf2gm: source,
      diversity: diversity,
      boolean_mkspn09e: workAuthorization,
      boolean_mkspywkv: remoteWork,
      boolean_mkspy7qx: visaSponsorship,
      text_mksp1z0t: infoAccurate,
    }

    // Monday.com API expects a GraphQL mutation
    const query = `mutation ($boardId: ID!, $itemName: String!, $columnVals: JSON!) {
      create_item (board_id: $boardId, item_name: $itemName, column_values: $columnVals) { id }
    }`

    const variables = {
      boardId: MONDAY_BOARD_ID,
      itemName: name,
      columnVals: JSON.stringify(column_values)
    }

    const response = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables })
    })

    const data = await response.json()
    if (data.errors) {
      return NextResponse.json({ success: false, error: data.errors }, { status: 500 })
    }
    const itemId = data.data.create_item.id

    // 1. Post an update with ALL applicant details
    const details = [
      `**Name:** ${name}`,
      `**Email:** ${email}`,
      `**Phone:** ${phone}`,
      `**Location:** ${location}`,
      `**LinkedIn:** ${linkedinUrl}`,
      `**Portfolio URL:** ${portfolioUrl}`,
      `**Current Company:** ${currentCompany}`,
      `**Current Title:** ${currentTitle}`,
      `**Experience:** ${experience}`,
      `**Education:** ${education}`,
      `**Salary Expectation:** ${salaryExpectation}`,
      `**Earliest Start Date:** ${startDate}`,
      `**Source:** ${source}`,
      `**Diversity:** ${diversity}`,
      `**Work Authorization:** ${workAuthorization}`,
      `**Visa Sponsorship Required:** ${visaSponsorship}`,
      `**Info Accurate Certification:** ${infoAccurate}`,
      `**Remote Work:** ${remoteWork}`,
      `**Job Title:** ${jobTitle}`,
      `**Cover Letter:** ${coverLetter}`,
    ].join('\n')

    const updateQuery = `mutation ($itemId: ID!, $body: String!) {
      create_update (item_id: $itemId, body: $body) { id }
    }`
    const updateVars = { itemId, body: details }
    const updateRes = await fetch('https://api.monday.com/v2', {
      method: 'POST',
      headers: {
        'Authorization': MONDAY_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: updateQuery, variables: updateVars })
    })
    const updateData = await updateRes.json()
    if (updateData.errors) {
      return NextResponse.json({ success: false, error: updateData.errors }, { status: 500 })
    }

    // 2. Upload files and add them to the Files column
    const uploadedFiles = []
    
    const uploadFileToMonday = async (fileField: string) => {
      const file = formData.get(fileField)
      if (file && typeof file === 'object' && 'arrayBuffer' in file) {
        // Use Blob for compatibility
        const arrayBuffer = await file.arrayBuffer()
        const blob = new Blob([arrayBuffer], { type: file.type })
        const fileForm = new FormData()
        fileForm.append('query', `mutation add_file($file: File!, $itemId: ID!) { add_file_to_item (file: $file, item_id: $itemId) { id, name, url } }`)
        fileForm.append('variables', JSON.stringify({ itemId, file: null }))
        fileForm.append('file', blob, file.name)
        const fileRes = await fetch('https://api.monday.com/v2/file', {
          method: 'POST',
          headers: {
            'Authorization': MONDAY_API_KEY,
          },
          body: fileForm as any,
        })
        const fileData = await fileRes.json()
        if (fileData.errors) {
          throw new Error(`File upload error (${fileField}): ${JSON.stringify(fileData.errors)}`)
        }
        // Store file info for the Files column
        if (fileData.data?.add_file_to_item) {
          uploadedFiles.push({
            id: fileData.data.add_file_to_item.id,
            name: fileData.data.add_file_to_item.name,
            url: fileData.data.add_file_to_item.url
          })
        }
      }
    }

    try {
      await uploadFileToMonday('resume')
    } catch (err) {
      // Resume upload failed, but continue
      console.error(err)
    }
    try {
      await uploadFileToMonday('portfolio')
    } catch (err) {
      // Portfolio upload failed, but continue
      console.error(err)
    }

    // 3. Update the Files column with uploaded files
    if (uploadedFiles.length > 0) {
      const filesColumnValue = JSON.stringify({
        files: uploadedFiles.map(file => ({
          id: file.id,
          name: file.name,
          url: file.url
        }))
      })

      const updateFilesQuery = `mutation ($itemId: ID!, $columnId: String!, $value: JSON!) {
        change_column_value (item_id: $itemId, column_id: $columnId, value: $value) { id }
      }`
      
      const updateFilesVars = {
        itemId,
        columnId: COLUMN_MAPPING.files,
        value: filesColumnValue
      }
      
      const updateFilesRes = await fetch('https://api.monday.com/v2', {
        method: 'POST',
        headers: {
          'Authorization': MONDAY_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: updateFilesQuery, variables: updateFilesVars })
      })
      
      const updateFilesData = await updateFilesRes.json()
      if (updateFilesData.errors) {
        console.error('Error updating files column:', updateFilesData.errors)
      }
    }

    return NextResponse.json({ success: true, itemId })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 })
  }
} 