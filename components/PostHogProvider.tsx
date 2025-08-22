"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize PostHog with enhanced configuration
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      defaults: "2025-05-24",
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
      
      // Enable session recordings
      session_recording: {
        enabled: true,
        recordCanvas: true,
        recordCrossOriginIframes: false,
        recordNetworkRequests: false,
        maskAllInputs: true,
        maskInputOptions: {
          password: true,
          email: true,
          phone: true,
          number: true,
          text: true,
        },
      },
      
      // Enhanced autocapture settings
      autocapture: true,
      capture_pageview: true,
      capture_pageleave: true,
      capture_click: true,
      capture_input: true,
      capture_scroll: true,
      
      // Performance monitoring
      performance_tracking: true,
      
      // Feature flags
      feature_flags: {
        "enable-advanced-analytics": true,
        "session-recording-quality": "high",
      },
      
      // Privacy and compliance
      respect_dnt: true,
      mask_all_text: false,
      mask_all_element_attributes: false,
      
      // Advanced settings
      persistence: 'localStorage',
      disable_session_recording: false,
      disable_persistence: false,
      
      // Custom properties for all events
      loaded: (posthog) => {
        // Set user properties based on environment
        posthog.people.set({
          environment: process.env.NODE_ENV,
          app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
          platform: 'web',
        })
        
        // Start session recording for all sessions
        posthog.startSessionRecording()
        
        console.log('PostHog initialized with session recordings enabled')
      }
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}