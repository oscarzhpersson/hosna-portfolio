import React from 'react'

import { fetchLogo } from '@/services/cms/fetchLogo'

import { Navbar } from '@/components/navbar'

import './globals.css'

const Layout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  let logoUrl: string = ''
  const links = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/resume', label: 'Resume' },
  ]

  try {
    const [logoUrlResult] = (await Promise.allSettled([fetchLogo()])) as [
      PromiseSettledResult<string>,
    ]
    if (logoUrlResult.status === 'fulfilled') {
      logoUrl = logoUrlResult.value
    } else {
      throw `Error fetching logo URL: ${logoUrlResult.reason}`
    }
  } catch (err) {
    console.error(`Unexpected error: ${err}`)
  }
  return (
    <html>
      <body>
        <div className="flex flex-col">
          <Navbar logoUrl={logoUrl} links={links} />
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout
