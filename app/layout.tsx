import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GoLatte',
  description: 'Coffee focused on quality and sustainability.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col h-screen'>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}