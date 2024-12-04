import { GlobalConfig } from 'payload'

export const Proficiencies: GlobalConfig = {
  slug: 'proficiencies',
  label: 'Proficiencies',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'proficiencies',
      type: 'array',
      label: 'Proficiencies',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
      ],
    },
  ],
}
