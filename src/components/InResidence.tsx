import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Repulse Bay Residence",
    description:
      "The Repulse Bay Residence is envisioned as a living gallery that continuously evolve and adapt to a variety of everyday needs. This thoughtful design creates a tranquil environment, where each...",
    category: "Residential",
    year: "2024",
    image: "/hero/interior1.jpg",
  },
  {
    id: 2,
    title: "Kent Avenue Penthouse",
    description:
      "Nestled along the Brooklyn waterfront, overlooking the East River and Manhattan skyline, the Kent Avenue penthouse apartment is one of its kind. New York's industrial vibe meets soft minimalism and...",
    category: "Residential",
    year: "2024",
    image: "/hero/interior2.jpg",
  },
  {
    id: 3,
    title: "Fjord Boat House",
    description:
      "Uniquely located close to the water's edge on the border of Denmark & Germany, The Fjord Boat House is used as a guest house or peaceful retreat when needed.",
    category: "Residential",
    year: "2020",
    image: "/hero/interior3.jpg",
  },
  {
    id: 4,
    title: "Archipelago House",
    description:
      "Located on the unspoiled and rocky coast of Sweden, the Archipelago summer house is a modernized holiday home embracing all aspects of family life - blending functionality with an architecture...",
    category: "Residential",
    year: "2020",
    image: "/hero/interior4.jpg",
  },
  {
    id: 5,
    title: "Pavilion House",
    description:
      "Elegantly set in the beautiful East Anglian landscape, on the border of a working farm in Suffolk, the Pavilion House is a real inside-out construction. The shapes and materials of...",
    category: "Residential",
    year: "2021",
    image: "/hero/interior5.jpg",
  },
];

function InResidence() {
  return (
    <section className="py-16 bg-color px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w7xl mx-auto">
        <h2 className="font-monasans font-bold mb-16 text-lg tracking-widest text-center uppercase ">
          In Residence
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
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
              <div className="">
                <h3 className=" md:text-lg mt-5 font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-5 line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>
                <div className="text-xs text-gray-500 uppercase flex items-center gap-2">
                  <span>{project.category}</span>
                  <span>•</span>
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
