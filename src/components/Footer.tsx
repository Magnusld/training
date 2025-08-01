'use client'

import { useState } from 'react'

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const handleManageCookies = () => {
    // Clear the cookie consent to make the banner reappear
    document.cookie = 'posthog_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    // Reload the page to show the cookie banner again
    window.location.reload()
  }

  return (
    <>
      <footer className="mt-16 border-t border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto p-4 max-w-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <div className="text-sm text-muted">
              2025 Marathon Training Plan
            </div>

            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-muted hover:text-foreground transition-colors underline"
              >
                Privacy Policy
              </button>

              <button
                onClick={handleManageCookies}
                className="text-muted hover:text-foreground transition-colors underline"
              >
                Manage Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface-elevated border border-border rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Privacy Policy</h2>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-sm text-foreground space-y-4">
                <h3 className="font-semibold text-foreground">Data Collection</h3>
                <p className="text-muted leading-relaxed">
                  This Marathon Training Plan application collects minimal data to improve your experience:
                </p>

                <ul className="list-disc pl-6 text-muted space-y-1">
                  <li>Session replay data (with your consent) to understand how you use the app</li>
                  <li>Anonymous usage analytics to improve app performance</li>
                  <li>Heatmap data to optimize the user interface</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6">Cookie Usage</h3>
                <p className="text-muted leading-relaxed">
                  We use cookies to:
                </p>

                <ul className="list-disc pl-6 text-muted space-y-1">
                  <li>Remember your cookie preferences</li>
                  <li>Enable session replay and heatmap functionality (optional)</li>
                  <li>Analyze site traffic and usage patterns</li>
                </ul>

                <h3 className="font-semibold text-foreground mt-6">Data Storage</h3>
                <p className="text-muted leading-relaxed">
                  All analytics data is processed by PostHog and stored securely. No personal information
                  is collected or stored. You can opt out of data collection at any time using the
                  &ldquo;Manage Cookies&rdquo; option.
                </p>

                <h3 className="font-semibold text-foreground mt-6">Your Rights</h3>
                <p className="text-muted leading-relaxed">
                  You have the right to:
                </p>

                <ul className="list-disc pl-6 text-muted space-y-1">
                  <li>Decline or withdraw consent for data collection</li>
                  <li>Request information about data we collect</li>
                  <li>Use the app without providing consent (core functionality remains available)</li>
                </ul>

                <p className="text-muted leading-relaxed mt-6">
                  For questions about this privacy policy, you can manage your preferences using the &ldquo;Manage Cookies&rdquo; option below.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-border">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
