import type { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'XKG - Your Second Brain for AI Conversations',
  description: 'Personal AI memory system with full privacy. Thick client, VPS, or hardware options.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white antialiased">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}