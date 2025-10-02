"use client";

function InteriorDesignVideo() {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen Background Video */}
      <video
        src="/videos/03.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/50 bg-opacity-40"
        style={{ zIndex: 1 }}
      ></div>

      {/* Centered Text Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center"
        style={{ zIndex: 2 }}
      >
        <h3 className="text-2xl font-bold text-[#ede8d5] mb-4">Hēathërhill</h3>
        <div className="mt-8 flex flex-col items-center">
          <p className="font-poppins text-[#fafaf9] text-sm max-w-2xl">
            Nestled amidst scenic hills, facing the beach and Kattegat,
            Heatherhill Beach House is a harmonious blend of Danish
            architectural traditions and contemporary innovation. In every
            facet, this exceptional holiday home is a testament to the beauty of
            simplicity and the elegance of nature, creating a living
            space that is truly one with the world outside.
          </p>
          <p className="text-sm text-white/70 mt-2">
            &quot;We&apos;re Best in Heatherhill&quot;
          </p>
          <p className="text-[#ede8d5] text-xs mt-2">VER-A</p>
          <div className="h-1 w-1 rounded-full bg-white mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default InteriorDesignVideo;
