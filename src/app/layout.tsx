import type { Metadata, Viewport } from 'next'; // Import Viewport
import { Inter } from 'next/font/google';
import './globals.css';
import PostHogConsent from "@/components/PostHogConsent";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

// Define metadata
export const metadata: Metadata = {
  title: 'Marathon Training Plan',
  description: 'My personal marathon training schedule',
  manifest: '/manifest.json', // Link to your manifest file
  icons: {
    icon: '/icons/icon-128x128.png',
    apple: '/icons/apple-touch-icon.png',
  },
  // Other application-wide metadata can go here
};

// Define viewport settings for PWA behavior on mobile
export const viewport: Viewport = {
  themeColor: '#1a472a', // Updated to match new accent color
  // Ensure common viewport settings for responsiveness
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1, // Optional: Prevents zooming, can make it feel more "app-like"
  userScalable: false, // Optional: Also prevents zooming
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}
      >
        <PostHogConsent />
        <main className="container mx-auto p-4 max-w-2xl flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
