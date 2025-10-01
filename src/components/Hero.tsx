"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    src: "/images/interior1.jpg",
    title: "Audo House",
    description:
      "In Copenhagen’s evolving Nordhavn district, Audo House redefines how we live, work, and connect. The historic 1918 building has been carefully transformed into a fluid and welcoming destination – uniting café, restaurant, concept shop, event spaces and exclusive residences under one roof.",
  },
  {
    id: 2,
    src: "/images/interior2.jpg",
    title: "Design Philosophy",
    description:
      "We strive for architectural balance, where the visual and functional aspects of a design are equally weighted. Our focus is on materials, craftsmanship, and timeless aesthetics, creating spaces that foster well-being.",
  },
  {
    id: 3,
    src: "/images/interior3.jpg",
    title: "Minimalist Interiors",
    description:
      "The interiors are characterized by a refined use of natural materials, soft color palettes, and a minimalist approach to design. Every element is chosen for its quality and ability to create a sense of calm and openness.",
  },
  {
    id: 4,
    src: "/images/interior5.jpg",
    title: "Norm Architects",
    description:
      'Norm Architects is a multidisciplinary design studio based in Copenhagen, working in the fields of architecture, interior design, industrial design, and artistic direction. Our work is guided by the philosophy of "soft minimalism."',
  },
  {
    id: 5,
    src: "/images/interior5.jpg",
    title: "Norm Architects",
    description:
      'Norm Architects is a multidisciplinary design studio based in Copenhagen, working in the fields of architecture, interior design, industrial design, and artistic direction. Our work is guided by the philosophy of "soft minimalism."',
  },
]

const AUTO_SLIDE_INTERVAL = 7000
// const SLIDE_DURATION = 1000

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // Function to move to the next slide, handles wrap-around
  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [])

  // Function to move to the previous slide, handles wrap-around
  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [])

  // Function to go to a specific slide (from dots)
  // const goToSlide = useCallback((index: number) => {
  //   setCurrentSlideIndex(index)
  // }, [])

  // Automatic Sliding Logic
  useEffect(() => {
    const slideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL)
    return () => clearInterval(slideTimer)
  }, [nextSlide])

  // When slide changes, reset image loaded state
  useEffect(() => {
    setIsImageLoaded(false)
  }, [currentSlideIndex])

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
            className="absolute bottom-24 w-[90%] md:w-fit left-1/2 -translate-x-1/2 text-center text-white px-1 z-20"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.h2
              className="text-xl font-faktnormal tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {slides[currentSlideIndex].title}
            </motion.h2>
            <motion.p
              className="max-w-3xl mt-2 text-sm font-thinn"
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
  )
}
