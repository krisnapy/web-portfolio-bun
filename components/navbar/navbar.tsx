'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Hamburger } from '@/components'
import { cn } from '@/utils/classnames'

import NavbarMenu from './navbar-menu'

export const Navbar = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false)

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
              'md:opacity-100 absolute top-0 right-0 md:relative md:p-0 md:w-auto md:flex-row flex-col w-full md:gap-3 gap-10 font-general-medium flex h-screen md:h-auto transition-all',
              {
                'z-40 opacity-1 bg-dark md:bg-transparent overflow-hidden items-center justify-center':
                  isToggle,
                'opacity-0 pointer-events-none md:pointer-events-auto [&>a]:md:flex [&>a]:hidden':
                  !isToggle,
              }
            )}
          >
            <NavbarMenu />
          </div>

          <Hamburger isToggle={isToggle} setIsToggle={setIsToggle} />
        </div>
      </div>
    </nav>
  )
}
