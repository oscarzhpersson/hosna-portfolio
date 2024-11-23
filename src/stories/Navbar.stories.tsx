import { Navbar } from '@/components/navbar'
import { Meta, StoryFn } from '@storybook/react'

import Logo from './assets/logo_simple.png'

import type { NavbarProps } from '@/components/navbar'

export default {
  title: 'Site-wide/Navbar',
  Component: Navbar,
} as Meta

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  logoUrl: Logo.src,
  links: [
    { href: '/', label: 'Portfolio' },
    { href: '/resume', label: 'resume' },
  ],
}
