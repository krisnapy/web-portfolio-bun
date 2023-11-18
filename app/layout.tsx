import React, { Fragment, type ReactNode } from 'react'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

import { poppins } from '@/assets/font'
import { Navbar } from '@/components'
import '@/styles/globals.css'

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={poppins.className}>
      <body className='bg-dark'>
        <Navbar />

        <Fragment>{children}</Fragment>
        <Analytics />
      </body>

      <Script
        id='cookieyes'
        src='https://cdn-cookieyes.com/client_data/62fdc02b13a66005cefa4242/script.js'
        strategy='lazyOnload'
      />
    </html>
  )
}
