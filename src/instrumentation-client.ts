import posthog from 'posthog-js'

let isInitialized = false

export function initializePostHog() {
  // Only initialize PostHog AFTER user consent
  if (isInitialized || typeof window === 'undefined') return
  isInitialized = true

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_BEeilpWmmCJhTnyhwFsI5ZhR2eElki2Gk0ev3WczZPB", {
    api_host: '/ingest',
    ui_host: 'https://eu.posthog.com',

    // Start with tracking ENABLED since user has already consented
    autocapture: true,
    disable_session_recording: false,
    capture_exceptions: true,
    disable_persistence: false,

    // Modern cookie settings for production
    persistence: 'localStorage+cookie',
    cross_subdomain_cookie: false,

    //debug: process.env.NODE_ENV === 'development',
  })

  // Start session recording immediately since user has consented
  posthog.startSessionRecording?.()
}

// Create a safe wrapper that only works if PostHog is initialized
export const safePostHog = {
  opt_in_capturing: () => isInitialized && posthog.opt_in_capturing(),
  opt_out_capturing: () => isInitialized && posthog.opt_out_capturing(),
  has_opted_out_capturing: () => isInitialized ? posthog.has_opted_out_capturing() : true,
  set_config: (config: Record<string, unknown>) => isInitialized && posthog.set_config(config),
  startSessionRecording: () => isInitialized && posthog.startSessionRecording?.(),
}

export default posthog