import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shreekrupaaquarium.example'),
  title: {
    default: 'Shree Krupa Aquarium & Pets | Goregaon, Raigad',
    template: '%s | Shree Krupa Aquarium & Pets',
  },
  description:
    'Shree Krupa Aquarium & Pets in Goregaon, Raigad — a trusted local home for healthy fish, planted aquariums, aquascaping, fish food, accessories and friendly expert advice. Visit us or message on WhatsApp.',
  keywords: [
    'aquarium shop Goregaon',
    'fish shop Raigad',
    'pet store Goregaon Raigad',
    'aquarium plants',
    'aquascaping',
    'fish food',
    'Shree Krupa Aquarium',
  ],
  authors: [{ name: 'Shree Krupa Aquarium & Pets' }],
  openGraph: {
    title: 'Shree Krupa Aquarium & Pets | Goregaon, Raigad',
    description:
      'Healthy fish, planted aquariums, aquascaping & friendly expert advice in Goregaon, Raigad. Open daily 10 AM–9 PM.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shree Krupa Aquarium & Pets',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f6d72',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
