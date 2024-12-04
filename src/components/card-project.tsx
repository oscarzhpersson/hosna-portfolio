import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import type { ProjectDetails } from '@/interfaces/cms/project'

export interface CardProjectProps {
  projects: ProjectDetails[]
}

const projectCard = (project: ProjectDetails, index: number) => (
  <div
    key={index}
    className="h-fit flex flex-col lg:flex-row gap-12 mt-12 m-4 lg:mx-20 p-12 bg-secondary rounded-xl shadow-md
            border-black border-[0.5px] border-opacity-50 items-center"
  >
    <Image className="rounded-lg" src={project.imageUrl} alt="Project" width={300} height={300} />
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium text-primary">{project.title}</h2>
      <p className="text-lg font-light text-primary">{project.description}</p>
      <Link href={project.link} passHref>
        <button className="bg-primary text-black p-4 rounded-lg w-fit">
          {project.linkDescription}
        </button>
      </Link>
    </div>
  </div>
)

export function CardProject(props: CardProjectProps) {
  return (
    <div className="w-full flex flex-col p-12 mt-12 lg:mt-20 rounded-xl">
      {props.projects.map((project, index) => projectCard(project, index))}
    </div>
  )
}
