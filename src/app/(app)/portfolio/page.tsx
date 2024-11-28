import React from 'react'

import { HeroIntroduction } from '@/components/hero-introduction'
import { Proficiencies } from '@/components/proficiencies'
import { Skills } from '@/components/skills'
import { HeroAbout } from '@/components/hero-about'

import { fetchProfilePicture } from '@/services/cms/fetchProfilePicture'
import { fetchSkills } from '@/services/cms/fetchSkills'
import { fetchAbout } from '@/services/cms/fetchAbout'
import { fetchProficiencies } from '@/services/cms/fetchProficiencies'

import type { Skill } from '@/interfaces/cms/skill'
import type { About } from '@/interfaces/cms/about'
import type { ProficienciesObject } from '@/interfaces/cms/proficiency'

const Page = async () => {
  let profilePictureUrl: string = ''
  let proficiencies: ProficienciesObject = {} as ProficienciesObject
  let skills: Skill[] = []
  let about: About = {} as About

  try {
    const [profilePictureUrlResult, skillCollectionResult, aboutResult, proficiencyResult] =
      (await Promise.allSettled([
        fetchProfilePicture(),
        fetchSkills(),
        fetchAbout(),
        fetchProficiencies(),
      ])) as [
        PromiseSettledResult<string>,
        PromiseSettledResult<Skill[]>,
        PromiseSettledResult<About>,
        PromiseSettledResult<ProficienciesObject>,
      ]

    if (profilePictureUrlResult.status === 'fulfilled') {
      profilePictureUrl = profilePictureUrlResult.value
    } else {
      throw new Error(`Error fetching logo URL: ${profilePictureUrlResult.reason}`)
    }

    if (skillCollectionResult.status === 'fulfilled') {
      skills = skillCollectionResult.value
    } else {
      throw new Error(`Error fetching skills: ${skillCollectionResult.reason}`)
    }

    if (aboutResult.status === 'fulfilled') {
      about = aboutResult.value
    } else {
      throw new Error(`Error fetching about: ${aboutResult.reason}`)
    }

    if (proficiencyResult.status === 'fulfilled') {
      proficiencies = proficiencyResult.value
    } else {
      throw new Error(`Error fetching proficiencies: ${proficiencyResult.reason}`)
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
        <Proficiencies title={proficiencies.title} proficiencies={proficiencies.proficiencies} />
        <Skills skills={skills} />
      </div>
      <HeroAbout
        title={about.title}
        description={about.description}
        profilePictureUrl={profilePictureUrl}
      />
    </>
  )
}

export default Page
