import React from 'react'

import { fetchLogo } from '@/services/cms/fetchLogo'
import { HeroIntroduction } from '@/components/hero-introduction'

const Page = async () => {
  let logoUrl: string = ''

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
    </>
  )
}

export default Page
