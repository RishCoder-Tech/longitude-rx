import { NextRequest, NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'
import { createClient } from 'contentful'

export async function GET(request: NextRequest) {
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!spaceId || !accessToken) {
    return NextResponse.json({
      success: false,
      error: 'Missing Contentful credentials',
      spaceId: !!spaceId,
      hasAccessToken: !!accessToken,
      setupInstructions: {
        step1: 'Add the following to your .env.local file:',
        step2: 'CONTENTFUL_SPACE_ID=your_space_id',
        step3: 'CONTENTFUL_ACCESS_TOKEN=your_access_token',
        step4: 'Restart your development server after adding these variables'
      }
    })
  }

  try {
    const client = createClient({
      space: spaceId,
      accessToken: accessToken,
    })

    console.log('Testing Contentful connection...')

    // Test basic connection by getting space info
    const space = await client.getSpace()
    console.log('Space info retrieved:', space.name)

    // Get all content types to see what exists
    const contentTypes = await client.getContentTypes()
    console.log('Available content types:', contentTypes.items.map(ct => ct.sys.id))

    // Check for specific content types we need
    const requiredTypes = ['jobListing', 'jobApplication']
    const existingTypes = contentTypes.items.map(ct => ct.sys.id)
    const missingTypes = requiredTypes.filter(type => !existingTypes.includes(type))

    // Try to get job listings
    let jobListings = []
    try {
      const jobsResponse = await client.getEntries({
        content_type: 'jobListing',
        limit: 10
      })
      jobListings = jobsResponse.items
      console.log('Found job listings:', jobListings.length)
    } catch (jobError) {
      console.log('Error fetching job listings:', jobError)
    }

    // Try to get job applications
    let jobApplications = []
    try {
      const appsResponse = await client.getEntries({
        content_type: 'jobApplication',
        limit: 10
      })
      jobApplications = appsResponse.items
      console.log('Found job applications:', jobApplications.length)
    } catch (appError) {
      console.log('Error fetching job applications:', appError)
    }

    return NextResponse.json({
      success: true,
      space: {
        name: space.name,
        id: space.sys.id
      },
      contentTypes: {
        available: existingTypes,
        required: requiredTypes,
        missing: missingTypes
      },
      data: {
        jobListings: jobListings.length,
        jobApplications: jobApplications.length
      },
      setupRequired: missingTypes.length > 0,
      nextSteps: missingTypes.length > 0 ? 
        `Create the following content types in Contentful: ${missingTypes.join(', ')}` :
        'All required content types exist. You can now add job listings and test applications.'
    })

  } catch (error) {
    console.error('Contentful test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      spaceId,
      hasAccessToken: !!accessToken
    })
  }
} 