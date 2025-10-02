import Image from "next/image";

function BigImage() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/images/17.jpg"}
        alt="Full-width-img"
        fill
        quality={100}
        className="object-cover"
        priority
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-40" style={{ zIndex: 1 }}></div>
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center"
        style={{ zIndex: 2 }}
      >
        <h3 className="text-2xl font-bold text-[#ede8d5] mb-4">Sjöparken Retreat</h3>
        <div className="mt-8 flex flex-col items-center">
          <p className="font-poppins text-[#fafaf9] text-sm max-w-2xl">
            Escape to Sjöparken, a serene haven where understated luxury meets the
            tranquility of nature. Inspired by Nordic minimalism, Japanese
            aesthetics, and tropical resort vibes, this architectural masterpiece
            blends diverse influences into a seamless, rejuvenating experience as
            of 01:03 PM IST on Wednesday, October 01, 2025.
          </p>
          <p className="text-sm text-white/70 mt-2">
            &quot;We&asop;re Best in Sjöparken&quot;
          </p>
          <p className="text-[#ede8d5] text-xs mt-2">VER-A</p>
          <div className="h-1 w-1 rounded-full bg-white mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default BigImage;
