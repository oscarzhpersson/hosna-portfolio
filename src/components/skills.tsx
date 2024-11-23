import React from 'react'

export interface SkillsProps {
  skills: string[]
}

const skillBadge = (skill: string) => (
  <div
    className="bg-primary rounded-full p-4 py-2.5 text-center
                    justify-center text-secondary font-medium hover:text-black
                    transform transition-transform duration-300 hover:scale-110"
  >
    {skill}
  </div>
)

export function Skills(props: SkillsProps) {
  return (
    <div className="rounded-lg bg-secondary w-3/12 h-[38rem] py-3">
      <div className="flex flex-wrap gap-3 m-6">{props.skills.map(skillBadge)}</div>
    </div>
  )
}
