import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cauã Vitor Braga Novaes - Portfolio',
  description: 'Portfolio pessoal de Cauã Vitor Braga Novaes - Indie Hacker & Fullstack Developer',
  keywords: ['portfolio', 'desenvolvedor', 'fullstack', 'react', 'javascript', 'python', 'java'],
  authors: [{ name: 'Cauã Vitor Braga Novaes' }],
  creator: 'Cauã Vitor Braga Novaes',
  openGraph: {
    title: 'Cauã Vitor Braga Novaes - Portfolio',
    description: 'Indie Hacker & Fullstack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 