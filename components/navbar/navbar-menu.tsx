import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { type Dispatch, type SetStateAction } from 'react'

import { cn } from '@/utils/classnames'

import { navigationMenus } from './constant'

type NavbarMenuProps = {
  isToggle: boolean
  setIsToggle: Dispatch<SetStateAction<boolean>>
}

const NavbarMenu = ({ setIsToggle }: NavbarMenuProps) => {
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
          onClick={() => {
            linkScroll(target)
            setIsToggle(false)
          }}
          className={cn(
            { 'text-primary': target === asPath.replace('/', '') },
            'relative sm:text-lg sm:font-medium font-semibold text-xl min-w-[100px] cursor-pointer overflow-visible flex justify-center items-center group text-center text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light'
          )}
        >
          {label}
          <span className='w-0 transition-all duration-150 group-hover:w-10/12 h-1 bg-primary block absolute rounded-md -bottom-4 opacity-0 group-hover:opacity-100' />
        </Link>
      ))}
    </>
  )
}

export default NavbarMenu
