import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-color py-40 max-w-[1500px] mx-auto">
        {/* <div className="md:w-[60%] mx-auto">
          <h1 className="text-3xl sm:text-5xl text-center text-zinc-800">
            Your Vision, Our Expertise
          </h1>
          <h4 className="w-[80%] mx-auto mt-4 text-center text-sm text-zinc-600">
            Explore Our Range of Architectural Services Designed to Inspire.
          </h4>
        </div> */}

        <div className="mt-10">
          <div className="lg:h-screen w-full flex flex-col lg:flex-row ">
            <div
              id="left"
              className="w-full order-2 lg:order-1 lg:w-1/2 p-10 sm:px-28 sm:pt-14"
            >
              <h1 className="text-3xl xl:text-5xl text-zinc-800 font-pp font-semibold">
                Custom Design
              </h1>
              <ul className="flex gap-x-5 gap-y-2 flex-wrap mt-6 mb-4 text-sm text-zinc-800">
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Conceptual Design</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Space Planning</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Interior Design</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Sustainability Consulting</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Project Management</span>
                </li>
              </ul>
              <div
                id="content"
                className="border-y border-zinc-300 py-4 space-y-4 text-sm xl:text-base text-zinc-600 "
              >
                <p>
                  Architecture is not just about buildings; it’s about creating
                  environments that foster life, innovation, and human
                  connection. This offer is for those seeking more than just a
                  space, but a design that tells a story, balances functionality
                  with beauty, and is built to last.
                </p>
                <p>
                  Each project begins with a deep understanding of the client’s
                  needs, vision, and the unique context of the space. From
                  there, a clear architectural direction is established,
                  ensuring that every detail—from layout to materials—creates a
                  cohesive and thoughtful space
                </p>
                <p>
                  It is not a fixed system, but an ecosystem designed to evolve.
                </p>
              </div>
              <h4 className="mt-2 italic">4 to 8 weeks</h4>
              <h4 className="mb-2 italic">From ₹30,000</h4>
              <button className="mt-6 uppercase cursor-pointer text-sm underline underline-offset-8 hover:text-zinc-400">
                THIS SERVICE INTERESTS ME
              </button>
            </div>

            <div
              id="right"
              className="w-full order-1 lg:order-2 lg:w-1/2 h-screen lg:h-full"
            >
              <div className="w-full h-full">
                <img
                  src="/services/service1.png"
                  alt="servicesImg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="lg:h-screen w-full flex flex-col lg:flex-row ">
            <div
              id="left"
              className="w-full order-2 lg:order-1 lg:w-1/2 p-10 sm:px-28 sm:pt-14"
            >
              <h1 className="text-3xl xl:text-5xl text-zinc-800 font-pp font-semibold">
                Space Planning
              </h1>
              <ul className="flex gap-x-5 gap-y-2 flex-wrap mt-6 mb-4 text-sm text-zinc-800">
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Conceptual Design</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Space Planning</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Interior Design</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Sustainability Consulting</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Project Management</span>
                </li>
              </ul>
              <div
                id="content"
                className="border-y border-zinc-300 py-4 space-y-4 text-sm xl:text-base text-zinc-600 "
              >
                <p>
                  Architecture is not just about buildings; it’s about creating
                  environments that foster life, innovation, and human
                  connection. This offer is for those seeking more than just a
                  space, but a design that tells a story, balances functionality
                  with beauty, and is built to last.
                </p>
                <p>
                  Each project begins with a deep understanding of the client’s
                  needs, vision, and the unique context of the space. From
                  there, a clear architectural direction is established,
                  ensuring that every detail—from layout to materials—creates a
                  cohesive and thoughtful space
                </p>
                <p>
                  It is not a fixed system, but an ecosystem designed to evolve.
                </p>
              </div>
              <h4 className="mt-2 italic">4 to 8 weeks</h4>
              <h4 className="mb-2 italic">From ₹30,000</h4>
              <button className="mt-6 uppercase cursor-pointer text-sm underline underline-offset-8 hover:text-zinc-400">
                THIS SERVICE INTERESTS ME
              </button>
            </div>

            <div
              id="right"
              className="w-full order-1 lg:order-2 lg:w-1/2 h-screen lg:h-full"
            >
              <div className="w-full h-full">
                <img
                  src="/services/service2.png"
                  alt="servicesImg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="lg:h-screen w-full flex flex-col lg:flex-row ">
            <div
              id="left"
              className="w-full order-2 lg:order-1 lg:w-1/2 p-10 sm:px-28 sm:pt-14"
            >
              <h1 className="text-3xl xl:text-5xl text-zinc-800 font-pp font-semibold">
                Sustainable Design
              </h1>
              <ul className="flex gap-x-5 gap-y-2 flex-wrap mt-6 mb-4 text-sm text-zinc-800">
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Conceptual Design</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Space Planning</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Interior Design</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Sustainability Consulting</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-sm">•</span>
                  <span>Project Management</span>
                </li>
              </ul>
              <div
                id="content"
                className="border-y border-zinc-300 py-4 space-y-4 text-sm xl:text-base text-zinc-600 "
              >
                <p>
                  Architecture is not just about buildings; it’s about creating
                  environments that foster life, innovation, and human
                  connection. This offer is for those seeking more than just a
                  space, but a design that tells a story, balances functionality
                  with beauty, and is built to last.
                </p>
                <p>
                  Each project begins with a deep understanding of the client’s
                  needs, vision, and the unique context of the space. From
                  there, a clear architectural direction is established,
                  ensuring that every detail—from layout to materials—creates a
                  cohesive and thoughtful space
                </p>
                <p>
                  It is not a fixed system, but an ecosystem designed to evolve.
                </p>
              </div>
              <h4 className="mt-2 italic">4 to 8 weeks</h4>
              <h4 className="mb-2 italic">From ₹30,000</h4>
              <button className="mt-6 uppercase cursor-pointer text-sm underline underline-offset-8 hover:text-zinc-400">
                THIS SERVICE INTERESTS ME
              </button>
            </div>

            <div
              id="right"
              className="w-full order-1 lg:order-2 lg:w-1/2 h-screen lg:h-full"
            >
              <div className="w-full h-full">
                <img
                  src="/services/service3.png"
                  alt="servicesImg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
