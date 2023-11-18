import Image from 'next/image'

import logoWhite from '@/assets/images/logo-white.png'

export default function Loading() {
  return (
    <div className='loading-screen w-screen h-screen bg-dark flex justify-center items-center'>
      <Image
        src={logoWhite}
        alt='logo'
        width={100}
        height={100}
        quality={100}
        className='animate-grow opacity-0'
      />
    </div>
  )
}
