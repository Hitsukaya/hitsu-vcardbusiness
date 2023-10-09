import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer'
import MobileMenu from './components/header/MobileMenu'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VCARD BUSINESS - Hitsukaya',
  description: 'VCard business.',
  keywords:'vcard, business, hitsukaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileMenu />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
