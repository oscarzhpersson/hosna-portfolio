import { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  fields: [
    {
      name: 'skill',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      type: 'select',
      options: [
        {
          label: 'Frontend',
          value: 'frontend',
        },
        {
          label: 'Backend',
          value: 'backend',
        },
        {
          label: 'App',
          value: 'app',
        },
      ],
      required: false,
    },
  ],
}
