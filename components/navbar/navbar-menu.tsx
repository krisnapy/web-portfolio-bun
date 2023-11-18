import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/utils/classnames'

import { navigationMenus } from './constant'

const NavbarMenu = () => {
  const asPath = usePathname()

  const linkScroll = (target: string) => {
    if (asPath !== '/') return

    if (target === '#') return window.scrollTo({ top: 0, behavior: 'smooth' })

    const section = document?.querySelector(target)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {navigationMenus.map(({ label, target }, index: number) => (
        <Link
          key={index}
          href={'/' + target}
          scroll={false}
          onClick={() => linkScroll(target)}
          className={cn(
            { 'text-primary': target === asPath.replace('/', '') },
            'relative font-normal min-w-[100px] cursor-pointer overflow-visible flex justify-center items-center group text-center text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light'
          )}
        >
          {label}
          <span className='w-full h-1 bg-primary block absolute rounded-md -bottom-4 opacity-0 group-hover:opacity-100 transition-opacity' />
        </Link>
      ))}
    </>
  )
}

export default NavbarMenu
