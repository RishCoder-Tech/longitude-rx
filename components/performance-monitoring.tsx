"use client"

import { useEffect } from 'react'
import { usePostHog } from '@/hooks/use-posthog'

interface PerformanceMonitoringProps {
  pageName: string
}

export function PerformanceMonitoring({ pageName }: PerformanceMonitoringProps) {
  const { trackPerformance, trackError } = usePostHog()

  useEffect(() => {
    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      // Track Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1] as PerformanceEntry
            if (lastEntry) {
              trackPerformance('lcp', lastEntry.startTime, { page: pageName })
            }
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (error) {
          trackError('LCP tracking failed', error instanceof Error ? error.message : 'Unknown error')
        }

        // Track First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            entries.forEach((entry) => {
              trackPerformance('fid', entry.processingStart - entry.startTime, { page: pageName })
            })
          })
          fidObserver.observe({ entryTypes: ['first-input'] })
        } catch (error) {
          trackError('FID tracking failed', error instanceof Error ? error.message : 'Unknown error')
        }

        // Track Cumulative Layout Shift (CLS)
        try {
          let clsValue = 0
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += (entry as any).value
              }
            }
            trackPerformance('cls', clsValue, { page: pageName })
          })
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        } catch (error) {
          trackError('CLS tracking failed', error instanceof Error ? error.message : 'Unknown error')
        }

        // Track First Contentful Paint (FCP)
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const firstEntry = entries[0] as PerformanceEntry
            if (firstEntry) {
              trackPerformance('fcp', firstEntry.startTime, { page: pageName })
            }
          })
          fcpObserver.observe({ entryTypes: ['first-contentful-paint'] })
        } catch (error) {
          trackError('FCP tracking failed', error instanceof Error ? error.message : 'Unknown error')
        }
      }
    }

    // Track page load performance
    const trackPageLoadPerformance = () => {
      if (document.readyState === 'complete') {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          // Track various performance metrics
          trackPerformance('dom_content_loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart, { page: pageName })
          trackPerformance('dom_interactive', navigation.domInteractive - navigation.fetchStart, { page: pageName })
          trackPerformance('load_complete', navigation.loadEventEnd - navigation.fetchStart, { page: pageName })
          trackPerformance('first_byte', navigation.responseStart - navigation.fetchStart, { page: pageName })
          trackPerformance('dns_lookup', navigation.domainLookupEnd - navigation.domainLookupStart, { page: pageName })
          trackPerformance('tcp_connection', navigation.connectEnd - navigation.connectStart, { page: pageName })
        }
      }
    }

    // Track resource loading performance
    const trackResourcePerformance = () => {
      if ('PerformanceObserver' in window) {
        try {
          const resourceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const resourceEntry = entry as PerformanceResourceTiming
              if (resourceEntry.initiatorType === 'img' || resourceEntry.initiatorType === 'script' || resourceEntry.initiatorType === 'css') {
                trackPerformance('resource_load', resourceEntry.duration, {
                  page: pageName,
                  resource_type: resourceEntry.initiatorType,
                  resource_name: resourceEntry.name,
                  resource_size: resourceEntry.transferSize || 0,
                })
              }
            })
          })
          resourceObserver.observe({ entryTypes: ['resource'] })
        } catch (error) {
          trackError('Resource performance tracking failed', error instanceof Error ? error.message : 'Unknown error')
        }
      }
    }

    // Track long tasks
    const trackLongTasks = () => {
      if ('PerformanceObserver' in window) {
        try {
          const longTaskObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const longTaskEntry = entry as PerformanceEntry
              if (longTaskEntry.duration > 50) { // Tasks longer than 50ms
                trackPerformance('long_task', longTaskEntry.duration, {
                  page: pageName,
                  task_start: longTaskEntry.startTime,
                })
              }
            })
          })
          longTaskObserver.observe({ entryTypes: ['longtask'] })
        } catch (error) {
          trackError('Long task tracking failed', error instanceof Error ? error.message : 'Unknown error')
        }
      }
    }

    // Initialize performance tracking
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        trackPageLoadPerformance()
        trackCoreWebVitals()
        trackResourcePerformance()
        trackLongTasks()
      })
    } else {
      trackPageLoadPerformance()
      trackCoreWebVitals()
      trackResourcePerformance()
      trackLongTasks()
    }

    // Track performance on page unload
    const handleBeforeUnload = () => {
      const timeSpent = performance.now()
      trackPerformance('total_time_on_page', timeSpent, { page: pageName })
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [pageName, trackPerformance, trackError])

  // This component doesn't render anything visible
  return null
}
