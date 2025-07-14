import { NextRequest, NextResponse } from 'next/server'
import { contentfulClient } from '@/lib/contentful'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json()
    const { id } = params

    // Get the existing entry
    const entry = await contentfulClient.getEntry(id)
    
    // Update the status field
    entry.fields.status = {
      'en-US': status
    }

    // Update the entry
    const updatedEntry = await entry.update()
    await updatedEntry.publish()

    return NextResponse.json({ 
      success: true, 
      message: 'Application status updated successfully' 
    })
  } catch (error) {
    console.error('Error updating application status:', error)
    return NextResponse.json(
      { error: 'Failed to update application status' },
      { status: 500 }
    )
  }
} 