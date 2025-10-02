'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    image: '/hero/interior2.jpg',
    year: "2024",
    details: "Inspired by Nordic design philosophy, this bedroom creates a sanctuary of calm. Natural oak, linen textiles, and a muted palette establish tranquility, while strategic lighting enhances the room's versatile ambiance from dawn to dusk."
  },
]


function HospitalityProjects() {


  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });
  const subheadingInView = useInView(subheadingRef, { once: true, amount: 0.6 });

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-color">
      <div className='max-w-7xl mx-auto flex flex-col items-end'>
        <div className="mb-24 mt-12 w-full md:w-auto text-right">
          <motion.h2
            ref={headingRef}
            className="text-2xl font-pp font-semibold text-heading mb-4 uppercase text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            HOSPITALITY PROJECTS
          </motion.h2>
          <motion.p
            ref={subheadingRef}
            className="font-poppins text-body max-w-lg text-sm text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={subheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            Explore our recent projects where thoughtful design meets
            exceptional recent great projects craftsmanship that we have done
          </motion.p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2  gap-4">
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
                <h3 className=" font-pp font-semibold text-heading mb-4 text-base">
                  {project.title}
                </h3>
                <p className="font-poppins text-xs text-body mb-8 leading-5 flex-1">
                  {project.details}
                </p>
                <div className="flex items-center gap-2 font-lora text-muted-foreground text-xs uppercase">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>
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
