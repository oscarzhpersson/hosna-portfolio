import React from 'react'

export interface HeroIntroductionProps {
  topText: string
  bottomText: string
}

export function HeroIntroduction(props: HeroIntroductionProps) {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <div className="bg-secondary h-screen w-6/12"></div>
      <div className="bg-primary h-screen w-6/12"></div>
      <div className="absolute inset-0 flex items-center justify-center z-50 text-black text-left">
        <div className="relative">
          <h1 className="text-12xl font-black leading-[0.9]">
            {props.topText}
            <br />
            {props.bottomText}
          </h1>
          <div className="absolute top-[80%] right-[-80px] w-16 h-16 bg-secondary rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
