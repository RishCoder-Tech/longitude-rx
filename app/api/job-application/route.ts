import { NextRequest, NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    console.log('Form data received:', Object.fromEntries(formData.entries()))

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
    const workAuthorization = formData.get('workAuthorization') === 'true'
    const remoteWork = formData.get('remoteWork') === 'true'
    const salaryExpectation = formData.get('salaryExpectation') as string
    const startDate = formData.get('startDate') as string
    const source = formData.get('source') as string
    const diversity = formData.get('diversity') as string
    const agreeToTerms = formData.get('agreeToTerms') === 'true'
    const jobTitle = formData.get('jobTitle') as string
    const jobId = formData.get('jobId') as string

    // Validate required fields
    if (!firstName || !lastName || !email || !location || !experience || !jobTitle || !jobId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!agreeToTerms) {
      return NextResponse.json(
        { error: 'You must agree to the terms and conditions' },
        { status: 400 }
      )
    }

    // Prepare application data for Contentful
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
          'en-US': workAuthorization
        },
        remoteWork: {
          'en-US': remoteWork
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
          'en-US': agreeToTerms
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

    console.log('Application data prepared:', applicationData)

    // Save to Contentful
    let contentfulResult = null

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
      console.error('Contentful error:', contentfulError)
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      contentful: contentfulResult ? { success: true, entryId: contentfulResult.id } : { success: false },
      applicationId: contentfulResult?.id
    })

  } catch (error) {
    console.error('Job application error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to submit application',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 