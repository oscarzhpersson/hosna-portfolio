import React from 'react'

import type { Skill } from '@/interfaces/cms/skill'

export interface SkillsProps {
  skills: Skill[]
}

const skillBadge = (skill: Skill, index: number) => (
  <div
    key={index}
    className="bg-primary rounded-full p-4 py-2.5 text-center
                    justify-center text-secondary font-medium hover:text-tertiary
                    transform transition-transform duration-100 hover:scale-110"
  >
    {skill.skill}
  </div>
)

export function Skills(props: SkillsProps) {
  return (
    <div className="lg:rounded-lg bg-secondary w-full h-fit lg:w-4/12 lg:h-[52rem] py-12 lg:py-3">
      <div className="flex flex-wrap gap-3 m-6">{props.skills.map(skillBadge)}</div>
    </div>
  )
}
