import type { Metadata } from 'next'

import { ListSkill, Banner } from '@/components'
import { getData } from '@/services/api-core'

export const fetchHomeApi = async () => {
  const data = await getData('home')

  return {
    banner: data.data.banner,
    skills: data.data.skills,
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getData('home')

  const { title = '', description = '', keywords = [] } = data.pageConfiguration

  return {
    title,
    description,
    keywords: keywords.map(({ keyword }: { keyword: string }) => keyword),
  }
}

export default async function Home() {
  const { banner, skills } = await fetchHomeApi()

  return (
    <div className='container mx-auto px-4'>
      <Banner
        label={banner?.bannerTitles}
        description={banner?.description}
        image={banner?.image}
      />

      <ListSkill label={skills?.label} technologies={skills?.technologies} />
    </div>
  )
}
