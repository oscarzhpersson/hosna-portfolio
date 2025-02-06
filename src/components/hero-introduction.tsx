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
    <div className="flex flex-col lg:flex-row justify-center items-center w-full h-screen bg-black z-50">
      <div className="bg-secondary h-1/2 w-full lg:h-full lg:w-1/2">
        <div className="lg:flex flex-col gap-4 m-6 hidden">
          <a
            href={'https://www.linkedin.com/in/hosnamolavi/'}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-75 transition-opacity z-40"
          >
            <FaLinkedin size={48} />
          </a>
          <a
            href={'https://github.com/hosnaml'}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-75 transition-opacity z-40"
          >
            <FaGithubSquare size={48} />
          </a>
        </div>
      </div>
      <div className="bg-primary h-1/2 w-full lg:h-full lg:w-1/2"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10 text-black text-left">
        <div className="relative">
          <h1 className="text-9xl lg:text-12xl font-black leading-[0.9]">
            {props.topText}
            <br />
            {props.bottomText}
          </h1>
          <div className="absolute animate-bounce top-[80%] right-[-40px] lg:right-[-80px] w-8 h-8 lg:w-16 lg:h-16 bg-black lg:bg-secondary rounded-full" />
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
