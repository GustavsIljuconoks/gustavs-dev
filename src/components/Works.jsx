import React from 'react';

import { github } from '../assets';
import { projects } from '../constants';

import '../css/Work.css';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {

  const source_code = () => {
    window.open(source_code_link, "_blank")
  }

  return (
    <div className="card flex flex-col gap-7 lg:flex-row bg-[#F5F5F5] p-8 rounded-2xl w-full">
      <div className="project-thumbnail relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={ () => source_code()} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
            <img src={github} alt={github} className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
      </div>
      
      <div className="project-info flex flex-col h-auto justify-center text-center w-full lg:w-[30rem]">
        <div className="project-description">
          <h3 className='font-bold'>{name}</h3>
          <p className='text-black-40'>{description}</p>
        </div>

        <div className="project-tags mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p key={tag.name} className='shadow-lg px-4 py-1 font-medium'>
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <section id='project' className='project py-48'>
        <div className="container">
          <h1 className='font-bold text-[40px] text-accent mt-40'>Projects</h1>
          <div className="projects flex flex-wrap gap-7 mt-10 justify-center">
            {projects.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}
                index={index}
                {...project}/>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Works