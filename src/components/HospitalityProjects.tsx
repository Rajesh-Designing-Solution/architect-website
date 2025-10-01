import React from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  image: string;
  year: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Loft Renovation",
    description: "A light-filled space blending industrial elements and warm textures, designed for flexible living.",
    category: "Residential",
    location: "New York",
    image: '/hero/interior1.jpg',
    year: "2024",
    details: "This transformation of a 1920s industrial warehouse merges original architectural elements with contemporary comfort. Exposed steel beams and brick walls create dramatic contrast against soft furnishings and natural wood, while floor-to-ceiling windows flood the open-plan space with natural light."
  },
  {
    id: 2,
    title: "Scandinavian Serenity",
    description: "Minimalist bedroom retreat embracing hygge principles with natural materials and soft textures.",
    category: "Residential",
    location: "Copenhagen",
    image:'/hero/interior2.jpg',
    year: "2024",
    details: "Inspired by Nordic design philosophy, this bedroom creates a sanctuary of calm. Natural oak, linen textiles, and a muted palette establish tranquility, while strategic lighting enhances the room's versatile ambiance from dawn to dusk."
  },
]


function HospitalityProjects() {
    
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-color">
    <div className='max-w-7xl mx-auto'>
        <h2 className=" font-monasans font-bold mb-16 tracking-widest text-center"> HOSPITALITY PROJECTS </h2>

         <div className="grid  grid-cols-1 md:grid-cols-2  gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card-hover 
              cursor-pointer roundedlg overflow-hidden hadow-[var(--shadow-elegant)]"
              
            >
              {/* Image Container */}
              <div className="relative h-[350px] md:h-[450px] overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                 layout='fill'
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-poppins text-lg font-medium">View Details →</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className=" font-monasans font-semibold   text-heading mb-5">
                  {project.title}
                </h3>
                <p className="font-poppins text-sm  text-body mb-4 leading-5 ">
                  {project.details}
                </p>
                <div className="flex items-center gap-2 font-lora italic text-muted-foreground text-sm">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      
    </div>
    </section>
  )
}

export default HospitalityProjects
