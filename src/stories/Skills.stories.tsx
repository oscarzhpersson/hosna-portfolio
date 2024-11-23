import { Skills } from '@/components/skills'
import { Meta, StoryFn } from '@storybook/react'

import type { SkillsProps } from '@/components/skills'

export default {
  title: 'Heroes/Skills',
  Component: Skills,
} as Meta

const Template: StoryFn<SkillsProps> = (args) => <Skills {...args} />

export const Default = Template.bind({})
Default.args = {
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Angular',
    'Node.js',
    'Express',
    'Python',
    'Django',
    'Flask',
    'Java',
    'Spring',
    'Kotlin',
    'Swift',
    'Objective-C',
    'C#',
    'ASP.NET',
    'Ruby',
    'Rails',
    'PHP',
    'Laravel',
    'SQL',
    'NoSQL',
    'GraphQL',
    'Docker',
  ],
}
