import { HeroAbout } from '@/components/hero-about'
import { Meta, StoryFn } from '@storybook/react'

import ProfilePicture from './assets/hosna_profile_picture.png'

import type { HeroAboutProps } from '@/components/hero-about'

export default {
  title: 'Heroes/HeroAbout',
  Component: HeroAbout,
} as Meta

const Template: StoryFn<HeroAboutProps> = (args) => <HeroAbout {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Meet your new developer!',
  description:
    'I am a 21 year old software developer and Computer \
Science with an interest and skills in Software Development. \
I am a highly motivated and dedicated individual with a passion \
for programming. \
\
I have a strong foundation in front-end technologies \
and development, \
where I am most proficient in web-development. \
I thrive in fast-paced, collaborative environments and am \
eager to contribute my skills and expertise to any team.',
  profilePictureUrl: ProfilePicture.src,
}
