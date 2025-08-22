"use client"

import { useEffect, useRef } from 'react'
import { usePostHog } from '@/hooks/use-posthog'

interface ScrollTrackingProps {
  pageName: string
  scrollThresholds?: number[]
}

export function ScrollTracking({ 
  pageName, 
  scrollThresholds = [25, 50, 75, 90, 100] 
}: ScrollTrackingProps) {
  const { trackScrollDepth, trackTimeOnPage } = usePostHog()
  const startTime = useRef<number>(Date.now())
  const trackedScrollDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      // Track scroll depth at specified thresholds
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedScrollDepths.current.has(threshold)) {
          trackedScrollDepths.current.add(threshold)
          trackScrollDepth(threshold, pageName)
        }
      })
    }

    const handlePageLeave = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
      trackTimeOnPage(timeSpent, pageName)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, track time spent
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
        trackTimeOnPage(timeSpent, pageName)
      } else {
        // Page is visible again, reset start time
        startTime.current = Date.now()
      }
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('beforeunload', handlePageLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Track initial page view
    trackScrollDepth(0, pageName)

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handlePageLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      
      // Track final time on page
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
      trackTimeOnPage(timeSpent, pageName)
    }
  }, [pageName, scrollThresholds, trackScrollDepth, trackTimeOnPage])

  // This component doesn't render anything visible
  return null
}
