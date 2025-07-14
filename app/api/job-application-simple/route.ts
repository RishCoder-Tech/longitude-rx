import { NextRequest, NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

// Zoho Recruit API configuration
const ZOHO_RECRUIT_BASE_URL = 'https://recruit.zoho.com/recruit/v2'
const ZOHO_ACCESS_TOKEN = process.env.ZOHO_ACCESS_TOKEN
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN
const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET

// Function to get Zoho access token
async function getZohoAccessToken() {
  if (!ZOHO_REFRESH_TOKEN || !ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET) {
    throw new Error('Zoho credentials not configured')
  }

  const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: ZOHO_REFRESH_TOKEN,
      client_id: ZOHO_CLIENT_ID,
      client_secret: ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to get Zoho access token')
  }

  const data = await response.json()
  return data.access_token
}

// Function to create candidate in Zoho Recruit
async function createZohoRecruitCandidate(applicationData: any) {
  const accessToken = await getZohoAccessToken()
  
  const candidateData = {
    data: [{
      First_Name: applicationData.firstName,
      Last_Name: applicationData.lastName,
      Email: applicationData.email,
      Phone: applicationData.phone || '',
      Current_Company: applicationData.currentCompany || '',
      Current_Job_Title: applicationData.currentTitle || '',
      Experience_in_Years: applicationData.experience,
      Education: applicationData.education || '',
      Cover_Letter: applicationData.coverLetter || '',
      Work_Authorization: applicationData.workAuthorization ? 'Yes' : 'No',
      Remote_Work_Preference: applicationData.remoteWork ? 'Yes' : 'No',
      Salary_Expectation: applicationData.salaryExpectation || '',
      Earliest_Start_Date: applicationData.startDate || '',
      Source: applicationData.source || 'Website',
      LinkedIn_URL: applicationData.linkedinUrl || '',
      Portfolio_URL: applicationData.portfolioUrl || '',
      Applied_Job_Title: applicationData.jobTitle,
      Applied_Job_ID: applicationData.jobId,
      Application_Status: 'New',
      Application_Date: new Date().toISOString().split('T')[0],
      Location: applicationData.location,
      Diversity_Information: applicationData.diversity || '',
    }]
  }

  const response = await fetch(`${ZOHO_RECRUIT_BASE_URL}/Candidates`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(candidateData),
  })

  if (!response.ok) {
    const errorData = await response.text()
    console.error('Zoho Recruit API error:', errorData)
    throw new Error(`Zoho Recruit API error: ${response.status} ${response.statusText}`)
  }

  const result = await response.json()
  return result
}

export async function POST(request: NextRequest) {
  try {
    console.log('Starting simple job application submission...')
    const formData = await request.formData()
    
    console.log('Form data received, extracting fields...')
    
    // Extract form data
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const location = formData.get('location') as string
    const linkedinUrl = formData.get('linkedinUrl') as string
    const portfolioUrl = formData.get('portfolioUrl') as string
    const currentCompany = formData.get('currentCompany') as string
    const currentTitle = formData.get('currentTitle') as string
    const experience = formData.get('experience') as string
    const education = formData.get('education') as string
    const coverLetter = formData.get('coverLetter') as string
    const workAuthorization = formData.get('workAuthorization') as string
    const remoteWork = formData.get('remoteWork') as string
    const salaryExpectation = formData.get('salaryExpectation') as string
    const startDate = formData.get('startDate') as string
    const source = formData.get('source') as string
    const diversity = formData.get('diversity') as string
    const agreeToTerms = formData.get('agreeToTerms') as string
    const jobTitle = formData.get('jobTitle') as string
    const jobId = formData.get('jobId') as string

    console.log('Extracted form data:', {
      firstName,
      lastName,
      email,
      jobTitle,
      jobId
    })

    // Validate required fields
    if (!firstName || !lastName || !email || !location || !experience) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('Creating job application entry in Contentful...')
    
    // Create application entry in Contentful (without file uploads)
    const applicationData = {
      fields: {
        firstName: {
          'en-US': firstName
        },
        lastName: {
          'en-US': lastName
        },
        email: {
          'en-US': email
        },
        phone: {
          'en-US': phone || ''
        },
        location: {
          'en-US': location
        },
        linkedinUrl: {
          'en-US': linkedinUrl || ''
        },
        portfolioUrl: {
          'en-US': portfolioUrl || ''
        },
        currentCompany: {
          'en-US': currentCompany || ''
        },
        currentTitle: {
          'en-US': currentTitle || ''
        },
        experience: {
          'en-US': experience
        },
        education: {
          'en-US': education || ''
        },
        coverLetter: {
          'en-US': coverLetter || ''
        },
        workAuthorization: {
          'en-US': workAuthorization === 'true'
        },
        remoteWork: {
          'en-US': remoteWork === 'true'
        },
        salaryExpectation: {
          'en-US': salaryExpectation || ''
        },
        startDate: {
          'en-US': startDate || ''
        },
        source: {
          'en-US': source || ''
        },
        diversity: {
          'en-US': diversity || ''
        },
        agreeToTerms: {
          'en-US': agreeToTerms === 'true'
        },
        jobTitle: {
          'en-US': jobTitle
        },
        jobId: {
          'en-US': jobId
        },
        status: {
          'en-US': 'New'
        },
        applicationDate: {
          'en-US': new Date().toISOString()
        }
      }
    }

        console.log('Application data prepared')

    // Try to save to Zoho Recruit first
    let zohoResult = null
    let contentfulResult = null

    try {
      console.log('Creating candidate in Zoho Recruit...')
      zohoResult = await createZohoRecruitCandidate(applicationData)
      console.log('Zoho Recruit candidate created:', zohoResult)
    } catch (zohoError) {
      console.error('Zoho Recruit error:', zohoError)
      // Continue with Contentful as fallback
    }

    // Also save to Contentful as backup
    try {
      console.log('Creating job application entry in Contentful...')
      
      try {
        // Save to Contentful
        const entry = await contentfulClient.createEntry('jobApplication', applicationData)
        console.log('Entry created, publishing...')
        await entry.publish()
        console.log('Entry published successfully:', entry.sys.id)
        contentfulResult = { id: entry.sys.id }
      } catch (contentfulError) {
        console.error('Contentful error:', contentfulError)
        
        // Check if it's a content type error
        if (contentfulError && typeof contentfulError === 'object' && 'message' in contentfulError) {
          const errorMessage = contentfulError.message as string
          if (errorMessage.includes('unknownContentType') || errorMessage.includes('DOESNOTEXIST')) {
            console.log('Contentful content type does not exist, skipping Contentful save')
          } else {
            throw contentfulError
          }
        } else {
          throw contentfulError
        }
      }
    } catch (contentfulError) {
      console.error('Contentful fallback error:', contentfulError)
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      zohoRecruit: zohoResult ? { success: true, candidateId: zohoResult.data?.[0]?.details?.id } : { success: false },
      contentful: contentfulResult ? { success: true, entryId: contentfulResult.id } : { success: false },
      applicationId: zohoResult?.data?.[0]?.details?.id || contentfulResult?.id
    })

  } catch (error) {
    console.error('Error submitting job application:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { 
        error: 'Failed to submit application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 