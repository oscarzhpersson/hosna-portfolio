import { Proficiencies } from '@/components/proficiencies'
import { Meta, StoryFn } from '@storybook/react'

import type { ProficienciesProps } from '@/components/proficiencies'

export default {
  title: 'Components/Proficiencies',
  Component: Proficiencies,
} as Meta

const Template: StoryFn<ProficienciesProps> = (args) => <Proficiencies {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'I’m a software developer with a passion for web-design',
  proficiencies: [
    {
      title: 'Web Development',
      description: 'I have experience with React, Next.js, and Tailwind CSS',
    },
    {
      title: 'App Development',
      description: 'I have experience with Node.js, Express, and MongoDB',
    },
    {
      title: 'Back-end Development',
      description: 'I have experience with React Native and Expo',
    },
  ],
}
