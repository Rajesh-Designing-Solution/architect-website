"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [vh, setVh] = useState(500);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 6], [1, 0.85]);

  const hideEnd = vh * 0.3;

  const groupY = useTransform(scrollY, [0, hideEnd], [0, -80], { clamp: true });
  const groupOpacity = useTransform(scrollY, [0, hideEnd], [1, 0], {
    clamp: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight || 600);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const getNavLinkClass = () => {
    const colorClasses = scrolled
      ? "text-white/70 hover:text-foreground"
      : "text-white/90 hover:text-white";

    const underlineClasses = `
      relative inline-block 
      after:content-[''] after:absolute after:bottom-0 after:left-0 
      after:h-0.5 after:w-full after:bg-current 
      after:transition-transform after:duration-300
      
      after:origin-bottom-right after:scale-x-0
      
      hover:after:scale-x-100 hover:after:origin-bottom-left
      
      whitespace-nowrap
    `;

    return `${colorClasses} ${underlineClasses}`.replace(/\s+/g, " ").trim();
  };

  const navLinkClass = getNavLinkClass();

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={mounted ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 p-8 transition-colors duration-300 ${
        scrolled ? "" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <motion.h1
          className={`text-3xl md:text-4xl font-roboto font-pp font-semibold tracking-wide ${
            scrolled ? "text-white/70" : "text-white"
          }`}
          style={{ y: groupY, opacity: groupOpacity }}
        >
          VÉR Architecture
        </motion.h1>
        {/* Desktop nav */}
        <motion.nav
          className="hidden md:flex items-center gap-8 uppercase text-sm font-medium font-faktmedium ml-16"
          style={{ y: groupY, opacity: groupOpacity }}
        >
          <a className={navLinkClass} href="#">
            Works
          </a>
          <a className={navLinkClass} href="#">
            Creative
          </a>
          <a className={navLinkClass} href="#">
            Process
          </a>
          <Link className={navLinkClass} href="/blogs">
            Blogs
          </Link>
        </motion.nav>

        <div className="flex items-center gap-3">
          <button
            className={`hidden md:inline-flex cursor-pointer px-6 py-3 rounded-full font-medium group items-center gap-4 transition-colors ${
              scrolled ? "bg-black/90 text-white" : "bg-black text-white"
            }`}
            aria-label="Get in touch"
          >
            <div className="relative overflow-hidden">
              <p className="transform transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get in touch
              </p>
              <p className="absolute left-0 top-full transform transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get in touch
              </p>
            </div>
            <div
              className={`w-2 h-2 rounded-full border transition-all duration-300 ease-in-out group-hover:scale-75 ${
                scrolled
                  ? "border-background bg-white"
                  : "border-white group-hover:bg-white"
              }`}
            ></div>
          </button>

          {/* Mobile menu button */}
          <button
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border ${
              scrolled ? "text-white/70" : "text-white"
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Menu</span>
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 right-0 top-1 block h-[2px] bg-current transition-transform ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-2.5 block h-[2px] bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-4 block h-[2px] bg-current transition-transform ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <motion.div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ scale }}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
        <motion.nav
          className={`absolute top-0 right-0 h-full w-72 bg-[#f8f6e8] shadow-xl p-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ scale }}
        >
          <ul className="mt-14 grid gap-4 uppercase font-pp text-[#1a1a1a]">
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Works
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Creative
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Process
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMenuOpen(false)}>
                Blogs
              </a>
            </li>
          </ul>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
