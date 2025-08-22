import { PostHog } from "posthog-node"

// Server-side PostHog client for Longitude Rx
export default function PostHogClient() {
  const posthogClient = new PostHog('phc_CPWCoYSQujWKeF6qNbo4lqksCbuZUj8zIgvA36dJcOm', {
    host: 'https://app.posthog.com',
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}