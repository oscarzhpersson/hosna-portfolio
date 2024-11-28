import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { About } from 'payload-types'

export const fetchAbout = async () => {
  try {
    const payload = await getPayloadHMR({ config })

    const about = await payload.findGlobal({
      slug: 'about',
    })

    if (!about) {
      throw new Error('No about data found')
    }

    const data = about as About

    return data
  } catch (err) {
    throw new Error((err as Error).message)
  }
}
