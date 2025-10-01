import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
  return (
    <>
      <section className="w-full flex items-center justify-center py-20 px-4 bg-color">
        <div className="rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl max-w-7xl w-full">
          {/* Left Side - Dark Panel */}
          <div className="order-2 bg-black text-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
            <div>
              <p className="text-white/80 text-lg md:text-xl font-light mb-12">
                Your vision, realized.
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Let&apos;s get
                <br />
                started.
              </h1>
            </div>

            <div className="mt-10">
              <button className="inline-flex items-center gap-2 text-base md:text-lg px-8 py-4 bg-white text-black rounded-full cursor-pointer">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-full">
            <Image
              src="https://collective-office.transforms.svdcdn.com/production/images/projects/hallstar-darien/hallstar-2.jpg?w=1440&h=900&q=82&fm=webp&fit=crop&dm=1737063476&s=46e33860653b4b7bb5b89c485d9017d4"
              alt="Team gathering"
              fill
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
