import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const fetchResume = async (): Promise<string> => {
  try {
    const payload = await getPayloadHMR({ config })

    const resume = await payload.findGlobal({
      slug: 'resume' as any,
    })

    type ResumeGlobal = { pdf?: { url: string } }
    const resumeData = resume as ResumeGlobal

    if (!resume) {
      throw new Error('No resume found')
    }

    if (!resumeData.pdf) {
      throw new Error('No PDF found in resume')
    }

    const pdfUrl = resumeData.pdf.url

    return pdfUrl
  } catch (err) {
    throw new Error((err as Error).message)
  }
}
