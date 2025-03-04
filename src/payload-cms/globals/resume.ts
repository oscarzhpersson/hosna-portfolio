import { GlobalConfig } from 'payload'

export const Resume: GlobalConfig = {
  slug: 'resume',
  label: 'Resume',
  fields: [
    {
      name: 'pdf',
      label: 'Resume PDF',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
