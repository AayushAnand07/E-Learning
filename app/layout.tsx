
import * as React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { Provider } from './provider'
import { ToastProvider } from '@/components/providers/toaster-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messanger app',
  description: 'Messanger app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
   <Provider>{children}</Provider> 
    
       </body>
    </html>
  )
}
