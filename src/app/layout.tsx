import type { Metadata, Viewport } from 'next'; // Import Viewport
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Define metadata
export const metadata: Metadata = {
  title: 'Marathon Training Plan',
  description: 'My personal marathon training schedule',
  manifest: '/manifest.json', // Link to your manifest file
  // Other application-wide metadata can go here
};

// Define viewport settings for PWA behavior on mobile
export const viewport: Viewport = {
  themeColor: '#1f2937', // Matches manifest.json theme_color
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
      <head>
        {/* Standard PWA and iOS specific meta tags */}
        {/* The 'theme-color' is now primarily handled by the viewport export above */}
        {/* <meta name="theme-color" content="#1f2937" /> */}

        <meta name="application-name" content="MarathonPlan" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        {/* Other options for apple-mobile-web-app-status-bar-style: */}
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="black" /> */}
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
        <meta name="apple-mobile-web-app-title" content="MarathonPlan" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* MS Tile - Optional */}
        {/* <meta name="msapplication-TileColor" content="#1f2937" /> */}
        {/* <meta name="msapplication-tap-highlight" content="no" /> */}

        {/* Favicon and Apple Touch Icons */}
        {/* Ensure these icon files exist in your /public folder or /public/icons/ folder */}
        <link rel="icon" href="/favicon.ico" sizes="any" /> {/* Standard favicon */}
        {/*
          It's recommended to provide a PNG for apple-touch-icon as SVG support can be inconsistent.
          Create a 180x180px PNG version from your SVG for this.
        */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        {/*
          You can provide multiple sizes for apple-touch-icon if desired,
          but a single 180x180px is often sufficient. Example:
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-icon-167x167.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png" />
        */}

        {/* Optional: Link to an SVG icon for browsers that might prefer it for favicons,
            but for manifest and apple-touch-icon, PNGs are safer. */}
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />

        {/*
          Optional: Splash screens for iOS (more advanced and requires many image sizes)
          <link rel="apple-touch-startup-image" href="/images/apple_splash_2048.png" sizes="2048x2732" />
          <link rel="apple-touch-startup-image" href="/images/apple_splash_1668.png" sizes="1668x2224" />
          ... and so on for different device resolutions and orientations
        */}
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-white min-h-screen`}
      >
        <main className="container mx-auto p-4 max-w-2xl">
          {children}
        </main>
      </body>
    </html>
  );
}

