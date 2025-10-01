import Image from "next/image";

function BigImage() {
  return (
    <div className="relative w-full h-[600px]  lg:h-[90vh]">
      <Image
        src={"/bigImage/bigimg.jpg"}
        alt="Full-width landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
      <div className="absolute w-[90%] md:w-[600px]  bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className=" font-extrabold text-[#ede8d5] mb-4">Sjöparken Retreat</h3>
        <p className=" md:font-semibold text  text-[#fafaf9] text-sm">
          Escape to Sjöparken, a serene haven where understated luxury meets the
          tranquility of nature. Inspired by Nordic minimalism, Japanese
          aesthetics, and tropical resort vibes, this architectural masterpiece
          blends diverse influences into a seamless, rejuvenating experience as
          of 01:03 PM IST on Wednesday, October 01, 2025.
        </p>
      </div>
    </div>
  );
}

export default BigImage;
