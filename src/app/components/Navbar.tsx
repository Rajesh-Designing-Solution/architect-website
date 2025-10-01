"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  // State to track mobile menu of open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll is even greater than 0
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const BG_COLOR_CLASS = "bg-[#F5F5DC]" 

  // HEADER CONTAINER CLASSES 
  // Controls top position, overall height, and text color
  // The header itself remains transparent, but its content shifts
  const headerClasses = `
    fixed w-full z-50 font-montserrat 
    transition-all duration-300 ease-in-out
    ${scrolled || mobileMenuOpen ? "top-0 py-3" : "top-8 py-4"} 
    ${scrolled || mobileMenuOpen ? "text-stone-800" : "text-[#dce0df]"} 
    overflow-hidden 
  `

  // This layer holds the background color and slides up
  const bgLayerClasses = `
    absolute inset-0 
    ${BG_COLOR_CLASS} shadow-lg 
    transition-transform duration-500 ease-out 
    ${scrolled || mobileMenuOpen ? "translate-y-0" : "translate-y-full"} 
  `

  //  CONTENT CONTAINER CLASSES
  const contentContainerClasses = "relative mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10"

  // ICON & LINK COLOR CLASSES 
  const searchIconClasses = `
    cursor-pointer rotate-90 transition-colors duration-300
    ${scrolled || mobileMenuOpen ? "text-stone-600" : "text-white"}
  `

  const linkClasses = `
    transition-colors duration-300
    ${scrolled ? "hover:text-stone-900" : "hover:text-white"}
  `

  return (
    <header className={headerClasses}>
      {/*  Background Layer (Slides Up on Scroll) */}
      <div className={bgLayerClasses} />

      {/*  Actual Navigation Content */}
      <div className={contentContainerClasses}>
        <h1 className="text-lg font-monasans font-semibold">NORM ARCHITECTS</h1>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-8 lg:gap-x-10 font-poppins text-sm">
            <li>
              <Link href="/" className={linkClasses}>
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses}>
                Design
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses}>
                Creative
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses}>
                Videos
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses}>
                Studio
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses}>
                Press
              </Link>
            </li>
          </ul>
        </nav>

        {/*  mobile toggle + search */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${scrolled || mobileMenuOpen ? "text-stone-700 hover:text-stone-900 focus-visible:ring-stone-400" : "text-white hover:text-white/80 focus-visible:ring-white/40"}`}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
          </button>

          <Search className={searchIconClasses} />
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <div
        id="mobile-nav"
        className={`
          md:hidden fixed inset-0 z-[60]
          ${BG_COLOR_CLASS}
          transition-opacity duration-300 ease-out
          ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <nav role="navigation" aria-label="Main" className="h-full overflow-y-auto">
          <ul className="flex h-full flex-col gap-6 px-6 py-10 font-poppins text-xl">
            <li>
              <Link href="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                Design
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                Creative
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                Videos
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                Studio
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClasses} onClick={() => setMobileMenuOpen(false)}>
                Press
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
