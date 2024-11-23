import { HeroSkills } from '@/components/hero-skills'
import { Meta, StoryFn } from '@storybook/react'

import type { HeroSkillsProps } from '@/components/hero-skills'

export default {
  title: 'Heroes/HeroSkills',
  Component: HeroSkills,
} as Meta

const Template: StoryFn<HeroSkillsProps> = (args) => <HeroSkills {...args} />

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
