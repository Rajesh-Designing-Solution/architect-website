
'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react'; 

// slideer data
const slides = [
  {
    id: 1,
    src: '/hero/interior1.jpg', 
    title: 'Audo House',
    description: 'In Copenhagen’s evolving Nordhavn district, Audo House redefines how we live, work, and connect. The historic 1918 building has been carefully transformed into a fluid and welcoming destination – uniting café, restaurant, concept shop, event spaces and exclusive residences under one roof.',
  },
  {
    id: 2,
    src: '/hero/interior2.jpg',
    title: 'Design Philosophy',
    description: 'We strive for architectural balance, where the visual and functional aspects of a design are equally weighted. Our focus is on materials, craftsmanship, and timeless aesthetics, creating spaces that foster well-being.',
  },
  {
    id: 3,
    src: '/hero/interior3.jpg',
    title: 'Minimalist Interiors',
    description: 'The interiors are characterized by a refined use of natural materials, soft color palettes, and a minimalist approach to design. Every element is chosen for its quality and ability to create a sense of calm and openness.',
  },

   {
    id: 4,
    src: '/hero/interior4.jpg',
    title: 'Norm Architects',
    description: 'Norm Architects is a multidisciplinary design studio based in Copenhagen, working in the fields of architecture, interior design, industrial design, and artistic direction. Our work is guided by the philosophy of "soft minimalism."',
  },
  {
    id: 5,
    src: '/hero/interior5.jpg',
    title: 'Norm Architects',
    description: 'Norm Architects is a multidisciplinary design studio based in Copenhagen, working in the fields of architecture, interior design, industrial design, and artistic direction. Our work is guided by the philosophy of "soft minimalism."',
  },
];

const AUTO_SLIDE_INTERVAL = 7000; 
const SLIDE_DURATION = 1000; 

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Function to move to the next slide, handles wrap-around
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  // Function to move to the previous slide, handles wrap-around
  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, []);

  // Function to go to a specific slide (from dots)
  const goToSlide = useCallback((index) => {
    setCurrentSlideIndex(index);
  }, []);

  //  Automatic Sliding Logic 
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(slideTimer);
  }, [nextSlide]); 

  // We use this array to display the slides in the order they should appear
  // This makes the vertical transition clean: the new slide always comes after the old one.
  const orderedSlides = [
    slides[currentSlideIndex], 
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* slider container */}
      <div 
        className={`absolute inset-0 transition-transform ease-out duration-[${SLIDE_DURATION}ms]`}
        style={{ transform: `translateY(-${currentSlideIndex * 100}%)` }} 
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={index === 0} 
              className=" object-center  object-cover "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/*  Content Area (Fixed Position)*/}
      <div className="absolute  bottom-20  w-[90%] md:w-fit   left-1/2 -translate-x-1/2 text-center text-white px-1 z-20">
        <h2 className="text-2xl md:text-4xl font-monasans font-semibold tracking-wide">
          {slides[currentSlideIndex].title} 
        </h2>
        <p className="max-w-2xl mt-4 text-sm font-poppins md:text-base">
          {slides[currentSlideIndex].description}
        </p>
      </div>
{/* arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute hidden sm:block cursor-pointer top-1/2 left-4 transform -translate-y-1/2 p-2 text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 cursor-pointer hidden sm:block right-4 transform -translate-y-1/2 p-2 text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* dot navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="p-1 transition-all"
            aria-label={`Go to slide ${index + 1}`}
          >
            <Circle
              size={12}
              className={`transition-all duration-300 cursor-pointer ${
                index === currentSlideIndex
                  ? 'text-white fill-white' 
                  : 'text-white/50 hover:text-white' 
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}







