"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const expertiseData = [
  {
    id: "01",
    title: "Master Planning",
    points: [
      "• Institutional",
      "• Multi storied Housing & Villas",
      "• Hospitality",
      "• Infrastructure",
    ],
  },
  {
    id: "02",
    title: "Architectural Design",
    points: [
      "• Residential",
      "• Educational",
      "• Religious",
      "• Commercial",
      "• Hospitals",
      "• Industrial",
    ],
  },
  {
    id: "03",
    title: "Interior Design",
    points: [
      "• Corporate Offices",
      "• Furniture Design",
      "• Institutional",
      "• High end Villas",
    ],
  },
  {
    id: "04",
    title: "Design & Build",
    points: ["• Corporate Offices", "• Luxury Houses", "• Hospitality"],
  },
];

const Expertise = () => {
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
            Our Expertise
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
            Explore our wide range of architectural services, designed to
            inspire creativity and elevate every space.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
          {expertiseData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="relative flex items-center ">
                <h1 className="text-7xl text-zinc-200/70 tracking-widest text-center font-thinn absolute w-full -top-7 z-0">
                  {item.id}
                </h1>
                <h3
                  className="text-lg text-zinc-800 uppercase z-10 tracking-wide font-semibold"
                  style={{ wordSpacing: "6px" }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="mt-5 space-x-2 text-zinc-600 text-sm max-w-68 text-center">
                {item.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
