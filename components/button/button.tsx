import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  title: string
  link?: string
  external?: boolean
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { title, link, external, onClick } = props

  const Container = link ? (external ? 'a' : Link) : 'button'
  const href = link ?? '#'
  const target = external ? '_blank' : '_self'

  const handleOnClick = (e: React.MouseEvent) => {
    !link && e.preventDefault()
    onClick?.()
  }

  return (
    <Container
      href={href}
      onClick={handleOnClick}
      target={target}
      aria-label={title}
      type='button'
      className='py-2.5 px-10 inline-block font-semibold rounded-md text-md text-center leading-normal text-dark bg-primary hover:bg-transparent hover:border-primary hover:text-primary border-transparent border-2'
    >
      {title}
    </Container>
  )
}
