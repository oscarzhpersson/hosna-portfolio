import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { Skill } from 'payload-types'

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const payload = await getPayloadHMR({ config })
    let allSkills: Skill[] = []
    let page = 1
    let hasMore = true

    while (hasMore) {
      const skills = await payload.find({
        collection: 'skills',
        limit: 100,
        page,
      })

      if (skills.docs.length > 0) {
        allSkills = allSkills.concat(skills.docs as Skill[])
        page += 1
        hasMore =
          skills.page !== undefined &&
          skills.totalPages !== undefined &&
          skills.page < skills.totalPages
      } else {
        hasMore = false
      }
    }

    return allSkills
  } catch (err) {
    throw new Error((err as Error).message)
  }
}
