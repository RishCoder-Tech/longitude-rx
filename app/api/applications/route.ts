import { NextRequest, NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

// (Optional) Add Zoho Recruit logic here if needed

// Fetch applications from Contentful
async function getContentfulApplications(email?: string) {
  try {
    let query: any = {
      content_type: 'jobApplication',
      limit: 50
    }
    if (email) {
      query['fields.email'] = email
    }
    const response = await contentfulClient.getEntries(query)
    return response.items || []
  } catch (error) {
    console.error('Error fetching from Contentful:', error)
    return []
  }
}

function transformContentfulApplication(entry: any) {
  const fields = entry.fields
  return {
    id: entry.sys.id,
    jobTitle: fields.jobTitle || 'Unknown Position',
    jobId: fields.jobId || '',
    company: 'Longitude Rx',
    location: fields.location || 'Remote',
    appliedDate: fields.applicationDate || entry.sys.createdAt,
    status: fields.status || 'New',
    lastUpdated: entry.sys.updatedAt,
    department: 'General',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: [],
    benefits: [],
    nextStep: '',
    estimatedTimeline: '',
    source: 'Contentful',
    candidateData: {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      phone: fields.phone,
      currentCompany: fields.currentCompany,
      currentTitle: fields.currentTitle,
      experience: fields.experience,
      education: fields.education,
      coverLetter: fields.coverLetter,
      linkedinUrl: fields.linkedinUrl,
      portfolioUrl: fields.portfolioUrl,
      workAuthorization: fields.workAuthorization,
      remoteWork: fields.remoteWork,
      salaryExpectation: fields.salaryExpectation,
      startDate: fields.startDate,
      diversity: fields.diversity
    }
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')
    // Only fetch from Contentful for now
    const contentfulApplications = await getContentfulApplications(email || undefined)
    const contentfulApps = contentfulApplications.map(transformContentfulApplication)
    return NextResponse.json({
      success: true,
      applications: contentfulApps,
      stats: {
        total: contentfulApps.length,
        byStatus: contentfulApps.reduce((acc, app) => {
          acc[app.status] = (acc[app.status] || 0) + 1
          return acc
        }, {} as Record<string, number>),
        bySource: { Contentful: contentfulApps.length }
      }
    })
  } catch (error) {
    console.error('Error fetching applications:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  // You can implement Contentful update logic here if needed
  return NextResponse.json({ success: false, error: 'Not implemented' }, { status: 501 })
} 