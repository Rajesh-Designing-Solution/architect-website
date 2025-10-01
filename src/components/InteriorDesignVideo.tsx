"use client";

function InteriorDesignVideo() {
  return (
    <section className="bg-color ">
      <div className="relative w-[95vw]  mx-auto bg-color h-[600px] lg:h-[90vh] overflow-hidden ">
        {/* Background Video */}
        <video
          src="/videos/interiorDesign.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute  inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>

        {/* Text Content */}
        <div className="absolute w-[90%] md:w-[800px]
         bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
          <h3 className=" mt-5 text-[#ede8d5] tracking-widest uppercase font-monasans font-semibold  mb-4">
            Heatherhill
          </h3>
          <p className="md:font-semibold text  text-[#fafaf9] text-sm">
            Nestled amidst scenic hills, facing the beach and Kattegat,
            Heatherhill Beach House is a harmonious blend of Danish
            architectural traditions and contemporary innovation. In every
            facet, this exceptional holiday home is a testament to the beauty of
            simplicity and the elegance of nature. It is a home that not only
            respects the environment but also invites it in, creating a living
            space that is truly one with the world outside.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InteriorDesignVideo;
