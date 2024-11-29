import React from 'react'

import { FaJsSquare } from 'react-icons/fa'
import { IoPhonePortrait } from 'react-icons/io5'
import { RiComputerLine } from 'react-icons/ri'

import type { Proficiency } from '@/interfaces/cms/proficiency'
import type { IconType } from 'react-icons/lib'

export interface ProficienciesProps {
  title: string
  proficiencies: Proficiency[]
}

const proficiencyCard = (proficiency: Proficiency, index: number, icons: IconType[]) => {
  const Icon: IconType = icons[index % icons.length]
  return (
    <div
      key={index}
      className="bg-senary w-full lg:w-48 lg:h-60 rounded-lg p-4 flex flex-col
                    justify-end hover:bg-tertiary hover:text-white"
    >
      <div className="w-14 h-14 bg-secondary rounded-full px-0.5 z-20 flex items-center justify-center">
        <Icon className="text-white" size={24} />
      </div>
      <h2 className="font-medium leading-none text-2xl my-6">{proficiency.title}</h2>
    </div>
  )
}

export function Proficiencies({ title, proficiencies }: ProficienciesProps) {
  if (!Array.isArray(proficiencies)) {
    throw new Error('Proficiencies must be an array')
  }

  const icons = [FaJsSquare, IoPhonePortrait, RiComputerLine]

  return (
    <div className="flex flex-col gap-14 lg:gap-28">
      <h1 className="text-2xl lg:text-6xl font-medium max-w-md lg:max-w-5xl">{title}</h1>
      <div className="flex flex-col lg:flex-row flex-wrap gap-8">
        {proficiencies.map((proficiency, index) => proficiencyCard(proficiency, index, icons))}
      </div>
    </div>
  )
}
