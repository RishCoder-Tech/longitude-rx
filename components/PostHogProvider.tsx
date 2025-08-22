"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider } from "posthog-js/react"
import { useEffect } from "react"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize PostHog with the new API key
    posthog.init('phc_CPWCoYSQujWKeF6qNbo4lqksCbuZUj8zIgvA36dJcOm', {
      api_host: 'https://app.posthog.com',
      ui_host: 'https://app.posthog.com',
      
      // Session recordings
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
      
      // Enhanced autocapture
      autocapture: true,
      capture_pageview: true,
      capture_pageleave: true,
      capture_click: true,
      capture_input: true,
      capture_scroll: true,
      
      // Performance monitoring
      performance_tracking: true,
      
      // Privacy and compliance
      respect_dnt: true,
      mask_all_text: false,
      mask_all_element_attributes: false,
      
      // Advanced settings
      persistence: 'localStorage',
      disable_session_recording: false,
      disable_persistence: false,
      
      // Debug mode in development
      debug: process.env.NODE_ENV === 'development',
      
      // Custom properties for all events
      loaded: (posthog) => {
        // Set user properties
        posthog.people.set({
          environment: process.env.NODE_ENV,
          platform: 'web',
          app_name: 'Longitude Rx',
        })
        
        // Start session recording
        posthog.startSessionRecording()
        
        console.log('PostHog initialized successfully with session recordings')
      }
    })
  }, [])

  return <PHProvider client={posthog}>{children}</PHProvider>
}