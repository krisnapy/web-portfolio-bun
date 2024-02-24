import React, { type Dispatch, type SetStateAction } from 'react'

import { cn } from '@/utils/classnames'

type HamburgerProps = {
  isToggle: boolean
  setIsToggle: Dispatch<SetStateAction<boolean>>
}

const hamburgerLine = 'bg-white h-[2.5px] w-7 rounded-sm transform transition-all duration-300'
const activeHamburgerLine =
  'absolute bg-white rounded-sm h-[2.5px] w-7 transform transition-all delay-300'

export const Hamburger = ({ isToggle, setIsToggle }: HamburgerProps) => (
  <div
    className='relative group sm:hidden z-40'
    onClick={() => setIsToggle((prev) => !prev)}
    role='button'
    aria-label='Hamburger'
  >
    <div className='flex flex-col justify-between w-7 h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
      <span className={cn('origin-left', { 'translate-x-10': isToggle }, hamburgerLine)} />
      <span className={cn('delay-75', { 'translate-x-10': isToggle }, hamburgerLine)} />
      <span
        className={cn('origin-left delay-150', { 'translate-x-10': isToggle }, hamburgerLine)}
      />

      <div
        className={cn(
          'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0',
          { 'translate-x-0 w-12': isToggle }
        )}
      >
        <span className={cn('duration-50', activeHamburgerLine, { 'rotate-45': isToggle })} />
        <span className={cn('duration-500', activeHamburgerLine, { '-rotate-45': isToggle })} />
      </div>
    </div>
  </div>
)
