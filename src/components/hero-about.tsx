import React from 'react'
import Image from 'next/image'
import { extractTextFromRichText } from '@/services/utilities/extractTextFromRichText'

export interface HeroAboutProps {
  title: string
  description: string
  profilePictureUrl: string
}

export function HeroAbout(props: HeroAboutProps) {
  console.log(props)
  return (
    <div className="flex flex-col lg:flex-row bg-secondary items-center justify-center text-primary px-2 lg:px-52 gap-12 lg:gap-20 xl:gap-60 py-24">
      <div className="order-1 lg:order-2 flex-shrink-0 mr-8">
        <Image
          src={props.profilePictureUrl}
          alt="Profile"
          width={320}
          height={320}
          className="w-[20rem] h-[20rem] md:w-[27.7rem] md:h-[27.7rem] rounded-full object-cover"
        />
      </div>
      <div className="order-2 lg:order-1 flex flex-col gap-8">
        <h2 className="text-4xl lg:text-6xl font-medium text-center lg:text-left">{props.title}</h2>
        <p className="text-lg font-extralight text-center lg:text-left">
          {extractTextFromRichText(props.description)}
        </p>
      </div>
    </div>
  )
}
