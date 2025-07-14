import { NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

export async function GET() {
  try {
    console.log('Testing Contentful jobs fetch...')

    // Test fetching jobs from Contentful
    const jobsResponse = await contentfulClient.getEntries({
      content_type: 'jobListing',
      limit: 10
    })

    console.log('Jobs response:', {
      total: jobsResponse.total,
      items: jobsResponse.items.length
    })

    const jobs = jobsResponse.items.map(item => ({
      id: item.sys.id,
      title: item.fields.title,
      department: item.fields.department,
      location: item.fields.location,
      type: item.fields.type,
      description: item.fields.description,
      requirements: item.fields.requirements || [],
      benefits: item.fields.benefits || [],
      salary: item.fields.salary,
      createdAt: item.sys.createdAt
    }))

    return NextResponse.json({
      success: true,
      total: jobsResponse.total,
      jobs: jobs,
      message: `Successfully fetched ${jobs.length} jobs from Contentful`
    })

  } catch (error) {
    console.error('Error testing jobs fetch:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to fetch jobs from Contentful'
    }, { status: 500 })
  }
} 