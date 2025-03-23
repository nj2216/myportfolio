import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeevan | Software Engineer & Tech Enthusiast',
  description: 'Passionate about Python, Flask, Next.js, C++, and MySQL. Specializing in media streaming, AI-powered automation, and hardware deployment solutions.',
  generator: 'Jeevan',
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
