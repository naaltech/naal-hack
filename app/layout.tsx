import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: "naal'hack | Türkiye'nin ilk liseler arası hackathonu",
  description: "Naal'Hack resmi websitesi. Türkiye'nin liseler arası ilk hackathon yarışması. 27-28 Nisan 2024",
  keywords: ['hackathon', 'lise', 'öğrenci', 'coding', 'programming', 'teknoloji', 'yarışma', 'istanbul', 'naalhack', 'naal'],
  authors: [{ name: 'Nevzat Ayaz Anadolu Lisesi' }],
  creator: 'Nevzat Ayaz Anadolu Lisesi',
  publisher: 'Nevzat Ayaz Anadolu Lisesi',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "naal'hack | Türkiye'nin ilk liseler arası hackathonu",
    description: "Naal'Hack resmi websitesi. Türkiye'nin liseler arası ilk hackathon yarışması. 27-28 Nisan 2024",
    url: 'https://hack.naal.org.tr',
    siteName: "naal'hack ",
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "naal'hack | Türkiye'nin ilk liseler arası hackathonu",
    description: "Naal'Hack resmi websitesi. Türkiye'nin liseler arası ilk hackathon yarışması. 27-28 Nisan 2024",
    images: ['/logo_text.png'],
    creator: '@naalteknoloji',
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
  alternates: {
    canonical: 'https://hack.naal.org.tr',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo_text.png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ErrorBoundary>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ErrorBoundary>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
