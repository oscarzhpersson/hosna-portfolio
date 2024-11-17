import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'

export interface NavbarProps {
  logoUrl: string
  links: {
    href: string
    label: string
  }[]
}

export function Navbar(props: NavbarProps) {
  const router = useRouter()

  const isActive = (href: string) => router.pathname === href

  return (
    <div className="bg-white rounded-lg w-full h-18 max-h-24 p-4 px-12 flex flex-row items-center justify-between drop-shadow-2xl">
      <div>
        {props.logoUrl ? (
          <Image src={props.logoUrl} alt="Logo" width={160} height={160} />
        ) : (
          <div className="w-40 h-30 bg-black" />
        )}
      </div>
      <div className="flex flex-row items-center gap-6">
        {props.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mr-4 no-underline ${isActive(link.href) ? 'text-secondary font-medium' : 'text-gray-300 font-normal'}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
