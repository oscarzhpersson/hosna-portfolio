import { GlobalConfig } from 'payload'

export const Projects: GlobalConfig = {
  slug: 'projects',
  label: 'Projects',
  fields: [
    {
      name: 'projects',
      type: 'array',
      label: 'Projects',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
          required: true,
        },
        {
          name: 'imageUrl',
          type: 'upload',
          relationTo: 'media',
          label: 'Image URL',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Project Link',
          required: true,
        },
        {
          name: 'linkDescription',
          type: 'text',
          label: 'Link Description',
          required: true,
        },
      ],
    },
  ],
}
