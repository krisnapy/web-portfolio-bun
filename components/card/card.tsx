import React from 'react'
import Image from 'next/image'

import { capitalize } from '@/utils/string'

type CardProps = {
  label: string
  image: string
}

export const Card = ({ image, label }: CardProps) => {
  return (
    <div className='mb-14 px-9 flex flex-col items-center'>
      <div className='w-[100px] h-[100px] bg-[#222] flex flex-direction-column justify-center items-center rotate-45 rounded-[30px]'>
        <Image className='-rotate-45 rounded-md' src={image} alt={label} width={50} height={50} />
      </div>

      <h4 className='mt-10 text-lg font-medium text-white'>{capitalize(label)}</h4>
    </div>
  )
}
