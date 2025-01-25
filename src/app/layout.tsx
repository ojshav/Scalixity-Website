import { Inter } from 'next/font/google'
import { Analytics } from '@/src/app/components/anlytics'
import { SiteHeader } from '@/src/app/components/site-header'
import { Footer } from '@/src/app/components/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Markovate - AI Solutions for Data-Driven Companies',
  description: 'We help data-driven companies build measurable generative AI solutions',
  keywords: 'AI, artificial intelligence, machine learning, data science, consulting',
  openGraph: {
    title: 'Markovate - AI Solutions for Data-Driven Companies',
    description: 'We help data-driven companies build measurable generative AI solutions',
    url: 'https://markovate.com',
    siteName: 'Markovate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-[#080B16] to-[#0F1629]">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

