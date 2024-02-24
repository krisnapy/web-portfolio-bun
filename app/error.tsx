'use client'

import { Button } from '@/components'
import { useEffect } from 'react'
import { toast } from 'sonner'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    toast.error(`Something went wrong: ${JSON.parse(error.message)}`)
  }, [error])

  return (
    <div className='h-screen w-screen flex items-center justify-center text-white flex-col gap-16'>
      <div className='w-4/12 flex justify-center flex-col items-center'>
        <h1 className='text-xl text-center font-semibold'>Something went wrong!</h1>
        <p className='mt-4 text-center mb-10'>{error.message}</p>

        <Button title='Try again' onClick={reset} />
      </div>
    </div>
  )
}
