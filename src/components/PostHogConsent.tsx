'use client'

import {useEffect} from 'react'
import CookieConsent from 'react-cookie-consent'
import { initializePostHog, safePostHog } from '@/instrumentation-client'

export default function PostHogConsent() {
    useEffect(() => {
        // Check if user previously accepted cookies
        const hasConsent = document.cookie.includes('posthog_consent=true')
        if (hasConsent) {
            // User already consented, initialize PostHog
            initializePostHog()
        }
    }, [])

    // Don't render if not in browser
    if (typeof window === "undefined") {
        return null
    }

    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            cookieName="posthog_consent"
            style={{
                background: "var(--surface-elevated)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                padding: "12px 16px",
                margin: "16px",
                fontSize: "14px",
                lineHeight: "1.4",
                maxWidth: "800px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                textAlign: "center",
            }}
            buttonStyle={{
                background: "var(--gradient-primary)",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
            }}
            declineButtonStyle={{
                background: "transparent",
                color: "var(--muted)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
            }}
            buttonWrapperClasses="flex items-center gap-2"
            onAccept={() => {
                // LAZY INIT: Only initialize PostHog when user accepts
                initializePostHog()
            }}
            onDecline={() => {
                // User declined - PostHog should never be initialized
                // But if it somehow was, opt out
                safePostHog.opt_out_capturing()
            }}
        >
      <span className="text-sm">
        We use cookies only to improve your experience and analyze site traffic. By clicking &ldquo;Accept&rdquo;, you consent to our use of non-essential cookies for these purposes.
      </span>
        </CookieConsent>
    )
}