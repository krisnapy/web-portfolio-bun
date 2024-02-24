'use client'

import React, { useState, type ReactNode } from 'react'

import { Navbar } from '@/components'
import { cn } from '@/utils/classnames'

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false)

  return (
    <>
      <Navbar
        setIsMobileMenuVisible={setIsMobileMenuVisible}
        isMobileMenuVisible={isMobileMenuVisible}
      />

      <div
        className={cn('sm:overflow-visible sm:max-h-none', {
          'overflow-hidden': isMobileMenuVisible,
          'max-h-screen': isMobileMenuVisible,
        })}
      >
        {children}
      </div>
    </>
  )
}
