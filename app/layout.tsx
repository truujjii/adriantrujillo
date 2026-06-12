import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider, themeNoFlashScript } from '@/lib/theme'
import { LanguageProvider } from '@/lib/i18n'
import { contactInfo } from '@/content/data'

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = 'https://adriantrujillo.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Adrián Trujillo — CRM & Automation · Workflow Design · Data & BI',
  description:
    'Business & Technology graduate building end-to-end automations (Make.com, n8n, WhatsApp API, LLMs) and Power BI dashboards. Open to CRM & Automation roles in Dubai, UAE.',
  keywords: [
    'Adrián Trujillo',
    'CRM Automation',
    'Make.com',
    'n8n',
    'WhatsApp Business API',
    'Power BI',
    'Workflow automation',
    'Dubai jobs',
    'AI consultant',
    'Business & Technology',
  ],
  authors: [{ name: 'Adrián Trujillo Pregigueiro' }],
  openGraph: {
    title: 'Adrián Trujillo — CRM & Automation · Data & BI',
    description:
      'Automations that connect CRMs with WhatsApp, email and internal systems — and the dashboards that track them. Open to relocation to Dubai, UAE.',
    url: siteUrl,
    siteName: 'Adrián Trujillo',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrián Trujillo — CRM & Automation · Data & BI',
    description: 'Open to CRM & Automation roles in Dubai, UAE.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#07080b' },
  ],
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adrián Trujillo Pregigueiro',
  jobTitle: 'CRM & Automation Specialist',
  email: `mailto:${contactInfo.email}`,
  telephone: contactInfo.phone,
  url: siteUrl,
  nationality: 'Spanish',
  knowsLanguage: ['Spanish', 'Catalan', 'English', 'Italian'],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universitat Autònoma de Barcelona',
  },
  seeks: {
    '@type': 'Demand',
    name: 'CRM & Automation role in Dubai, UAE',
  },
  sameAs: [contactInfo.linkedin, contactInfo.github],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
