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
      throw new Error(`Error fetching logo URL: ${logoUrlResult.reason}`)
    }
  } catch (err) {
    console.error(`Unexpected error: ${err}`)
  }

  return (
    <html>
      <body>
        <div className="flex flex-col">
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar logoUrl={logoUrl} links={links} />
          </div>
          <div className="pt-16">{children}</div>
        </div>
      </body>
    </html>
  )
}

export default Layout
