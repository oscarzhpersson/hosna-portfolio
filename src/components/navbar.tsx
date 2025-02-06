'use client'

import React from 'react'
import Image from 'next/image'

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export interface NavbarProps {
  logoUrl: string
  links: {
    href: string
    label: string
  }[]
  linkedinUrl?: string
  githubUrl?: string
}

export function Navbar(props: NavbarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <div className="bg-white w-full h-18 max-h-24 p-4 px-12 flex flex-row items-center justify-between drop-shadow-md z-50">
      <div>
        {props.logoUrl ? (
          <Image src={props.logoUrl} alt="Logo" width={66} height={32} />
        ) : (
          <div className="w-40 h-30 bg-black" />
        )}
      </div>
      <div className="flex flex-row items-center gap-4">
        {props.links.map((link) => (
          <div
            key={link.href}
            className={`p-2 px-4 hidden lg:flex items-center ${isActive(link.href) ? 'bg-quinary cursor-pointer' : ''} justify-center rounded-lg`}
          >
            <a href={link.href} className={`no-underline text-black text-sm font-medium`}>
              {link.label}
            </a>
          </div>
        ))}
        <a
          href={'https://www.linkedin.com/in/hosnamolavi/'}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-75 transition-opacity z-50"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href={'https://github.com/hosnaml'}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-75 transition-opacity z-50"
        >
          <FaGithubSquare size={28} />
        </a>
      </div>
    </div>
  )
}
