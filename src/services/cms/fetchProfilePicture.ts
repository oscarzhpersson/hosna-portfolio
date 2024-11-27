import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'

import type { imageUrl } from '@/interfaces/cms/image'

/**
 * Fetches the profile picture URL from the CMS.
 *
 * @returns {Promise<string>} A promise that resolves to the profile picture URL.
 * @throws Will throw an error if the picture is not found.
 */
export const fetchProfilePicture = async () => {
  try {
    const payload = await getPayloadHMR({ config })

    const profilePicture = await payload.findGlobal({
      slug: 'profile-picture',
    })

    if (!profilePicture) {
      throw new Error('No site settings found')
    }

    if (!profilePicture.picture) {
      throw new Error('No image found in site settings')
    }

    const pictureUrl = (profilePicture.picture as imageUrl).url

    return pictureUrl
  } catch (err) {
    throw new Error((err as Error).message)
  }
}
