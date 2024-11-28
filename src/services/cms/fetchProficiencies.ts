import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { ProficienciesObject } from '@/interfaces/cms/proficiency'

export const fetchProficiencies = async (): Promise<ProficienciesObject> => {
  try {
    const payload = await getPayloadHMR({ config })
    const proficiencies = await payload.findGlobal({
      slug: 'proficiencies',
    })

    if (!proficiencies || !proficiencies.proficiencies) {
      throw new Error('No proficiencies found')
    }

    return {
      title: proficiencies.title,
      proficiencies: proficiencies.proficiencies.map((proficiency) => ({
        title: proficiency.title,
        description: proficiency.description,
      })),
    } as ProficienciesObject
  } catch (err) {
    throw new Error((err as Error).message)
  }
}
