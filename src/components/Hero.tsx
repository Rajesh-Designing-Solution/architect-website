"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
    id: 10,
    src: "/images/15.jpg",
    title: "Ambient Lighting Design",
    description:
      "We at VER-A, believe lighting should be subtle, not sharp. Our projects incorporate layered lighting schemes—a mix of ambient, task, and accent lighting—to sculpt the space and enhance material textures after sunset.",
  },
  {
    id: 1,
    src: "/images/07.jpg",
    title: "Audo House",
    description:
      "In Copenhagen’s evolving Nordhavn district, Audo House redefines how we live, work, and connect. The historic 1918 building has been carefully transformed into a fluid and welcoming destination – uniting café, restaurant, concept shop, event spaces and exclusive residences under one roof.",
  },
  {
    id: 2,
    src: "/images/02.jpg",
    title: "Design Philosophy",
    description:
      "We strive for architectural balance, where the visual and functional aspects of a design are equally weighted. Our focus is on materials, craftsmanship, and timeless aesthetics, creating spaces that foster well-being.",
  },
  {
    id: 3,
    src: "/images/03.jpg",
    title: "Minimalist Interiors",
    description:
      "The interiors are characterized by a refined use of natural materials, soft color palettes, and a minimalist approach to design. Every element is chosen for its quality and ability to create a sense of calm and openness.",
  },
  {
    id: 4,
    src: "/images/09.jpg",
    title: "Norm Architects",
    description:
      'Norm Architects is a multidisciplinary design studio based in Copenhagen, working in the fields of architecture, interior design, industrial design, and artistic direction. Our work is guided by the philosophy of "soft minimalism."',
  },
  {
    id: 5,
    src: "/images/05.jpg",
    title: "The Pavilion Residence",
    description:
      "A serene residential project in Stockholm, inspired by the surrounding landscape. The design focuses on seamless transitions between indoor and outdoor spaces, utilizing large glass facades and locally sourced stone.",
  },
  {
    id: 6,
    src: "/images/06.jpg",
    title: "Urban Sanctuary",
    description:
      "A concept for a high-rise apartment complex that prioritizes natural light and communal green spaces. The facade incorporates vertical gardens to improve air quality and provide visual relief in a dense city environment.",
  },
  {
    id: 7,
    src: "/images/12.jpg",
    title: "The Nordic Kitchen",
    description:
      "A celebration of simplicity and functionality. This kitchen design features bespoke light oak cabinetry, honed marble countertops, and integrated appliances to maintain a clean, uncluttered aesthetic.",
  },
  {
    id: 8,
    src: "/images/13.jpg",
    title: "Tactile Bathrooms",
    description:
      "Focusing on a spa-like experience, this design uses large format micro-cement and textured stone. The absence of harsh lines and the use of indirect lighting promote a sense of relaxation and tranquility.",
  },
  {
    id: 9,
    src: "/images/14.jpg",
    title: "Co-working Studio",
    description:
      "An open-plan office designed for creative collaboration. Flexible furniture arrangements and acoustic panels wrapped in wool felt ensure both dynamism and focus within a large, airy industrial space.",
  },
  {
    id: 11,
    src: "/images/16.jpg",
    title: "Sustainable Materiality",
    description:
      "Our commitment to sustainability is reflected in our material choices: reclaimed wood, recycled metals, and low-VOC finishes. We favor materials that age gracefully and tell a story over time.",
  },
  {
    id: 12,
    src: "/images/17.jpg",
    title: "Attention to Detail",
    description:
      "True luxury lies in the unseen details. From perfectly aligned grain on wood panels to custom-designed door handles and concealed storage solutions, every joint and transition is meticulously considered.",
  },
];

const AUTO_SLIDE_INTERVAL = 7000;
// const SLIDE_DURATION = 1000

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Function to move to the next slide, handles wrap-around
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  // Function to move to the previous slide, handles wrap-around
  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, []);

  // Function to go to a specific slide (from dots)
  // const goToSlide = useCallback((index: number) => {
  //   setCurrentSlideIndex(index)
  // }, [])

  // Automatic Sliding Logic
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(slideTimer);
  }, [nextSlide]);

  // When slide changes, reset image loaded state
  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentSlideIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* slider container */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[currentSlideIndex].id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={slides[currentSlideIndex].src || "/placeholder.svg"}
              alt={slides[currentSlideIndex].title}
              fill
              priority
              className="object-center object-cover select-none pointer-events-none"
              onLoadingComplete={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-black/20" />
            <AnimatePresence>
              {!isImageLoaded && (
                <motion.div
                  key="img-loader"
                  className="absolute inset-0 bg-neutral-900"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/*  Content Area (Fixed Position)*/}
      <AnimatePresence mode="wait">
        {isImageLoaded && (
          <motion.div
            key={`text-${slides[currentSlideIndex].id}`}
            className="absolute bottom-24 w-[95%] md:w-fit left-1/2 -translate-x-1/2 text-center text-white px-1 z-20"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.h2
              className="text-2xl font-faktnormal tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {slides[currentSlideIndex].title}
            </motion.h2>
            <motion.p
              className=" mt-2 font-thinn leading-4"
              initial={{ opacity: 0, y: 11 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            >
              {slides[currentSlideIndex].description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* arrow navigation */}
      <button
        onClick={prevSlide}
        className="absolute hidden sm:block cursor-pointer top-1/2 left-4 transform -translate-y-1/2 p-2 text-white hover:bg-black/40 rounded-full transition-all duration-200 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 cursor-pointer hidden sm:block right-4 transform -translate-y-1/2 p-2 text-white hover:bg-black/40 rounded-full transition-all duration-200 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* dot navigation */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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
                  ? "text-white fill-white"
                  : "text-white/50 hover:text-white"
              }`}
            />
          </button>
        ))}
      </div> */}

      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70 focus:outline-none"
        aria-label="Scroll down"
      >
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="text-xs tracking-wide uppercase"
        >
          Scroll
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
