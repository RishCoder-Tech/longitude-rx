import { NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

// Helper function to extract plain text from Rich Text
function extractTextFromRichText(richText: any): string {
  if (!richText || !richText.content) return ''
  
  return richText.content
    .map((node: any) => 
      node.content
        ?.map((contentNode: any) => contentNode.value || '')
        .join('') || ''
    )
    .join(' ')
}

// Helper function to safely get string value from Contentful field
function getStringValue(field: any): string {
  if (typeof field === 'string') return field
  if (typeof field === 'object' && field !== null) {
    const extracted = extractTextFromRichText(field)
    if (extracted) return extracted
    // If it's an object but not rich text, try to stringify it safely
    try {
      return JSON.stringify(field)
    } catch {
      return ''
    }
  }
  return ''
}

// Helper function to safely get array of strings from Contentful field
function getStringArray(field: any): string[] {
  if (!Array.isArray(field)) return []
  return field.map(item => getStringValue(item)).filter(item => item !== '')
}

export async function GET() {
  try {
    // Fetch jobs from Contentful
    const jobsResponse = await contentfulClient.getEntries({
      content_type: 'jobListing',
      limit: 50,
      order: ['sys.createdAt']
    })

    const jobs = jobsResponse.items.map(item => {
      return {
      sys: {
        id: item.sys.id
      },
      fields: {
        title: getStringValue(item.fields.title) || 'Untitled Position',
        department: getStringValue(item.fields.department) || 'General',
        location: getStringValue(item.fields.location) || 'Remote',
        type: getStringValue(item.fields.type) || 'Full-time',
          description: getStringValue(item.fields.description) || 'No description available',
        requirements: getStringArray(item.fields.requirements),
        benefits: getStringArray(item.fields.benefits),
        salary: getStringValue(item.fields.salary)
      }
      }
    })

    console.log(`API: Fetched ${jobs.length} jobs from Contentful`)
    
    // Set cache headers to allow fresh data
    return NextResponse.json(jobs, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('API: Error fetching jobs from Contentful:', error)
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
} 