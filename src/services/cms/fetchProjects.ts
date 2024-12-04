import config from '@payload-config'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import { extractTextFromRichText } from '../utilities/extractTextFromRichText'

import type { ProjectDetails } from '@/interfaces/cms/project'

export const fetchProjects = async () => {
  try {
    const payload = await getPayloadHMR({ config })

    const projectsResponse = await payload.findGlobal({
      slug: 'projects',
    })

    if (!projectsResponse || !projectsResponse.projects) {
      throw new Error('No projects data found')
    }

    const data = projectsResponse.projects.map((project: any) => ({
      title: project.title,
      description: extractTextFromRichText(project.description),
      imageUrl: project.imageUrl.url,
      link: project.link,
      linkDescription: project.linkDescription,
    }))

    return data as ProjectDetails[]
  } catch (err) {
    throw new Error((err as Error).message)
  }
}
