import { ExternalLink,Github,ArrowRight } from 'lucide-react'
import React from 'react'
const projects=[
    {
        id:1,
        title:"Coffee Shop-Website Landing Page",
        description:"A responsive landing page for a coffee shop, showcasing its menu, ambiance, and contact information.",
        image:"./Projects/peakpx.jpg",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"#",
        githubUrl:"#"

    },
     {
        id:2,
        title:"Coffee Shop-Website Landing Page",
        description:"A responsive landing page for a coffee shop, showcasing its menu, ambiance, and contact information.",
        image:"./Projects/peakpx.jpg",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"#",
        githubUrl:"#"

    },
     {
        id:3,
        title:"Coffee Shop-Website Landing Page",
        description:"A responsive landing page for a coffee shop, showcasing its menu, ambiance, and contact information.",
        image:"./Projects/peakpx.jpg",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"#",
        githubUrl:"#"

    },
]
const ProjectSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative '>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Featured <span className='text-primary'>Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Explore my recent projects that showcase my skills in web development, data analytics, and more. Each project reflects my passion for creating innovative solutions and enhancing user experiences.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,key)=>(
                    <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                        
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-115' />

                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap gap-1 mb-4'>
                                {project.tags.map((tag)=>(
                                    <span className='px-2 py-1 text-sm font-medium rounded-full bg-primary/15 text-primary' key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className='text-xl font-semibold mb-2 px-6'>
                            {project.title}
                        </h3>
                        <p className='text-muted-foreground text-sm mb-4'>
                            {project.description}
                        </p>
                        <div className='flex justify-between items-center mb-2 mx-2'>
                            <div className='flex space-x-3'>
                                <a className='hover:text-sky-400 transition-all duration-300' target='_blank' href={project.demoUrl}>
                                    <ExternalLink />
                                </a>
                                <a className='hover:text-sky-400 transition-all duration-300' target='_blank'  href={project.githubUrl}>
                                    <Github/>
                                </a>

                            </div>

                        </div>


                    </div>
                ))}

            </div>
            <div className='text-center mt-12'>
                <a href="https://github.com/TinkeshDeshmukh" className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank'>
                    Check My Github<ArrowRight className='h-4 w-4' />
                </a>

            </div>
        </div>

    </section>
  )
}

export default ProjectSection
