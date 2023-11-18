'use client'

import { Button } from '@/components'

export default function NotFound() {
  return (
    <div className='h-screen w-screen flex items-center justify-center text-white flex-col gap-16'>
      <div className='w-4/12 text-center'>
        <h1 className='text-[128px] font-semibold mb-5'>404!</h1>
        <h5>The page you are looking for could not be found.</h5>
      </div>

      <Button title='Go Back' link='/' />
    </div>
  )
}
