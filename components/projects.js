import React from 'react'
import { nanoid } from 'nanoid'
import budgetBearLogo from '../public/assets/budget_bear.svg'
import finlyLogo from '../public/assets/finly_unwrapped.svg'
import ethanmoffatLogo from '../public/assets/ethanmoffat_unwrapped.svg'
import subflixLogo from '../public/assets/subflix_unwrapped.svg'

import { Carousel } from './carousel'

const projects = [
  {
    id: nanoid(),
    logo: budgetBearLogo,
    borderColor: 'border-blue-200'
  },
  {
    id: nanoid(),
    logo: finlyLogo,
    borderColor: 'border-orange-200'
  },
  {
    id: nanoid(),
    logo: ethanmoffatLogo,
    borderColor: 'border-gray-200'
  },
  {
    id: nanoid(),
    logo: subflixLogo,
    borderColor: 'border-red-200'
  }
]

const ProjectCard = ({ logo, borderColor }) => (
  <div className={`bg-white dark:bg-gray-200 shadow-lg border ${borderColor} p-8 h-48 rounded-3xl items-center flex w-full mt-3 md:w-96 lg:w-96 lg:mt-0 lg:flex-row`}>
    <img src={logo} className="m-auto" />
  </div>
)

const mapProjects = () =>
  projects.map(project => 
    <ProjectCard borderColor={project.borderColor} logo={project.logo} key= {project.id} 
    />
  )

export const Projects = () => (
  <div className="flex flex-col p-2">
    <h2 className="text-3xl text-gray-700 dark:text-gray-200 mb-12">Here are my projects</h2>
    <div className="hidden flex-col md:flex md:flex-row lg:flex lg:flex-row items-center justify-between gap-2">
      {mapProjects()}
    </div>
    <div className="sm:block md:hidden">
      <Carousel 
        size="small"
        slides={mapProjects()}
        arrows={false}
      />
    </div>
  </div>
)
