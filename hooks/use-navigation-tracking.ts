import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { usePostHog } from './use-posthog'

export const useNavigationTracking = () => {
  const pathname = usePathname()
  const previousPath = useRef<string>('')
  const { trackNavigation, trackPageView } = usePostHog()

  useEffect(() => {
    if (previousPath.current && previousPath.current !== pathname) {
      // Track navigation between pages
      trackNavigation(previousPath.current, pathname, {
        navigation_method: 'client_side',
        timestamp: new Date().toISOString(),
      })
    }

    // Track page view
    trackPageView(pathname, {
      page_type: getPageType(pathname),
      is_landing: pathname === '/',
      timestamp: new Date().toISOString(),
    })

    // Update previous path
    previousPath.current = pathname
  }, [pathname, trackNavigation, trackPageView])

  // Helper function to determine page type
  const getPageType = (path: string): string => {
    if (path === '/') return 'home'
    if (path.startsWith('/services')) return 'services'
    if (path.startsWith('/case-studies')) return 'case_studies'
    if (path.startsWith('/careers')) return 'careers'
    if (path.startsWith('/contact')) return 'contact'
    if (path.startsWith('/about')) return 'about'
    if (path.startsWith('/technologies')) return 'technologies'
    if (path.startsWith('/newsletter')) return 'newsletter'
    if (path.startsWith('/blog')) return 'blog'
    return 'other'
  }

  return {
    currentPath: pathname,
    previousPath: previousPath.current,
    pageType: getPageType(pathname),
  }
}
