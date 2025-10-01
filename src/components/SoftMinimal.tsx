import Image from "next/image";

function SoftMinimal() {
  return (
    <section className="bg-color">
    <div className="relative  w-[95vw] mx-auto bg-color  h-[600px]  lg:h-[90vh]">
      <Image
        src={"/images/softMinimalBook.jpg"}
        alt="Full-width landscape"
        layout="fill"
        objectFit=" object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
      <div className="absolute w-[90%] md:w-[600px]  bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h3 className=" font-extrabold text-[#ede8d5] mb-4">Soft Minimal</h3>
        <p className=" md:font-semibold text  text-[#fafaf9] text-sm">
        Through insightful essays and tactile imagery collected in Soft Minimal,
         we share the principles that underpin a human-centic design philosophy honed over 15 years.
        </p>
      </div>
    </div>
    </section>
  );
}

export default SoftMinimal;
