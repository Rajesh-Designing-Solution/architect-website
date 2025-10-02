"use client";

import React from "react";
import Image from "next/image";
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

// Manually "Nordic-ize" the titles for the image overlay
const nordicTitles: { [id: number]: string } = {
  1: "Mödern Löft Rēnövation",
  2: "Scändinaviän Sērenity",
  3: "The Grēēn Atrïum Officē",
  4: "Coästal Mödērn Vïlla",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Loft Renovation",
    description:
      "A light-filled space blending industrial elements and warm textures, designed for flexible living.",
    category: "Residential",
    location: "New York",
    image: "/images/a18.jpg",
    year: "2024",
    details:
      "This transformation of a 1920s industrial warehouse merges original architectural elements with contemporary comfort. Exposed steel beams and brick walls create dramatic contrast against soft furnishings and natural woodenn.",
  },
  {
    id: 2,
    title: "Scandinavian Serenity",
    description:
      "Minimalist bedroom retreat embracing hygge principles with natural materials and soft textures.",
    category: "Residential",
    location: "Copenhagen",
    image: "/images/a20.jpg",
    year: "2024",
    details:
      "Inspired by Nordic design philosophy, this bedroom creates a sanctuary of calm. Natural oak, linen textiles, and a muted palette establish tranquility, while strategic lighting enhances the room's versatile ambiance from dawn to dusk.",
  },
  {
    id: 3,
    title: "The Green Atrium Office",
    description:
      "A biophilic corporate headquarters focused on employee well-being and sustainable design.",
    category: "Commercial",
    location: "San Francisco",
    image: "/images/a19.jpg",
    year: "2023",
    details:
      "This award-winning office features a central, multi-story atrium filled with native plants, acting as the building's 'lungs' and social hub. Materials are locally sourced and low-VOC, promoting exceptional indoor air quality,",
  },
  {
    id: 4,
    title: "Coastal Modern Villa",
    description:
      "Seamless indoor-outdoor living with panoramic ocean views, utilizing a palette of concrete, glass, and teak.",
    category: "Residential",
    location: "Malibu",
    image: "/images/a17.jpg",
    year: "2024",
    details:
      "Perched on a cliffside, this villa is designed to capture the breathtaking ocean vista from every room. Retractable glass walls blur the lines between the interior and exterior living spaces, leading out to a cantilevered infinity pool.",
  },
];

function HospitalityProjects() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });
  const subheadingInView = useInView(subheadingRef, {
    once: true,
    amount: 0.6,
  });

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-7xl mx-auto flex flex-col items-end">
        <div className="mb-24 mt-12 w-full md:w-auto text-right">
          <motion.h2
            ref={headingRef}
            className="text-2xl font-pp font-semibold text-heading mb-4 uppercase text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            HOSPITALITY PROJECTS
          </motion.h2>
          <motion.p
            ref={subheadingRef}
            className="font-poppins text-body max-w-lg text-sm text-right"
            initial={{ opacity: 0, y: 40 }}
            animate={
              subheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            Explore our recent projects where thoughtful design meets
            exceptional recent great projects craftsmanship that we have done
          </motion.p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 gap-y-16 md:gap-y-24 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card-hover 
              cursor-pointer roundedlg overflow-hidden hadow-[var(--shadow-elegant)]"
            >
              {/* Image Container */}
              <div className="relative h-[300px] md:h-[370px] overflow-hidden group">
                {/* Nordic-ized title overlay, top left */}
                <div
                  className="absolute top-0 left-0 z-10 p-6"
                  style={{
                    color: "#ede8d5",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.5rem",
                    letterSpacing: "0.01em",
                    textShadow: "0 2px 8px rgba(0,0,0,0.18)",
                  }}
                >
                  {nordicTitles[project.id]}
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  className="w-full h-full object-cover transition-none"
                />
                {/* No overlay, no scale, no "View Details" */}
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="font-poppins text-sm text-body mb-12 leading-5 flex-1">
                  {project.details}
                </p>
                <div className="flex items-center gap-2 font-lora text-muted-foreground text-xs uppercase">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HospitalityProjects;
