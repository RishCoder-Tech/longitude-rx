import { NextRequest, NextResponse } from 'next/server'
import { uploadFile } from '@/lib/supabase'

const MONDAY_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU0NDAxOTg4MywiYWFpIjoxMSwidWlkIjo3NTU0MDgxMSwiaWFkIjoiMjAyNS0wNy0yOFQxODoyODo1MS41MjBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6Mjg5NzM5NTIsInJnbiI6InVzZTEifQ.iP0kcZLkzgwPTeWcM5obQVp-4bGlRlkkqP_yGjzPj7k'
const MONDAY_BOARD_ID = '9688248949'

// Map your form fields to Monday.com column IDs here
const COLUMN_MAPPING = {
  name: 'text_mkt9b5fs', // name
  email: 'email_mkt9fzqg', // Email
  phone: 'text_mkt9hfa8', // phone
  jobTitle: 'text_mkt9ktyn', // job title
  status: 'color_mkt9z5bw', // status
  people: 'multiple_person_mkt9jqbf', // people
  resumeUrl: 'text_mkt9zs20', // resume url
  coverLetter: 'long_text_mkt93w39', // cover
  salary: 'text_mkt9cxw6', // salary
  location: 'text_mkt996gr', // location
  files: 'file_mkt9xpbz', // files
  linkedin: 'text_mkt9ggk5', // linkedin
  portfolio: 'text_mkt9wg53', // portfolio
  currentCompany: 'text_mkt9mexf', // current company
  currentTitle: 'text_mkt9hs4m', // current title
  experience: 'text_mkt9t4j5', // experience
  education: 'text_mkt9e0cs', // education
  startDate: 'text_mkt9hbp7', // start date
  source: 'text_mkt9p0b9', // source
  workAuth: 'text_mkt9mjb1', // work auth
  remoteWork: 'text_mkt9ht67', // remote work
  visa: 'text_mkt973by', // visa
  infoAccurate: 'text_mkt992gr', // info accurate
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== Job Application Monday.com API Started ===')
    
    // Log user agent for mobile debugging
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent)
    console.log('User Agent:', userAgent)
    console.log('Is Mobile:', isMobile)
    
    if (!MONDAY_API_KEY || !MONDAY_BOARD_ID) {
      console.error('Missing Monday.com configuration')
      return NextResponse.json({ 
        success: false, 
        error: 'Monday.com API key or board ID not set.',
        setupRequired: true 
      }, { status: 500 })
    }
    
    console.log('Parsing form data...')
    const formData = await request.formData()
    console.log('Form data keys:', Array.from(formData.keys()))
    
    // Log file information for debugging
    const resumeFile = formData.get('resume')
    const portfolioFile = formData.get('portfolio')
    
    if (resumeFile && typeof resumeFile === 'object' && 'name' in resumeFile) {
      console.log('Resume file info:', {
        name: resumeFile.name,
        type: resumeFile.type,
        size: resumeFile.size,
        lastModified: resumeFile.lastModified
      })
    }
    
    if (portfolioFile && typeof portfolioFile === 'object' && 'name' in portfolioFile) {
      console.log('Portfolio file info:', {
        name: portfolioFile.name,
        type: portfolioFile.type,
        size: portfolioFile.size,
        lastModified: portfolioFile.lastModified
      })
    }
    
    const get = (key: string) => {
      const value = formData.get(key)
      console.log(`Field ${key}:`, value ? typeof value : 'undefined')
      return value || ''
    }
    
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

    console.log('Extracted form data:', {
      name,
      email,
      jobTitle,
      hasResume: !!formData.get('resume'),
      hasPortfolio: !!formData.get('portfolio'),
      isMobile
    })

    // Build column values JSON with proper Monday.com column format
    const column_values = {
      [COLUMN_MAPPING.name]: name,
      [COLUMN_MAPPING.email]: { email, text: email },
      [COLUMN_MAPPING.phone]: phone,
      [COLUMN_MAPPING.jobTitle]: jobTitle,
      [COLUMN_MAPPING.coverLetter]: coverLetter,
      [COLUMN_MAPPING.salary]: salaryExpectation,
      [COLUMN_MAPPING.location]: location,
      [COLUMN_MAPPING.linkedin]: linkedinUrl,
      [COLUMN_MAPPING.portfolio]: portfolioUrl,
      [COLUMN_MAPPING.currentCompany]: currentCompany,
      [COLUMN_MAPPING.currentTitle]: currentTitle,
      [COLUMN_MAPPING.experience]: experience,
      [COLUMN_MAPPING.education]: education,
      [COLUMN_MAPPING.startDate]: startDate,
      [COLUMN_MAPPING.source]: source,
      [COLUMN_MAPPING.workAuth]: workAuthorization,
      [COLUMN_MAPPING.remoteWork]: remoteWork,
      [COLUMN_MAPPING.visa]: visaSponsorship,
      [COLUMN_MAPPING.infoAccurate]: infoAccurate,
      // Set default status to "New"
      [COLUMN_MAPPING.status]: { labels: ['New'] },
    }

    // 1. Upload resume to Supabase first and get URL
    console.log('Starting resume upload to Supabase...')
    let resumeUrl = ''
    let resumeFileName = ''
    
    if (resumeFile && typeof resumeFile === 'object' && 'arrayBuffer' in resumeFile) {
      try {
        console.log('Processing resume file:', resumeFile.name, resumeFile.type, resumeFile.size)
        
        // Add mobile-specific file validation
        if (isMobile) {
          console.log('Mobile device detected - applying mobile-specific file handling')
          
          // Check if file is too large for mobile
          if (resumeFile.size > 10 * 1024 * 1024) { // 10MB limit for mobile
            console.warn('File too large for mobile device:', resumeFile.size)
          }
          
          // Check file type for mobile compatibility
          const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
          if (!allowedTypes.includes(resumeFile.type)) {
            console.warn('File type may not be supported on mobile:', resumeFile.type)
          }
        }
        
        console.log('Attempting Supabase upload for resume...')
        const uploadResult = await uploadFile(resumeFile as File, 'resumes')
        console.log('Supabase upload result:', uploadResult)
        
        if (uploadResult.success) {
          resumeUrl = uploadResult.url || ''
          resumeFileName = uploadResult.fileName || ''
          console.log('✅ Resume uploaded to Supabase successfully:', uploadResult)
        } else {
          console.error('❌ Resume upload to Supabase failed:', uploadResult.error)
          console.error('File details that failed:', {
            name: resumeFile.name,
            type: resumeFile.type,
            size: resumeFile.size,
            isMobile
          })
          
          // Fallback: Store as base64
          const arrayBuffer = await resumeFile.arrayBuffer()
          const buffer = Buffer.from(arrayBuffer)
          resumeUrl = `data:${resumeFile.type || 'application/octet-stream'};base64,${buffer.toString('base64')}`
          resumeFileName = resumeFile.name || 'resume'
          console.log('⚠️ Resume stored with fallback method (base64)')
        }
      } catch (error) {
        console.error('Error processing resume:', error)
        console.error('Error details:', {
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined,
          isMobile
        })
        // Continue without resume if upload fails
      }
    } else {
      console.log('No resume file found in form data')
    }

    // 2. Add resume URL to column values if available
    if (resumeUrl) {
      // Format as markdown link for better display in text columns
      const fileName = resumeFile && typeof resumeFile === 'object' && 'name' in resumeFile 
        ? resumeFile.name 
        : 'Resume'
      column_values[COLUMN_MAPPING.resumeUrl] = `[${fileName}](${resumeUrl})`
      console.log('Added resume URL to column values:', resumeUrl)
      console.log('Column values after adding resume URL:', column_values)
    }

    console.log('Column values prepared:', column_values)
    console.log('Resume URL being sent to Monday.com:', resumeUrl)
    console.log('Column ID for resume link:', COLUMN_MAPPING.resumeUrl)

    // 3. Monday.com API expects a GraphQL mutation
    const query = `mutation ($boardId: ID!, $itemName: String!, $columnVals: JSON!) {
      create_item (board_id: $boardId, item_name: $itemName, column_values: $columnVals) { id }
    }`

    const variables = {
      boardId: MONDAY_BOARD_ID,
      itemName: name,
      columnVals: JSON.stringify(column_values)
    }

    console.log('Creating Monday.com item...')
    console.log('Query:', query)
    console.log('Variables:', variables)

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
    console.log('Monday.com column values sent:', JSON.stringify(column_values, null, 2))
    
    if (data.errors) {
      console.error('Monday.com GraphQL errors:', data.errors)
      return NextResponse.json({ 
        success: false, 
        error: 'Monday.com GraphQL errors',
        details: data.errors 
      }, { status: 500 })
    }
    
    const itemId = data.data.create_item.id
    console.log('Item created successfully with ID:', itemId)

    // 4. Process portfolio file and create activity update
    const uploadedFiles: Array<{ 
      id: string; 
      name: string; 
      url: string; 
      viewerUrl: string; 
      type: string; 
      isPdf: boolean; 
    }> = []
    
    // Add resume to uploaded files if it was uploaded
    if (resumeUrl && resumeFileName) {
      const resumeFileData = formData.get('resume')
      const isPdf = resumeFileData && typeof resumeFileData === 'object' && 'type' in resumeFileData 
        ? resumeFileData.type === 'application/pdf' 
        : resumeFileName.toLowerCase().endsWith('.pdf')
      let viewerUrl = resumeUrl
      
      if (isPdf && resumeUrl.startsWith('http')) {
        // Create a PDF viewer link that opens in a PDF viewer
        viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(resumeUrl)}&embedded=true`
      }
      
      uploadedFiles.push({
        id: resumeFileName || `resume_${Date.now()}`,
        name: resumeFileData && typeof resumeFileData === 'object' && 'name' in resumeFileData 
          ? resumeFileData.name 
          : 'resume',
        url: resumeUrl,
        viewerUrl: viewerUrl,
        type: 'resume',
        isPdf: isPdf
      })
    }
    
    const uploadFileToSupabase = async (fileField: string) => {
      // Skip resume since it's already processed
      if (fileField === 'resume') return
      
      const file = formData.get(fileField)
      if (file && typeof file === 'object' && 'arrayBuffer' in file) {
        try {
          console.log(`Processing ${fileField} file:`, file.name, file.type, file.size)
          
          // Upload file to Supabase
          const uploadResult = await uploadFile(file as File, 'resumes')
          
          if (uploadResult.success) {
            // Create PDF viewer link for PDF files
            const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
            let viewerUrl = uploadResult.url || ''
            
            if (isPdf) {
              // Create a PDF viewer link that opens in a PDF viewer
              viewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(uploadResult.url || '')}&embedded=true`
            }
            
            uploadedFiles.push({
              id: uploadResult.fileName || `file_${Date.now()}`,
              name: file.name || `${fileField}_file`,
              url: uploadResult.url || '',
              viewerUrl: viewerUrl,
              type: fileField,
              isPdf: isPdf
            })
            console.log(`${fileField} uploaded to Supabase successfully:`, uploadResult)
          } else {
            console.error(`${fileField} upload to Supabase failed:`, uploadResult.error)
            
            // Fallback: Store file info for later upload (base64 method)
            const arrayBuffer = await file.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)
            
            uploadedFiles.push({
              id: `temp_${Date.now()}_${fileField}`,
              name: file.name || `${fileField}_file`,
              url: `data:${file.type || 'application/octet-stream'};base64,${buffer.toString('base64')}`,
              viewerUrl: `data:${file.type || 'application/octet-stream'};base64,${buffer.toString('base64')}`,
              type: fileField,
              isPdf: false
            })
            
            console.log(`${fileField} stored with fallback method due to Supabase configuration issue`)
          }
        } catch (error) {
          console.error(`Error processing ${fileField}:`, error)
          throw error
        }
      } else {
        console.log(`No ${fileField} file found in form data`)
      }
    }

    // Upload portfolio file only (resume already processed)
    console.log('Starting portfolio upload...')
    console.log('Form data keys available:', Array.from(formData.keys()))
    
    try {
      await uploadFileToSupabase('portfolio')
      console.log('Portfolio upload completed')
    } catch (err) {
      console.error('Portfolio upload failed:', err)
      // Don't re-throw the error to continue with the process
    }

    // 1. Post an update with ALL applicant details and file links
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
    ]

    // Add file links to the details if files were uploaded
    if (uploadedFiles.length > 0) {
      details.push('\n**📎 Uploaded Files:**')
      uploadedFiles.forEach(file => {
        const fileType = file.type === 'resume' ? '📄 Resume' : '📁 Portfolio'
        const fileIcon = file.isPdf ? '📄' : '📁'
        
        if (file.isPdf && file.viewerUrl) {
          // For PDFs, provide both direct download and PDF viewer links
          details.push(`${fileIcon} **${fileType}:** ${file.name}`)
          details.push(`   📥 [Download PDF](${file.url})`)
          details.push(`   👁️ [View PDF](${file.viewerUrl})`)
        } else {
          // For other files, just provide the download link
          details.push(`${fileIcon} **${fileType}:** [${file.name}](${file.url})`)
        }
      })
    }

    const detailsText = details.join('\n')
    console.log('Creating update with details...')

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
        console.log('Update created successfully')
      }
    }

    // 3. Upload files to Monday.com Files column using the proper file upload endpoint
    if (uploadedFiles.length > 0) {
      console.log('Uploading files to Monday.com Files column:', uploadedFiles)
      
      for (const file of uploadedFiles) {
        try {
          // Download the file from Supabase to get the file buffer
          const fileResponse = await fetch(file.url)
          if (!fileResponse.ok) {
            console.error(`Failed to download file from Supabase: ${file.name}`)
            continue
          }
          
          const fileBuffer = await fileResponse.arrayBuffer()
          // Determine file type based on file extension
          const fileExtension = file.name.split('.').pop()?.toLowerCase()
          let mimeType = 'application/octet-stream'
          
          if (fileExtension === 'pdf') mimeType = 'application/pdf'
          else if (fileExtension === 'docx') mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          else if (fileExtension === 'doc') mimeType = 'application/msword'
          else if (fileExtension === 'txt') mimeType = 'text/plain'
          else if (fileExtension === 'jpg' || fileExtension === 'jpeg') mimeType = 'image/jpeg'
          else if (fileExtension === 'png') mimeType = 'image/png'
          
          const fileBlob = new Blob([fileBuffer], { type: mimeType })
          
          // Create FormData for Monday.com file upload
          const formData = new FormData()
          formData.append('query', `mutation ($file: File!, $itemId: ID!, $columnId: String!) {
            add_file_to_column(file: $file, item_id: $itemId, column_id: $columnId) {
              id
              name
              url
            }
          }`)
          formData.append('variables[file]', fileBlob, file.name)
          formData.append('variables[itemId]', itemId)
          formData.append('variables[columnId]', COLUMN_MAPPING.files)
          
          // Use the /v2/file endpoint as recommended by Monday.com
          const uploadFileRes = await fetch('https://api.monday.com/v2/file', {
            method: 'POST',
            headers: {
              'Authorization': MONDAY_API_KEY,
            },
            body: formData
          })
          
          if (!uploadFileRes.ok) {
            const errorText = await uploadFileRes.text()
            console.error(`File upload HTTP error for ${file.name}:`, uploadFileRes.status, uploadFileRes.statusText)
            console.error('Error response:', errorText)
          } else {
            const uploadFileData = await uploadFileRes.json()
            if (uploadFileData.errors) {
              console.error(`Error uploading file ${file.name}:`, uploadFileData.errors)
            } else {
              console.log(`✅ File uploaded to Monday.com successfully: ${file.name}`)
            }
          }
        } catch (error) {
          console.error(`Error uploading file ${file.name} to Monday.com:`, error)
        }
      }
    } else {
      console.log('No files to upload to Monday.com Files column')
    }

    // Note: Resume link is already included in the initial column values when creating the item

    console.log('=== Job Application Monday.com API Completed Successfully ===')

    return NextResponse.json({ 
      success: true, 
      itemId,
      filesProcessed: {
        resume: uploadedFiles.some(f => f.name.toLowerCase().includes('resume')),
        portfolio: uploadedFiles.some(f => f.name.toLowerCase().includes('portfolio')),
        uploadedFiles: uploadedFiles.length,
        fileDetails: uploadedFiles
      }
    })
  } catch (error) {
    console.error('=== Job Application Monday.com API Error ===')
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