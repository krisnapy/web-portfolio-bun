'use client'

import { Button } from '@/components'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className='h-screen w-screen flex items-center justify-center text-white flex-col gap-16'>
      <div className='w-4/12 '>
        <h1 className='text-xl text-center font-semibold'>Something went wrong! {error.message}</h1>
      </div>

      <Button title='Try again' onClick={reset} />
    </div>
  )
}
