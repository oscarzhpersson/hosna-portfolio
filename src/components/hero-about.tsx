import React from 'react'

import { extractTextFromRichText } from '@/services/utilities/extractTextFromRichText'

export interface HeroAboutProps {
  title: string
  description: string
  profilePictureUrl: string
}

export function HeroAbout(props: HeroAboutProps) {
  console.log(props)
  return (
    <div className="flex flex-row bg-secondary items-center justify-center text-primary px-52 gap-60 py-24">
      <div className="flex flex-col gap-8">
        <h2 className="text-6xl font-medium">{props.title}</h2>
        <p className="text-2xl font-extralight">{extractTextFromRichText(props.description)}</p>
      </div>
      <div className="flex-shrink-0 mr-8">
        <img
          src={props.profilePictureUrl}
          alt="Profile"
          className="w-[27.7rem] h-[27.7rem] rounded-full object-cover"
        />
      </div>
    </div>
  )
}
