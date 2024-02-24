'use client'

import TypewriterComponent, { type TypewriterClass } from 'typewriter-effect'
import { Balancer } from 'react-wrap-balancer'

import { Button, ProgressiveImage } from '@/components'

type BannerProps = {
  label: Array<Record<string, any>>
  description: string
  image: Record<string, any>
}

export const Banner = ({ label = [], description = '', image }: BannerProps) => {
  const typingWriter = ({ typeString }: TypewriterClass) => {
    label.map((item) => typeString(item.label).start().pauseFor(5000).deleteAll(200).pauseFor(1000))
  }

  return (
    <div id='hero' className='section relative z-0 py-16 md:pt-32 md:pb-20'>
      <div className='container xl:max-w-6xl mx-auto px-4'>
        <div className='flex flex-wrap flex-row -mx-4 justify-center'>
          <div className='aspect-[1200/1409] relative flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center'>
            <ProgressiveImage
              className='rounded-lg'
              priority
              alt={image?.name}
              src={image?.url}
              placeholderSrc={image?.formats?.small?.url}
              fill
            />
          </div>

          <div className='flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12'>
            <div className='text-center lg:text-left mt-6 lg:mt-0'>
              <div className='mb-12'>
                <h1 className='text-4xl leading-normal text-white font-bold mb-4'>
                  <Balancer>
                    Hello, I am Krisna
                    <br />
                    <b className='text-primary'>
                      <TypewriterComponent onInit={typingWriter} options={{ loop: true }} />
                    </b>
                  </Balancer>
                </h1>

                <p className='text-white leading-relaxed font-light text-xl mx-auto pb-2'>
                  {description}
                </p>
              </div>
              <Button title='Download Now' link={'#'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
