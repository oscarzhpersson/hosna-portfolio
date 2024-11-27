import React from 'react'

import { fetchLogo } from '@/services/cms/fetchLogo'
import { HeroIntroduction } from '@/components/hero-introduction'
import { Proficiencies } from '@/components/proficiencies'
import { Skills } from '@/components/skills'
import { HeroAbout } from '@/components/hero-about'
import { fetchProfilePicture } from '@/services/cms/fetchProfilePicture'

const Page = async () => {
  let proficiencyTitle = 'I’m a software developer with a passion for web-design'
  let profilePictureUrl = ''
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
  let aboutTitle = 'Meet your new developer!'
  let aboutDescription =
    'I am a 21 year old software developer and Computer \
Science with an interest and skills in Software Development. \
I am a highly motivated and dedicated individual with a passion \
for programming. \
\
I have a strong foundation in front-end technologies \
and development, \
where I am most proficient in web-development. \
I thrive in fast-paced, collaborative environments and am \
eager to contribute my skills and expertise to any team.'

  try {
    const [profilePictureUrlResult] = (await Promise.allSettled([fetchProfilePicture()])) as [
      PromiseSettledResult<string>,
    ]
    if (profilePictureUrlResult.status === 'fulfilled') {
      profilePictureUrl = profilePictureUrlResult.value
    } else {
      throw `Error fetching logo URL: ${profilePictureUrlResult.reason}`
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
      <HeroAbout
        title={aboutTitle}
        description={aboutDescription}
        profilePictureUrl={profilePictureUrl}
      />
    </>
  )
}

export default Page
