import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Menu from './components/menu'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+ ' '}>
        <Menu />        
        {children}
        <Footer />
        </body>
    </html>
  )
}
