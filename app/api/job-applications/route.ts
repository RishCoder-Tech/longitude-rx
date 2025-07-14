import { NextRequest, NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

export async function GET(request: NextRequest) {
  try {
    const res = await contentfulClient.getEntries({ 
      content_type: 'jobApplication',
      order: '-sys.createdAt'
    })
    
    // Transform the data to match our interface
    const applications = res.items.map(item => ({
      sys: {
        id: item.sys.id,
        createdAt: item.sys.createdAt
      },
      fields: {
        firstName: String(item.fields.firstName || ''),
        lastName: String(item.fields.lastName || ''),
        email: String(item.fields.email || ''),
        phone: String(item.fields.phone || ''),
        location: String(item.fields.location || ''),
        linkedinUrl: String(item.fields.linkedinUrl || ''),
        portfolioUrl: String(item.fields.portfolioUrl || ''),
        currentCompany: String(item.fields.currentCompany || ''),
        currentTitle: String(item.fields.currentTitle || ''),
        experience: String(item.fields.experience || ''),
        education: String(item.fields.education || ''),
        coverLetter: String(item.fields.coverLetter || ''),
        workAuthorization: Boolean(item.fields.workAuthorization),
        remoteWork: Boolean(item.fields.remoteWork),
        salaryExpectation: String(item.fields.salaryExpectation || ''),
        startDate: String(item.fields.startDate || ''),
        source: String(item.fields.source || ''),
        diversity: String(item.fields.diversity || ''),
        agreeToTerms: Boolean(item.fields.agreeToTerms),
        jobTitle: String(item.fields.jobTitle || ''),
        jobId: String(item.fields.jobId || ''),
        status: String(item.fields.status || 'New'),
        applicationDate: String(item.fields.applicationDate || item.sys.createdAt)
      }
    }))

    return NextResponse.json({ applications })
  } catch (error) {
    console.error('Error fetching job applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
} 