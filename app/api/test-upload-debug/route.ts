import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('=== Test Upload Debug API Started ===')
    
    // Log user agent for mobile debugging
    const userAgent = request.headers.get('user-agent') || 'unknown'
    const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent)
    console.log('User Agent:', userAgent)
    console.log('Is Mobile:', isMobile)
    
    const formData = await request.formData()
    console.log('Form data keys:', Array.from(formData.keys()))
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const file = formData.get('file')
    
    console.log('Form data:', { name, email, hasFile: !!file })
    
    if (file && typeof file === 'object' && 'name' in file) {
      console.log('File info:', {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified
      })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Test upload successful',
      data: {
        name,
        email,
        hasFile: !!file,
        isMobile,
        userAgent
      }
    })
    
  } catch (error) {
    console.error('Test upload error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 