import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Repulse Bay Residence",
category: "Residential",
    year: "2024",
    image: "/images/a13.jpg",
    type:"Design"
  },
  {
    id: 2,
    title: "Kent Avenue Penthouse",
    category: "Residential",
    type:"Creative",
    year: "2024",
    image: "/images/a15.jpg",
  },
  {
    id: 3,
    title: "Fjord Boat House",
    category: "Residential",
    type:"Design",
    year: "2020",
    image: "/images/a14.jpg",
  },
  {
    id: 4,
    title: "Pavilion House",
    category: "Residential",
    type:"Creative",
    year: "2021",
    image: "/images/a16.jpg",
  },
];

function InResidence() {
  return (
    <section className="py-24 bg-color px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w7xl mx-auto">
        <h2 className="text-2xl font-pp font-semibold text-heading uppercase text-center mb-12 tracking-wide">
          In {" "} A {" "} Residence
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className=" overflow-hidden ">
              <div className="relative h-60 md:h-90 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform cursor-pointer duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className=" font-pp font-semibold text-heading mb-4 text-base text-[#1a1a1a]">
                  {project.title}
                </h3>
                <div className="font-lora uppercase flex items-center tracking-widest gap-2 text-muted-foreground text-xs uppercase">
                  <span>{project.type}</span>|
                  <span>{project.category}</span>|
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InResidence;
