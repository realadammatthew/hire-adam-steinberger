import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hire Expert AI Chatbot Developer in Wake Forest NC | Triangle Area Custom GPT Solutions | Adam Matthew Steinberger',
  description: 'Hire Adam Matthew Steinberger—Wake Forest\'s leading AI chatbot developer for custom GPT solutions. Serving Raleigh-Durham businesses with secure, branded chatbots using ChatGPT, Claude, Gemini & Mistral. Local Triangle area expertise.',
  keywords: 'hire AI developer Wake Forest NC, custom chatbot developer Raleigh, GPT consultant Durham NC, Triangle area AI expert, ChatGPT integration specialist, Claude AI developer NC, Gemini implementation Wake Forest, Mistral AI consultant Raleigh, local AI developer Triangle, custom GPT solutions Wake Forest, AI chatbot agency Raleigh Durham, Research Triangle AI consultant, Adam Matthew Steinberger, AI chatbot solutions NC, local AI expert Wake Forest, custom AI chatbots Triangle area, business AI solutions Raleigh, Claude Gemini Mistral integration NC',
  authors: [{ name: 'Adam Matthew Steinberger' }],
  creator: 'Adam Matthew Steinberger',
  publisher: 'Adam Matthew Steinberger LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hire.adam.matthewsteinberger.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hire Local AI Chatbot Developer | Wake Forest & Triangle Area',
    description: 'Expert AI developer in Wake Forest, NC specializing in custom chatbots for Triangle area businesses. Local expertise in ChatGPT, Claude, Gemini & Mistral solutions.',
    url: 'https://hire.adam.matthewsteinberger.com',
    siteName: 'Hire Adam Matthew Steinberger - Triangle Area AI Expert',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'Adam Matthew Steinberger - Triangle Area AI Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Local AI Expert in Wake Forest | Custom Chatbot Solutions',
    description: 'Triangle area\'s premier AI developer for custom business chatbots. Local expertise in ChatGPT, Claude, Gemini & Mistral implementation.',
    images: ['/social-preview.png'],
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
  verification: {
    google: 'G-P4CX07CNRW',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preload" href="/fonts.css" as="style" />
        <link rel="preload" href="/styles.css" as="style" />
        <link rel="preload" href="/bootstrap.min.css" as="style" />
        <link href="/fonts.css" rel="stylesheet" />
        <link href="/bootstrap.min.css" rel="stylesheet" />
        <link href="/styles.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P4CX07CNRW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P4CX07CNRW');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <script src="/bootstrap.bundle.min.js" defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
                const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
