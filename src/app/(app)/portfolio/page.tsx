import React from 'react'

import { HeroIntroduction } from '@/components/hero-introduction'
import { Proficiencies } from '@/components/proficiencies'
import { Skills } from '@/components/skills'
import { HeroAbout } from '@/components/hero-about'
import { CardProject } from '@/components/card-project'

import { fetchProfilePicture } from '@/services/cms/fetchProfilePicture'
import { fetchSkills } from '@/services/cms/fetchSkills'
import { fetchAbout } from '@/services/cms/fetchAbout'
import { fetchProficiencies } from '@/services/cms/fetchProficiencies'
import { fetchProjects } from '@/services/cms/fetchProjects'

import type { Skill } from '@/interfaces/cms/skill'
import type { About } from '@/interfaces/cms/about'
import type { ProficienciesObject } from '@/interfaces/cms/proficiency'
import type { ProjectDetails } from '@/interfaces/cms/project'

const Page = async () => {
  let profilePictureUrl: string = ''
  let proficiencies: ProficienciesObject = {} as ProficienciesObject
  let skills: Skill[] = []
  let about: About = {} as About
  let projects: ProjectDetails[] = []

  try {
    const [
      profilePictureUrlResult,
      skillCollectionResult,
      aboutResult,
      proficiencyResult,
      projectResults,
    ] = (await Promise.allSettled([
      fetchProfilePicture(),
      fetchSkills(),
      fetchAbout(),
      fetchProficiencies(),
      fetchProjects(),
    ])) as [
      PromiseSettledResult<string>,
      PromiseSettledResult<Skill[]>,
      PromiseSettledResult<About>,
      PromiseSettledResult<ProficienciesObject>,
      PromiseSettledResult<ProjectDetails[]>,
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

    if (projectResults.status === 'fulfilled') {
      projects = projectResults.value
    } else {
      throw new Error(`Error fetching about: ${projectResults.reason}`)
    }
  } catch (err) {
    console.error(`Unexpected error: ${err}`)
  }

  return (
    <div className="h-full w-full">
      <HeroIntroduction
        topText="HE"
        bottomText="LLO"
        description="Front-end developer Student Back-end developer Web developer App developer"
      />
      <div
        className="flex flex-col lg:flex-row w-full items-center justify-center
                      gap-y-20 lg:gap-y-0 my-20 lg:my-48 lg:space-x-20 lg:px-40"
      >
        <Proficiencies title={proficiencies.title} proficiencies={proficiencies.proficiencies} />
        <Skills skills={skills} />
      </div>
      <HeroAbout
        title={about.title}
        description={about.description}
        profilePictureUrl={profilePictureUrl}
      />
      <CardProject projects={projects} />
    </div>
  )
}

export default Page
