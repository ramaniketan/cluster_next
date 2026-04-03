import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'


import { Geist, Geist_Mono } from 'next/font/google'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cluster - Unique Design & Digital Experiences',
  description: 'Creative designer crafting unique, bespoke digital experiences',
  
  icons: {
    icon: [
      { url: '/cluster_logo.png' }, 
    ],
    apple: '/cluster_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
