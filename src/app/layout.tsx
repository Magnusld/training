import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marathon Training Plan',
  description: 'My personal marathon training schedule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <main className="container mx-auto p-4 max-w-2xl">
          {children}
        </main>
      </body>
    </html>
  )
}
