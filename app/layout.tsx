import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'AI Product Builder | Bootcamp de No-Code en Bolivia',
  description: 'Aprende a crear landings que venden en 1 semana. Cobra tu primer proyecto. Entry ($97) → Sprint 1-2: Landing en producción + primer workflow básico en n8n.',
  generator: 'v0.app',
  icons: {
    icon: 'favicon.png',
    apple: 'favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
