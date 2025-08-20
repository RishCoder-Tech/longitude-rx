import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    const status = {
      configured: !!(supabaseUrl && supabaseAnonKey),
      supabaseUrl: supabaseUrl ? 'Set' : 'Not set',
      supabaseAnonKey: supabaseAnonKey ? 'Set' : 'Not set',
      client: supabase ? 'Available' : 'Not available'
    }
    
    return NextResponse.json({
      success: true,
      status,
      message: status.configured 
        ? 'Supabase is configured and ready to use' 
        : 'Supabase is not configured. Please set environment variables.'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 