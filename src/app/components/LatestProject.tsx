'use client';
import { useState } from 'react';
import { X, MapPin } from 'lucide-react';
import Image from 'next/image';

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
  {
    id: 3,
    title: "Culinary Excellence",
    description: "Contemporary luxury kitchen combining functionality with timeless elegance and artisan details.",
    category: "Residential",
    location: "Los Angeles",
    image: '/hero/interior3.jpg',
    year: "2023",
    details: "A chef's dream realized through meticulous planning and premium materials. Italian marble countertops, custom brass hardware, and integrated smart appliances deliver both visual drama and practical efficiency for serious home cooking."
  },
  {
    id: 4,
    title: "Library Home Office",
    description: "Sophisticated workspace merging productivity with literary charm through custom millwork.",
    category: "Commercial",
    location: "London",
    image:'/hero/interior1.jpg',
    year: "2023",
    details: "Floor-to-ceiling oak shelving creates an immersive library atmosphere while maintaining modern work functionality. Integrated lighting, acoustic panels, and ergonomic custom furniture support focused productivity in elegant surroundings."
  },
  {
    id: 5,
    title: "Urban Living Room",
    description: "Bright, contemporary gathering space emphasizing comfort and connection with nature.",
    category: "Residential",
    location: "San Francisco",
    image:"/hero/interior3.jpg",
    year: "2024",
    details: "Large windows frame city views while abundant plants bring nature inside. Modular seating arrangements adapt to various social configurations, and warm neutrals with natural textures create an inviting atmosphere for daily life and entertaining."
  },
  {
    id: 6,
    title: "Spa Sanctuary",
    description: "Luxurious bathroom retreat featuring natural stone, organic materials, and zen aesthetics.",
    category: "Residential",
    location: "Miami",
    image: '/hero/interior2.jpg',
    year: "2023",
    details: "A private wellness retreat incorporating spa principles into residential design. Natural stone tiles, a statement soaking tub, and integrated greenery create a sensory experience that transforms daily routines into restorative rituals."
  }
];

const LatestProject = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-color">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-monasans font-bold text-heading mb-4">
            Latest Work
          </h2>
          <p className="text-lg md:text-xl font-poppins text-body max-w-2xl">
            Explore our recent projects where thoughtful design meets exceptional craftsmanship
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card-hover
              cursor-pointer roundedlg overflow-hidden hadow-[var(--shadow-elegant)]"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                 layout='fill'
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-poppins text-sm font-medium">View Details →</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="font-monasans font-semibold   text-heading mb-3">
                  {project.title}
                </h3>
                <p className="font-poppins text-sm  text-body mb-3 leading-5  ">
                  {project.description}
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



        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-black text-white font-monasans font-semibold rounded-lg
          cursor-pointer">
            View All Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-color rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-80 overflow-hidden rounded-t-2xl">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                layout='fill'
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90
                 hover:bg-white rounded-full p-2 cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <X className="w-6 h-6  text-heading" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              <div className="mb-4 flex items-center gap-3 font-lora italic text-accent text-sm">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-monasans font-bold text-heading mb-6">
                {selectedProject.title}
              </h2>

              <p className="text-lg font-poppins text-body leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="border-t border-border pt-6">
                <h3 className="text-xl font-monasans font-semibold text-heading mb-4">
                  Project Details
                </h3>
                <p className="font-poppins text-body leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 px-6 py-3 bg-black text-primary-foreground  text-white font-monasans
                 font-semibold rounded-lg  transition-all duration-300 cursor-pointer ">
                  Contact Us
                </button>
                {/* <button className="flex-1 px-6 py-3 border-2 border-primary  bg-black
                text-primary font-monasans font-semibold rounded-lg  text-white transition-all duration-300">
                  Similar Projects
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestProject;








