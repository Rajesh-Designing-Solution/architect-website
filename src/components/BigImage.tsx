import Image from "next/image";

function BigImage() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/images/17.jpg"}
        alt="Full-width-img"
        layout="fill"
        quality={100}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
      <div className="z-99 text-center flex flex-col">
        <h3 className="text-xl font-bold text-[#ede8d5] mb-4">Sjöparken Retreat</h3>
        <div>
          <p className="font-poppins  text-[#fafaf9] text-sm">
          Escape to Sjöparken, a serene haven where understated luxury meets the
          tranquility of nature. Inspired by Nordic minimalism, Japanese
          aesthetics, and tropical resort vibes, this architectural masterpiece
          blends diverse influences into a seamless, rejuvenating experience as
          of 01:03 PM IST on Wednesday, October 01, 2025.
        </p>
        <p>
          - Best in Sjöparken
        </p>
        </div>
      </div>
    </div>
  );
}

export default BigImage;
