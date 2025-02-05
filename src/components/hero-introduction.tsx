import React from 'react'

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export interface HeroIntroductionProps {
  topText: string
  bottomText: string
  description?: string
  linkedinUrl?: string
  githubUrl?: string
}

export function HeroIntroduction(props: HeroIntroductionProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-screen bg-black">
      <div className="bg-secondary h-1/2 w-full lg:h-full lg:w-1/2">
        <div className="flex flex-col gap-4 m-6 hidden lg:block">
          <FaLinkedin size={48} />
          <FaGithubSquare size={48} />
        </div>
      </div>
      <div className="bg-primary h-1/2 w-full lg:h-full lg:w-1/2"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10 text-black text-left">
        <div className="relative">
          <h1 className="text-6xl lg:text-12xl font-black leading-[0.9]">
            {props.topText}
            <br />
            {props.bottomText}
          </h1>
          <div className="absolute animate-bounce top-[80%] right-[-80px] w-16 h-16 bg-secondary rounded-full" />
        </div>
      </div>
      <div className="absolute top-[25%] right-[1%] h-full flex items-center">
        <p className="text-secondary text-center m-12 mt-32 lg:m-0 lg:text-left lg:rotate-90 lg:origin-right text-base tracking-wider font-semibold">
          {props.description}
        </p>
      </div>
    </div>
  )
}
