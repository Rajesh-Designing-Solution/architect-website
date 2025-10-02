"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  image?: string;
  video?: string;
  poster?: string;
  year: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Strandgården Renovation",
    description:
      "A 19th-century coastal house transformed into one cohesive, modern yet timeless family residence.",
    category: "Residential",
    location: "Øresund, Denmark",
    image: "/images/10.jpg",
    year: "2025",
    details:
      "On the shore of Øresund in Denmark, Strandgården stands as a quiet witness to nearly two centuries of life by the sea. Built in 1842 and carrying the traces of generations within its walls, the house has been gently transformed, uniting two dwellings into one cohesive home. This complex yet subtle renovation focused on preserving the original charm and structural integrity while introducing.",
  },
  {
    id: 2,
    title: "Scandinavian Serenity",
    description:
      "Minimalist bedroom retreat embracing hygge principles with natural materials and soft textures.",
    category: "Residential",
    location: "Copenhagen",
    image: "/images/a7.jpg",
    year: "2024",
    details:
      "Inspired by Nordic design philosophy, this bedroom creates a sanctuary of calm. Natural oak, linen textiles, and a muted palette establish tranquility. This project prioritized a light, airy feel through careful material selection and a minimalist approach to decor, fostering a sense of peaceful retreat.",
  },
  {
    id: 3,
    title: "Culinary Excellence",
    description:
      "Contemporary luxury kitchen combining functionality with timeless elegance and artisan details.",
    category: "Residential",
    location: "Los Angeles",
    video: "/videos/02.mp4",
    poster: "/images/a7.jpg",
    year: "2023",
    details:
      "A chef's dream realized through meticulous planning and premium materials. Italian marble countertops and custom brass hardware deliver both visual drama and practical efficiency. The kitchen was designed to be the heart of the home, featuring state-of-the-art appliances and intelligent storage solutions that combine high performance with refined aesthetics.",
  },
  {
    id: 4,
    title: "Library Home Office",
    description:
      "Sophisticated workspace merging productivity with literary charm through custom millwork.",
    category: "Commercial",
    location: "London",
    video: "/videos/01.mp4",
    poster: "/images/a6.jpg",
    year: "2023",
    details:
      "Floor-to-ceiling oak shelving creates an immersive library atmosphere while maintaining modern work functionality. Integrated lighting and ergonomic custom furniture support focused productivity. This project exemplifies how a commercial space can feel warm and personal, blending traditional library elements with a sleek, contemporary feel to inspire creativity and concentration.",
  },
  {
    id: 5,
    title: "Urban Living Room",
    description:
      "Bright, contemporary gathering space emphasizing comfort and connection with nature.",
    category: "Residential",
    location: "San Francisco",
    image: "/images/a8.jpg",
    year: "2024",
    details:
      "Large windows frame city views while abundant plants bring nature inside. Modular seating arrangements adapt to various social configurations, creating an inviting atmosphere. The design intentionally blurs the lines between indoor and outdoor living, making the urban environment feel connected and accessible while providing a comfortable and serene escape.",
  },
  {
    id: 6,
    title: "Spa Sanctuary Retreat",
    description:
      "Luxurious bathroom retreat featuring natural stone, organic materials, and zen aesthetics.",
    category: "Residential",
    location: "Miami",
    image: "/images/a12.jpg",
    year: "2023",
    details:
      "A private wellness retreat incorporating spa principles into residential design. Natural stone tiles, a statement soaking tub, and integrated greenery create a sensory experience that transforms daily routines into restorative, mindful rituals. **This is the second of the longer cards.**",
  },
  {
    id: 7,
    title: "The Copper House",
    description:
      "A bold commercial façade designed with oxidised copper panels and large thermal glass elements.",
    category: "Commercial",
    location: "Sydney, Australia",
    video: "/videos/03.mp4",
    poster: "/images/a5.jpg",
    year: "2025",
    details:
      "This project sets a new benchmark for urban commercial architecture. The dynamic façade, clad in pre-patinated copper, will evolve in colour and texture over time, reflecting the project’s longevity. The design maximizes natural light penetration into the deep floor plates while the striking aesthetic provides an unmistakable architectural identity for the building. **This is the third card with the longer, detailed text.**",
  },
  {
    id: 8,
    title: "High-Rise Penthouse",
    description:
      "Custom interior design for an exclusive residence, maximizing panoramic city and harbor views.",
    category: "Residential",
    location: "Hong Kong",
    image: "/images/a5.jpg",
    year: "2024",
    details:
      "The interior utilizes a dark, rich palette of smoked oak and leather to anchor the space against the expansive, ever-changing backdrop of the cityscape. Smart home technology is seamlessly integrated throughout. Custom lighting design enhances the dramatic atmosphere, highlighting key architectural features and art pieces while providing functional illumination.",
  },
  {
    id: 9,
    title: "Museum Cafe & Eatery",
    description:
      "A public space renovation focusing on durability, accessibility, and bright, inviting materiality.",
    category: "Public",
    location: "Berlin, Germany",
    image: "/images/a6.jpg",
    year: "2023",
    details:
      "Located within a historic museum, the cafe's design respects the building's heritage while offering a modern, bustling atmosphere. Terrazzo flooring, bespoke wooden furniture, and a high ceiling promote a comfortable flow for high foot traffic. The space functions as a vibrant social hub, enhancing the visitor experience with a mix of contemporary design and timeless public space principles.",
  },
];

