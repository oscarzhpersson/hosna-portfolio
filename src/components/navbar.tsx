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
    <div className="bg-white w-full h-18 max-h-24 p-4 px-12 flex flex-row items-center justify-between drop-shadow-md">
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
        <div className="cursor-pointer">
          <FaLinkedin size={28} />
        </div>
        <div className="cursor-pointer">
          <FaGithubSquare size={28} />
        </div>
      </div>
    </div>
  )
}
