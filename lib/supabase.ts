import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create Supabase client only if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// File upload utility functions
export const uploadFile = async (file: File, bucket: string = 'resumes') => {
  try {
    if (!supabase) {
      return {
        success: false,
        error: 'Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
      }
    }

    // Check file size (Supabase has limits)
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      return {
        success: false,
        error: `File too large: ${(file.size / (1024 * 1024)).toFixed(2)}MB (max: 50MB)`
      }
    }

    // Check for problematic file types or names
    const problematicExtensions = ['.exe', '.bat', '.cmd', '.com', '.pif', '.scr', '.vbs', '.js']
    const fileExt = file.name.split('.').pop()?.toLowerCase()
    if (fileExt && problematicExtensions.includes(`.${fileExt}`)) {
      return {
        success: false,
        error: `File type not allowed: .${fileExt}`
      }
    }

    // Check for special characters in filename
    if (/[<>:"/\\|?*]/.test(file.name)) {
      return {
        success: false,
        error: 'Filename contains invalid characters'
      }
    }

    console.log(`Uploading file to Supabase: ${file.name} (${(file.size / 1024).toFixed(2)}KB)`)
    
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    
    // Add timeout to prevent hanging uploads
    const uploadPromise = supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Upload timeout after 30 seconds')), 30000)
    })

    const { data, error } = await Promise.race([uploadPromise, timeoutPromise]) as any

    if (error) {
      console.error('Supabase storage error:', error)
      throw error
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName)

    console.log(`✅ File uploaded successfully: ${fileName}`)
    return {
      success: true,
      fileName,
      url: urlData.publicUrl,
      path: data.path
    }
  } catch (error) {
    console.error('Supabase upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed'
    }
  }
}

export const deleteFile = async (fileName: string, bucket: string = 'resumes') => {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([fileName])

    if (error) {
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error('Supabase delete error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Delete failed'
    }
  }
} 