'use client'

import React, { type Dispatch, type SetStateAction, useEffect } from 'react'
import Link from 'next/link'

import { Hamburger } from '@/components'
import { cn } from '@/utils/classnames'

import NavbarMenu from './navbar-menu'

type NavbarProps = {
  isMobileMenuVisible: boolean
  setIsMobileMenuVisible: Dispatch<SetStateAction<boolean>>
}

export const Navbar = ({ isMobileMenuVisible, setIsMobileMenuVisible }: NavbarProps) => {
  useEffect(() => {
    const onScrollHandler = () => {
      const navbar = document.getElementById('navbar')
      if (window.scrollY > 10) return navbar?.classList.add('!bg-dark')

      return navbar?.classList.remove('!bg-dark')
    }

    window.addEventListener('scroll', onScrollHandler)

    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [])

  return (
    <nav
      id='navbar'
      className='top-bar fixed w-full bg-transparent z-10 transition-all ease-in-out duration-75'
    >
      <div className='container mx-auto py-8 px-4 text-white h-auto'>
        <div className='z-10 flex justify-between items-center py-1 mx-0'>
          <div className='font-medium text-2xl'>
            <Link href='/'>Krisna</Link>
          </div>

          <div
            className={cn(
              'sm:opacity-100 absolute top-0 right-0 sm:relative sm:p-0 sm:w-auto sm:flex-row flex-col w-full sm:gap-3 gap-10 font-general-medium flex h-screen sm:h-auto sm:transition-opacity transition-all sm:translate-y-0',
              {
                'z-40 opacity-1 bg-dark sm:bg-transparent overflow-hidden items-center justify-center translate-y-0 duration-500 sm:duration-150':
                  isMobileMenuVisible,
                'opacity-0 pointer-events-none sm:pointer-events-auto [&>a]:sm:flex [&>a]:hidden -translate-y-[90vh] duration-500 sm:duration-150':
                  !isMobileMenuVisible,
              }
            )}
          >
            <NavbarMenu isToggle={isMobileMenuVisible} setIsToggle={setIsMobileMenuVisible} />
          </div>

          <Hamburger isToggle={isMobileMenuVisible} setIsToggle={setIsMobileMenuVisible} />
        </div>
      </div>
    </nav>
  )
}
