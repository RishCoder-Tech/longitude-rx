"use client"

import { useEffect, useState } from 'react'
import { usePostHog } from '@/hooks/use-posthog'

interface FeatureFlagProps {
  flagKey: string
  children: React.ReactNode
  fallback?: React.ReactNode
  defaultValue?: boolean
}

export function FeatureFlag({ 
  flagKey, 
  children, 
  fallback = null, 
  defaultValue = false 
}: FeatureFlagProps) {
  const { posthog } = usePostHog()
  const [isEnabled, setIsEnabled] = useState<boolean>(defaultValue)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (posthog && posthog.isFeatureEnabled) {
      try {
        const enabled = posthog.isFeatureEnabled(flagKey)
        setIsEnabled(enabled)
        
        // Track feature flag exposure
        posthog.capture('feature_flag_exposure', {
          flag_key: flagKey,
          flag_value: enabled,
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        console.error(`Error checking feature flag ${flagKey}:`, error)
        setIsEnabled(defaultValue)
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsEnabled(defaultValue)
      setIsLoading(false)
    }
  }, [flagKey, defaultValue, posthog])

  if (isLoading) {
    return fallback
  }

  return isEnabled ? <>{children}</> : <>{fallback}</>
}

// Hook version for conditional logic
export function useFeatureFlag(flagKey: string, defaultValue: boolean = false) {
  const { posthog } = usePostHog()
  const [isEnabled, setIsEnabled] = useState<boolean>(defaultValue)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (posthog && posthog.isFeatureEnabled) {
      try {
        const enabled = posthog.isFeatureEnabled(flagKey)
        setIsEnabled(enabled)
        
        // Track feature flag exposure
        posthog.capture('feature_flag_exposure', {
          flag_key: flagKey,
          flag_value: enabled,
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        console.error(`Error checking feature flag ${flagKey}:`, error)
        setIsEnabled(defaultValue)
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsEnabled(defaultValue)
      setIsLoading(false)
    }
  }, [flagKey, defaultValue, posthog])

  return { isEnabled, isLoading }
}
