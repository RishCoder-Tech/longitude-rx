import { useCallback } from 'react'
import posthog from 'posthog-js'

// Custom hook for PostHog analytics
export const usePostHog = () => {
  
  // Track page views with custom properties
  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    posthog.capture('page_view', {
      page_name: pageName,
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer,
      ...properties,
    })
  }, [])

  // Track user interactions
  const trackInteraction = useCallback((eventName: string, properties?: Record<string, any>) => {
    posthog.capture(eventName, {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      ...properties,
    })
  }, [])

  // Track form interactions
  const trackFormInteraction = useCallback((formName: string, action: 'start' | 'complete' | 'error', properties?: Record<string, any>) => {
    posthog.capture('form_interaction', {
      form_name: formName,
      action,
      timestamp: new Date().toISOString(),
      ...properties,
    })
  }, [])

  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string, properties?: Record<string, any>) => {
    posthog.capture('button_click', {
      button_name: buttonName,
      button_location: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...properties,
    })
  }, [])

  // Track navigation
  const trackNavigation = useCallback((from: string, to: string, properties?: Record<string, any>) => {
    posthog.capture('navigation', {
      from_page: from,
      to_page: to,
      navigation_type: 'internal',
      timestamp: new Date().toISOString(),
      ...properties,
    })
  }, [])

  // Track scroll depth
  const trackScrollDepth = useCallback((depth: number, page: string) => {
    posthog.capture('scroll_depth', {
      scroll_depth: depth,
      page,
      timestamp: new Date().toISOString(),
    })
  }, [])

  // Track time on page
  const trackTimeOnPage = useCallback((timeSpent: number, page: string) => {
    posthog.capture('time_on_page', {
      time_spent_seconds: timeSpent,
      page,
      timestamp: new Date().toISOString(),
    })
  }, [])

  // Track user engagement
  const trackEngagement = useCallback((engagementType: string, properties?: Record<string, any>) => {
    posthog.capture('user_engagement', {
      engagement_type: engagementType,
      timestamp: new Date().toISOString(),
      session_id: posthog.get_session_id(),
      ...properties,
    })
  }, [])

  // Track feature usage
  const trackFeatureUsage = useCallback((featureName: string, properties?: Record<string, any>) => {
    posthog.capture('feature_used', {
      feature_name: featureName,
      timestamp: new Date().toISOString(),
      ...properties,
    })
  }, [])

  // Track errors
  const trackError = useCallback((errorMessage: string, errorStack?: string, properties?: Record<string, any>) => {
    posthog.capture('error_occurred', {
      error_message: errorMessage,
      error_stack: errorStack,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...properties,
    })
  }, [])

  // Track performance metrics
  const trackPerformance = useCallback((metricName: string, value: number, properties?: Record<string, any>) => {
    posthog.capture('performance_metric', {
      metric_name: metricName,
      metric_value: value,
      timestamp: new Date().toISOString(),
      ...properties,
    })
  }, [])

  // Set user properties
  const setUserProperties = useCallback((properties: Record<string, any>) => {
    posthog.people.set(properties)
  }, [])

  // Identify user
  const identify = useCallback((userId: string, properties?: Record<string, any>) => {
    posthog.identify(userId, properties)
  }, [])

  // Reset user
  const reset = useCallback(() => {
    posthog.reset()
  }, [])

  // Check if PostHog is loaded
  const isLoaded = useCallback(() => {
    return posthog.isFeatureEnabled('enable-advanced-analytics')
  }, [])

  return {
    trackPageView,
    trackInteraction,
    trackFormInteraction,
    trackButtonClick,
    trackNavigation,
    trackScrollDepth,
    trackTimeOnPage,
    trackEngagement,
    trackFeatureUsage,
    trackError,
    trackPerformance,
    setUserProperties,
    identify,
    reset,
    isLoaded,
    // Expose posthog instance for advanced usage
    posthog,
  }
}
