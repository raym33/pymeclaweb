import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pymeclaweb.vercel.app'),
  title: 'Pymeclaw | Local AI assistant for sole traders and small offices',
  description: 'Pymeclaw is a local AI assistant for sole traders and small offices on Mac. Quotes, invoices, appointments, customer follow-up — no cloud, no monthly fee.',
  openGraph: {
    title: 'Pymeclaw',
    description: 'Local assistant for quotes, invoices, appointments, and daily follow-up. Runs on your Mac, no cloud, no monthly API fee.',
    images: ['/pymeclaw-logo.jpeg'],
  },
  icons: { icon: '/icon.jpg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