function ProjectRow({
  items,
  pattern,
  onClick,
}: {
  items: Project[];
  pattern: "2-1-1" | "1-1-2";
  onClick: (project: Project) => void;
}) {
  const colsClass =
    pattern === "2-1-1"
      ? "lg:[grid-template-columns:2fr_1fr_1fr]"
      : "lg:[grid-template-columns:1fr_1fr_2fr]";

  return (
    <div
      className={`grid gap-x-4 gap-y-12 grid-cols-1 md:grid-cols-2 ${colsClass}`}
    >
      {items.map((project, index) => (
        <div
          key={project.id}
          className="project-card-hover cursor-pointer overflow-hidden shadow-[var(--shadow-elegant)] bg-card flex flex-col"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => onClick(project)}
        >
          <ProjectMediaThumb project={project} />
          <div className="pt-6 pb-8 flex-1 flex flex-col">
            <h3 className="font-pp font-semibold text-heading mb-3 text-base">
              {project.title}
            </h3>
            <p className="font-poppins text-xs text-body mb-3 leading-5 flex-1">
              {project.description}
            </p>
            <div className="flex items-center uppercase gap-2 font-lora text-muted-foreground text-xs mt-auto">
              <span>{project.category}</span>|<span>{project.location}</span>|
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectMediaThumb({ project }: { project: Project }) {
  // Remove poster for grid videos
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  if (project.video && videoRef.current) {
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-[168px] md:h-[216px] lg:h-[360px] group"
    >
      {project.video ? (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={project.video}
            preload="metadata"
            playsInline
            muted
            loop
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>
      ) : project.image ? (
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="w-full h-full object-cover transition-all duration-1200 group-hover:scale-110"
        />
      ) : (
        <Image
          src={`/placeholder.svg?height=480&width=768&query=architecture%20project`}
          alt={project.title}
          fill
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
        <span className="text-white font-poppins text-sm font-medium">
          View Details →
        </span>
      </div>
    </div>
  );
}

// Responsive arrow for Contact Us button
const ContactArrow = () => (
  <span className="ml-2 text-lg font-bold" aria-hidden="true">
    →
  </span>
);

const LatestProject = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const row1 = projects.slice(0, 3);
  const row2 = projects.slice(3, 6);
  const row3 = projects.slice(6, 9);

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });
  const subheadingInView = useInView(subheadingRef, {
    once: true,
    amount: 0.6,
  });

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <motion.h2
            ref={headingRef}
            className="text-2xl font-pp font-semibold text-heading mb-4 uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={
              headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Latest Work
          </motion.h2>
          <motion.p
            ref={subheadingRef}
            className="font-poppins text-body max-w-lg text-sm"
            initial={{ opacity: 0, y: 40 }}
            animate={
              subheadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            Explore our recent projects where thoughtful design meets
            exceptional craftsmanship
          </motion.p>
        </div>

        <ProjectRow items={row1} pattern="2-1-1" onClick={setSelectedProject} />
        <div className="h-12 lg:h-16" />
        <ProjectRow items={row2} pattern="1-1-2" onClick={setSelectedProject} />
        <div className="h-12 lg:h-16" />
        <ProjectRow items={row3} pattern="2-1-1" onClick={setSelectedProject} />
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex p-0 animate-fade-in"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full h-full bg-color grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background p-2 cursor-pointer transition-transform duration-300 hover:scale-110"
              aria-label="Close project details"
            >
              <X className="w-6 h-6 text-heading" />
            </button>

            <div className="relative h-[45vh] lg:h-full overflow-hidden">
              {selectedProject.video ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={selectedProject.video}
                  controls
                  playsInline
                  preload="metadata"
                  poster={
                    selectedProject.poster ||
                    `/placeholder.svg?height=720&width=1280&query=premium%20architecture%20video%20poster`
                  }
                />
              ) : selectedProject.image ? (
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <Image
                  src={`/placeholder.svg?height=720&width=1280&query=architecture%20project`}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>

            <div className="flex flex-col h-full overflow-y-auto p-6 md:p-10 lg:p-12">
              <div className="mb-10 flex flex-wrap items-center gap-3 font-lora text-muted-foreground text-sm tracking-wide">
                <span>{selectedProject.category}</span>
                <span className="opacity-50">/</span>
                <span>{selectedProject.location}</span>
                <span className="opacity-50">/</span>
                <span>{selectedProject.year}</span>
              </div>

              <h2 className="text-xl font-monasans font-semibold text-heading mb-4 text-balance">
                {selectedProject.title}
              </h2>

              <p className="text-sm font-poppins text-body leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="border-t border-border pt-6 md:pt-8">
                <h3 className=" font-monasans font-semibold text-heading mb-3">
                  Project Details :
                </h3>
                <p className="font-poppins text-sm leading-relaxed md:leading-7">
                  {selectedProject.details}
                </p>
              </div>

              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-6 py-3 bg-black text-white font-monasans font-semibold rounded-full cursor-pointer flex items-center group hover:scale-90 transition-all duration-200">
                  Contact Us
                  <ContactArrow />
                </button>
                <button
                  className="px-6 py-3 border border-border text-heading bg-background/60 hover:bg-background font-monasans font-semibold rounded-full cursor-pointer w-full sm:w-auto hover:scale-90 transition-all duration-200"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestProject;
