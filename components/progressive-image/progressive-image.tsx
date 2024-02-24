'use client'

import Image, { type ImageProps } from 'next/image'
import React, { useState } from 'react'

type ProgressiveImageProps = {
  alt: string
  src: string
  placeholderSrc: string
} & ImageProps

export const ProgressiveImage = (props: ProgressiveImageProps) => {
  const { alt, placeholderSrc, src, ...otherProps } = props

  const [isLoading, setIsLoading] = useState(true)

  const image = isLoading ? placeholderSrc : src

  return (
    <Image
      className='image-container animate-pulse bg-slate-200'
      alt={alt}
      quality={isLoading ? 10 : 75}
      src={image}
      sizes='(max-width: 768px) 100vw'
      blurDataURL={image}
      placeholder='blur'
      onLoad={() => setIsLoading(false)}
      {...otherProps}
    />
  )
}
