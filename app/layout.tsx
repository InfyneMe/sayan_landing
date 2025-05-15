import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sayan Construction',
  description: 'Created By infyne.in',
  generator: 'Bishal Deb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
