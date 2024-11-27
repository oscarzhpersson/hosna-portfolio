import { GlobalConfig } from 'payload'

export const ProfilePicture: GlobalConfig = {
  slug: 'profile-picture',
  fields: [
    {
      name: 'picture',
      label: 'Profile Picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
