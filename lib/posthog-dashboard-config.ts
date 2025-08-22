// PostHog Dashboard Configuration
// This file contains predefined dashboard configurations and insights for Longitude Rx

export const POSTHOG_DASHBOARD_CONFIG = {
  // User Engagement Dashboard
  userEngagement: {
    name: "User Engagement Overview",
    description: "Track user behavior, page views, and engagement metrics",
    insights: [
      {
        name: "Page Views by Page Type",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.$page_type as page_type,
                count() as page_views,
                count(distinct person_id) as unique_visitors
              FROM events 
              WHERE event = 'page_view' 
                AND timestamp >= now() - INTERVAL 30 DAY
              GROUP BY page_type 
              ORDER BY page_views DESC
            `,
            explain: false
          }
        }
      },
      {
        name: "Form Completion Rates",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.form_name as form_name,
                properties.action as action,
                count() as count
              FROM events 
              WHERE event = 'form_interaction' 
                AND timestamp >= now() - INTERVAL 30 DAY
              GROUP BY form_name, action
              ORDER BY form_name, action
            `,
            explain: false
          }
        }
      },
      {
        name: "User Journey Flow",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.from_page as from_page,
                properties.to_page as to_page,
                count() as navigation_count
              FROM events 
              WHERE event = 'navigation' 
                AND timestamp >= now() - INTERVAL 30 DAY
              GROUP BY from_page, to_page
              ORDER BY navigation_count DESC
              LIMIT 20
            `,
            explain: false
          }
        }
      }
    ]
  },

  // Performance Dashboard
  performance: {
    name: "Performance Metrics",
    description: "Monitor Core Web Vitals and performance indicators",
    insights: [
      {
        name: "Core Web Vitals Overview",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.metric_name as metric_name,
                avg(properties.metric_value) as avg_value,
                min(properties.metric_value) as min_value,
                max(properties.metric_value) as max_value,
                count() as sample_count
              FROM events 
              WHERE event = 'performance_metric' 
                AND properties.metric_name IN ('lcp', 'fid', 'cls', 'fcp')
                AND timestamp >= now() - INTERVAL 7 DAY
              GROUP BY metric_name
              ORDER BY metric_name
            `,
            explain: false
          }
        }
      },
      {
        name: "Page Load Performance",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.page as page,
                avg(properties.metric_value) as avg_load_time,
                count() as page_views
              FROM events 
              WHERE event = 'performance_metric' 
                AND properties.metric_name = 'load_complete'
                AND timestamp >= now() - INTERVAL 7 DAY
              GROUP BY page
              ORDER BY avg_load_time DESC
            `,
            explain: false
          }
        }
      }
    ]
  },

  // Conversion Dashboard
  conversion: {
    name: "Conversion Tracking",
    description: "Track lead generation and conversion metrics",
    insights: [
      {
        name: "Contact Form Conversions",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.form_name as form_name,
                properties.action as action,
                count() as count,
                count(distinct person_id) as unique_users
              FROM events 
              WHERE event = 'form_interaction' 
                AND properties.form_name = 'contact_form'
                AND timestamp >= now() - INTERVAL 30 DAY
              GROUP BY form_name, action
              ORDER BY action
            `,
            explain: false
          }
        }
      },
      {
        name: "Button Click Analysis",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.button_name as button_name,
                properties.button_location as location,
                count() as clicks,
                count(distinct person_id) as unique_users
              FROM events 
              WHERE event = 'button_click' 
                AND timestamp >= now() - INTERVAL 30 DAY
              GROUP BY button_name, location
              ORDER BY clicks DESC
            `,
            explain: false
          }
        }
      }
    ]
  },

  // Error Tracking Dashboard
  errorTracking: {
    name: "Error Monitoring",
    description: "Track and analyze errors and issues",
    insights: [
      {
        name: "Error Frequency by Type",
        query: {
          kind: "DataVisualizationNode",
          source: {
            kind: "HogQLQuery",
            query: `
              SELECT 
                properties.error_message as error_message,
                properties.error_type as error_type,
                count() as error_count,
                count(distinct person_id) as affected_users
              FROM events 
              WHERE event = 'error_occurred' 
                AND timestamp >= now() - INTERVAL 7 DAY
              GROUP BY error_message, error_type
              ORDER BY error_count DESC
              LIMIT 20
            `,
            explain: false
          }
        }
      }
    ]
  }
}

// Feature Flag Configuration
export const FEATURE_FLAGS = {
  // User Experience Features
  ENABLE_ADVANCED_ANALYTICS: 'enable-advanced-analytics',
  SESSION_RECORDING_QUALITY: 'session-recording-quality',
  ENABLE_PERFORMANCE_MONITORING: 'enable-performance-monitoring',
  ENABLE_SCROLL_TRACKING: 'enable-scroll-tracking',
  
  // A/B Testing Features
  NEW_CONTACT_FORM_DESIGN: 'new-contact-form-design',
  ENHANCED_NAVIGATION: 'enhanced-navigation',
  IMPROVED_CTA_BUTTONS: 'improved-cta-buttons',
  
  // Performance Features
  LAZY_LOADING_IMAGES: 'lazy-loading-images',
  ADVANCED_CACHING: 'advanced-caching',
  COMPRESSION_OPTIMIZATION: 'compression-optimization'
}

// Event Properties Configuration
export const EVENT_PROPERTIES = {
  // User Properties
  USER_PROPERTIES: [
    'environment',
    'app_version',
    'platform',
    'user_type',
    'organization',
    'role'
  ],
  
  // Page Properties
  PAGE_PROPERTIES: [
    'page_name',
    'page_url',
    'page_title',
    'page_type',
    'is_landing'
  ],
  
  // Form Properties
  FORM_PROPERTIES: [
    'form_name',
    'action',
    'form_fields',
    'success',
    'error_message',
    'response_time'
  ],
  
  // Performance Properties
  PERFORMANCE_PROPERTIES: [
    'metric_name',
    'metric_value',
    'page',
    'resource_type',
    'resource_name',
    'resource_size'
  ]
}
