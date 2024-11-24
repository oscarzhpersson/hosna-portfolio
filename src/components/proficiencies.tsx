import React, { Component } from 'react'

export interface ProficienciesProps {
  title: string
  proficiencies: { title: string; description: string; icon?: Component }[]
}

const proficiencyCard = (proficiency: string) => (
  <div
    className="bg-senary w-48 h-60 rounded-lg p-4 flex flex-col
                    justify-end hover:bg-tertiary hover:text-white"
  >
    <div className="w-14 h-14 bg-secondary rounded-full px-0.5 z-20" />
    <h2 className="font-medium leading-none text-2xl my-6">{proficiency}</h2>
  </div>
)

export function Proficiencies(props: ProficienciesProps) {
  return (
    <div className="flex flex-col gap-28">
      <h1 className="text-6xl font-medium max-w-5xl">{props.title}</h1>
      <div className="flex flex-row gap-8">
        {props.proficiencies.map((proficiency) => proficiencyCard(proficiency.title))}
      </div>
    </div>
  )
}
