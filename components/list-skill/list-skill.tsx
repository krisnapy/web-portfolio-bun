import React from 'react'

import { Card } from '@/components'

type ListSkillProps = {
  label: string
  technologies: Array<Record<string, any>>
}

export const ListSkill = ({ label, technologies = [] }: ListSkillProps) => {
  return (
    <section id='skills' className='relative pt-28 pb-36 bg-blueGray-100 overflow-hidden'>
      <div className='relative container mx-auto'>
        <h2 className='mb-16 text-2xl text-white text-center font-semibold uppercase tracking-px'>
          {label}
        </h2>
        <div className='flex flex-wrap mx-auto -m-3 w-2/3 items-center justify-center'>
          {technologies.map((technology) => (
            <Card label={technology.label} key={technology.id} image={technology.logo?.url || ''} />
          ))}
        </div>
      </div>
    </section>
  )
}
