import React, { type ReactNode } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'sonner'

import { poppins } from '@/assets/font'
import '@/styles/globals.css'
import { Layout } from '@/components/layout/layout'

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={poppins.className}>
      <body className='bg-dark'>
        <Layout>{children}</Layout>
        <Toaster
          visibleToasts={1}
          position='top-right'
          duration={1500}
          theme='dark'
          richColors
          closeButton
        />

        <Analytics />
        <SpeedInsights />
      </body>

      <Script
        id='cookieyes'
        src='https://cdn-cookieyes.com/client_data/62fdc02b13a66005cefa4242/script.js'
        strategy='lazyOnload'
      />
    </html>
  )
}
