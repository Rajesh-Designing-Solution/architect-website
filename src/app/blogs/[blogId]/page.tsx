"use client";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Params } from "next/dist/server/request/params";
import Image from "next/image";

export default function BlogId({ params }: { params: Params }) {
  const { blogId } = params;
  console.log(blogId);
  const id = +blogId! > 9 ? 0 : +blogId!;
  const moreBlogs = [id + 1, id + 2, id + 3];
  return (
    <>
      <Navbar />
      <div className="bg-color">
        <div className="w-full flex flex-col md:flex-row">
          <div id="left" className="w-full md:w-1/2 h-screen">
            <img src="/blogs/blogId1.0.jfif" alt="" className="w-full h-full" />
          </div>
          <div
            id="right"
            className="w-full md:w-1/2 pt-10 md:pt-28 pl-10 flex flex-col justify-between"
          >
            <div>
              <h1 className="text-5xl text-zinc-800 font-semibold ">
                Urban Visions
              </h1>

              <h3 className="w-full md:w-[70%] text-2xl my-8 text-zinc-700">
                This project offers a contemporary reading of a modernist
                apartment, in a sober, bright and controlled intervention.
              </h3>
            </div>

            <ul className="text-lg text-zinc-800 mb-10">
              <div className="flex gap-x-10 mb-4">
                <li>
                  <span className="text-zinc-400 mr-1.5">Location</span> Paris 7
                </li>
                <li>
                  <span className="text-zinc-400 mr-1.5">Surface</span> 125m²
                </li>
              </div>
              <li>
                <span className="text-zinc-400 mr-1.5">Type</span> Apartment
              </li>
            </ul>
          </div>
        </div>

        <div className="md:hidden border-t border-zinc-400 w-[60%] mx-auto"></div>

        <div className="w-[80%] md:w-[50%] mx-auto py-10 md:py-28 flex flex-col space-y-4 text-lg text-zinc-600">
          <h4>
            A stone&apos;s throw from the Eiffel Tower, in a residence from the
            1960s, this project is fully in line with the subjects that the
            agency likes: promoting the existing, dealing with its qualities as
            well as its constraints, and revealing the potential of a place
            sometimes forgotten.
          </h4>
          <h4>
            Located a stone&apos;s throw from the Eiffel Tower, in a residence
            from the 1960s, this project illustrates a type of intervention dear
            to the agency: working with what already exists, revealing its
            qualities, while dealing with the constructive constraints of the
            &apos;era.{" "}
          </h4>
          <h4>
            The apartment has undeniable advantages –large bay windows, mosaic
            balconies – but also a delicate configuration: great depth and
            mono-orientation which leave certain spaces in the shadows.{" "}
          </h4>
          <h4>
            The intervention aims to optimize natural light and the fluidity of
            circulation. The plan was largely opened and restructured. The newly
            created partitions are topped with transom claustras. These devices,
            present on all interior partitions, allow light to penetrate to the
            back of the apartment, while defining the different uses.{" "}
          </h4>
          <h4>
            The water and storage spaces are relegated to the second day,
            freeing up views and access to light for the living rooms. This
            spatial bias prioritizes functions while responding to the
            specificities of the place.{" "}
          </h4>
          <h4>
            A dialogue takes place between materials: anodized aluminum, chosen
            for its ability to reflect light diffusely, contrasts with the
            generous presence of wood, providing comfort and domesticity. Plays
            of textures highlight the architectural elements –bases, frames –
            without ever overloading the whole.
          </h4>
        </div>

        <div className="flex items-center justify-center max-w-4xl mx-auto gap-6 h-48 md:h-96">
          <div className="relative h-full w-full">
            <Image
              src="/blogs/blogId1.1.jfif"
              alt="blogIdImg"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/blogs/blogId1.2.jfif"
              alt="blogIdImg"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8 lg:px-0 py-24">
          <h3 className="text-lg md:text-2xl text-zinc-800">
            The accommodation has a distinctive shape with a rounded glass
            facade out against the park. The concrete walls are core insulated
            and can thus stand as they are. The idea was to create contrasted
            surfaces, either glazed or closed parties, to create balance and a
            more calm expression. Due to the large glass surfaces that reflect
            the surroundings, the residence melts nicely into the lush
            surroundings.
          </h3>
        </div>

        <div className="max-w-5xl mx-auto pb-24 px-8 lg:px-0">
          <h3 className="text-3xl text-zinc-800 mb-4">More Blogs</h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-20">
            {moreBlogs.map((image) => (
              <BlogCard
                key={image}
                image={`/blogs/blog${image}.jfif`}
                index={image}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
