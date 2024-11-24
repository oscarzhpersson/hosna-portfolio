import React from 'react'

import { fetchLogo } from '@/services/cms/fetchLogo'
import { HeroIntroduction } from '@/components/hero-introduction'
import { Proficiencies } from '@/components/proficiencies'
import { Skills } from '@/components/skills'

const Page = async () => {
  let logoUrl: string = ''
  let proficiencyTitle = 'I’m a software developer with a passion for web-design'
  let proficiencies = [
    {
      title: 'Web Development',
      description: 'I have experience with React, Next.js, and Tailwind CSS',
    },
    {
      title: 'App Development',
      description: 'I have experience with Node.js, Express, and MongoDB',
    },
    {
      title: 'Back-end Development',
      description: 'I have experience with React Native and Expo',
    },
  ]
  let skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Angular',
    'Node.js',
    'Express',
    'Python',
    'Django',
    'Flask',
    'Java',
    'Spring',
    'Kotlin',
    'Swift',
    'Objective-C',
    'C#',
    'ASP.NET',
    'Ruby',
    'Rails',
    'PHP',
    'Laravel',
    'SQL',
    'NoSQL',
    'GraphQL',
    'Docker',
  ]

  try {
    const [logoUrlResult] = (await Promise.allSettled([fetchLogo()])) as [
      PromiseSettledResult<string>,
    ]
    if (logoUrlResult.status === 'fulfilled') {
      logoUrl = logoUrlResult.value
    } else {
      throw `Error fetching logo URL: ${logoUrlResult.reason}`
    }
  } catch (err) {
    console.error(`Unexpected error: ${err}`)
  }

  return (
    <>
      <HeroIntroduction
        topText="HE"
        bottomText="LLO"
        description="Front-end developer Student Back-end developer Web developer App developer"
      />
      <div className="flex flex-row w-full items-center justify-center gap-x-40 my-48">
        <Proficiencies title={proficiencyTitle} proficiencies={proficiencies} />
        <Skills skills={skills} />
      </div>
    </>
  )
}

export default Page
