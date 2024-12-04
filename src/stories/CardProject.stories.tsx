import { CardProject } from '@/components/card-project'
import { Meta, StoryFn } from '@storybook/react'

import type { CardProjectProps } from '@/components/card-project'

export default {
  title: 'Components/Card Project',
  Component: CardProject,
} as Meta

const Template: StoryFn<CardProjectProps> = (args) => <CardProject {...args} />

export const Default = Template.bind({})
Default.args = {
  projects: [
    {
      title: 'Project One',
      description: 'This is the first example project.',
      imageUrl: 'https://picsum.photos/400/200?random=1',
      link: 'https://example.com/project-one',
      linkDescription: 'View Project',
    },
    {
      title: 'Project Two',
      description: 'This is the second example project.',
      imageUrl: 'https://picsum.photos/400/200?random=2',
      link: 'https://example.com/project-two',
      linkDescription: 'View Project',
    },
    {
      title: 'Project Three',
      description: 'This is the third example project.',
      imageUrl: 'https://picsum.photos/400/200?random=3',
      link: 'https://example.com/project-three',
      linkDescription: 'View Project',
    },
  ],
}
