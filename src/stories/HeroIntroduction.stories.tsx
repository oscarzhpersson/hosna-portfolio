import { HeroIntroduction } from '@/components/hero-introduction'
import { Meta, StoryFn } from '@storybook/react'

import type { HeroIntroductionProps } from '@/components/hero-introduction'

export default {
  title: 'Heroes/HeroIntroduction',
  Component: HeroIntroduction,
} as Meta

const Template: StoryFn<HeroIntroductionProps> = (args) => <HeroIntroduction {...args} />

export const Default = Template.bind({})
Default.args = {
  topText: 'HE',
  bottomText: 'LLO',
  description: 'Front-end developer Student Back-end developer Web developer App developer',
}
