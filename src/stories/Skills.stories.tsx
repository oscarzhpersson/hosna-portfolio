import { Skills } from '@/components/skills'
import { Meta, StoryFn } from '@storybook/react'

import type { SkillsProps } from '@/components/skills'

export default {
  title: 'Components/Skills',
  Component: Skills,
} as Meta

const Template: StoryFn<SkillsProps> = (args) => <Skills {...args} />

export const Default = Template.bind({})
Default.args = {
  skills: [
    { skill: 'JavaScript', label: 'frontend' },
    { skill: 'TypeScript', label: 'frontend' },
    { skill: 'React', label: 'frontend' },
    { skill: 'Vue', label: 'frontend' },
    { skill: 'Angular', label: 'frontend' },
    { skill: 'Node.js', label: 'backend' },
    { skill: 'Express', label: 'backend' },
    { skill: 'Python', label: 'backend' },
    { skill: 'Django', label: 'backend' },
    { skill: 'Flask', label: 'backend' },
    { skill: 'Java', label: 'backend' },
    { skill: 'Spring', label: 'backend' },
    { skill: 'Kotlin', label: 'backend' },
    { skill: 'Swift', label: 'app' },
    { skill: 'Objective-C', label: 'app' },
    { skill: 'C#', label: 'backend' },
    { skill: 'ASP.NET', label: 'backend' },
    { skill: 'Ruby', label: 'backend' },
    { skill: 'Rails', label: 'backend' },
    { skill: 'PHP', label: 'backend' },
    { skill: 'Laravel', label: 'backend' },
    { skill: 'SQL', label: 'backend' },
    { skill: 'NoSQL', label: 'backend' },
    { skill: 'GraphQL', label: 'backend' },
    { skill: 'Docker', label: 'backend' },
  ],
}
