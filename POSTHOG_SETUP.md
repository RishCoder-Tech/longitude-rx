# PostHog Setup Guide for Longitude Rx

This guide covers the comprehensive PostHog setup including events, session recordings, and advanced analytics features.

## 🚀 Quick Start

### 1. Configuration Details

**API Key**: `phc_CPWCoYSQujWKeF6qNbo4lqksCbuZUj8zIgvA36dJcOm`  
**Host**: `https://app.posthog.com`  
**Project**: Longitude Rx

### 2. PostHog Project Setup

1. Go to [PostHog Cloud](https://app.posthog.com)
2. Your project is already configured with the API key above
3. Session recordings are automatically enabled
4. All tracking is active and ready to use

## 📊 Features Implemented

### Session Recordings
- **Automatic Recording**: All user sessions are recorded by default
- **Privacy Controls**: Sensitive input fields are masked
- **Quality Settings**: High-quality recording with canvas support
- **Cross-Origin Safety**: Disabled for security

### Event Tracking
- **Page Views**: Automatic tracking with custom properties
- **User Interactions**: Button clicks, form interactions, navigation
- **Form Analytics**: Start, complete, and error tracking
- **Performance Metrics**: Core Web Vitals and resource loading
- **Error Tracking**: Comprehensive error monitoring

### Performance Monitoring
- **Core Web Vitals**: LCP, FID, CLS, FCP tracking
- **Resource Loading**: Image, script, and CSS performance
- **Long Tasks**: Detection of performance bottlenecks
- **Page Load Times**: Comprehensive loading metrics

### User Engagement
- **Scroll Depth**: Track how far users scroll on pages
- **Time on Page**: Monitor user engagement duration
- **Navigation Patterns**: User journey analysis
- **Feature Usage**: Track feature adoption

## 🛠️ Components

### Core Components
- `PostHogProvider`: Main provider with enhanced configuration
- `ScrollTracking`: Tracks scroll depth and time on page
- `PerformanceMonitoring`: Monitors performance metrics
- `ErrorBoundary`: Catches and tracks errors
- `FeatureFlag`: A/B testing and feature rollouts

### Hooks
- `usePostHog`: Main analytics hook with all tracking functions
- `useNavigationTracking`: Automatic page navigation tracking
- `useFeatureFlag`: Feature flag management

## 📈 Dashboard Configuration

### Pre-configured Insights

#### User Engagement Dashboard
- Page views by page type
- Form completion rates
- User journey flow analysis

#### Performance Dashboard
- Core Web Vitals overview
- Page load performance metrics
- Resource loading analysis

#### Conversion Dashboard
- Contact form conversions
- Button click analysis
- Lead generation tracking

#### Error Tracking Dashboard
- Error frequency by type
- Affected user analysis
- Error resolution tracking

## 🔧 Usage Examples

### Basic Event Tracking

```tsx
import { usePostHog } from '@/hooks/use-posthog'

function MyComponent() {
  const { trackButtonClick, trackInteraction } = usePostHog()
  
  const handleClick = () => {
    trackButtonClick('cta_button', {
      button_location: 'hero_section',
      button_text: 'Get Started'
    })
  }
  
  return <button onClick={handleClick}>Get Started</button>
}
```

### Form Tracking

```tsx
import { usePostHog } from '@/hooks/use-posthog'

function ContactForm() {
  const { trackFormInteraction } = usePostHog()
  
  const handleSubmit = async (formData) => {
    // Track form start
    trackFormInteraction('contact_form', 'start', {
      form_fields: ['name', 'email', 'message']
    })
    
    try {
      // Submit form
      const result = await submitForm(formData)
      
      // Track success
      trackFormInteraction('contact_form', 'complete', {
        success: true,
        response_time: Date.now() - startTime
      })
    } catch (error) {
      // Track error
      trackFormInteraction('contact_form', 'error', {
        error_message: error.message
      })
    }
  }
}
```

### Feature Flags

```tsx
import { FeatureFlag } from '@/components/feature-flag'

function App() {
  return (
    <FeatureFlag flagKey="new-design" fallback={<OldDesign />}>
      <NewDesign />
    </FeatureFlag>
  )
}
```

### Performance Tracking

```tsx
import { PerformanceMonitoring } from '@/components/performance-monitoring'

function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <PerformanceMonitoring pageName="my-page" />
    </div>
  )
}
```

## 🎯 Best Practices

### Event Naming
- Use snake_case for event names
- Be descriptive and specific
- Include action and object (e.g., `button_click`, `form_submit`)

### Properties
- Include relevant context
- Use consistent property names
- Avoid PII (Personally Identifiable Information)

### Performance
- Use passive event listeners
- Debounce frequent events
- Avoid tracking in render functions

### Privacy
- Mask sensitive input fields
- Respect user privacy preferences
- Comply with GDPR/CCPA requirements

## 🔍 Debugging

### Development Mode
- PostHog debug mode is enabled in development
- Check browser console for tracking logs
- Use PostHog debugger extension

### Common Issues
- **Events not appearing**: Check browser console for errors
- **Session recordings not working**: Verify session recording is enabled
- **Performance impact**: Check for excessive event tracking

## 📱 Mobile Considerations

- Touch events are automatically tracked
- Mobile performance metrics are included
- Responsive design interactions are captured

## 🚀 Advanced Features

### Custom Properties
- Set user properties on initialization
- Track custom business metrics
- Include user context and preferences

### A/B Testing
- Use feature flags for experiments
- Track variant performance
- Measure conversion impact

### Cohort Analysis
- Create user segments
- Track behavior patterns
- Analyze user lifecycle

## 🔐 Security & Privacy

### Data Protection
- Input masking for sensitive fields
- No PII in event properties
- Secure API communication

### Compliance
- GDPR-ready configuration
- CCPA compliance support
- Cookie consent integration

### Access Control
- Role-based permissions
- Audit logging
- Data retention policies

## 📞 Support

For PostHog-specific issues:
- [PostHog Documentation](https://posthog.com/docs)
- [Community Forum](https://posthog.com/questions)
- [GitHub Issues](https://github.com/PostHog/posthog)

For Longitude Rx implementation:
- Check component documentation
- Review hook usage examples
- Verify configuration is working

## 🎉 Current Status

✅ **PostHog Integration**: Complete and active  
✅ **API Key**: Configured (`phc_CPWCoYSQujWKeF6qNbo4lqksCbuZUj8zIgvA36dJcOm`)  
✅ **Session Recordings**: Enabled  
✅ **Event Tracking**: Active  
✅ **Performance Monitoring**: Configured  
✅ **Error Tracking**: Active  
✅ **Components**: All implemented and working  

Your PostHog integration is now fully operational! 🚀
