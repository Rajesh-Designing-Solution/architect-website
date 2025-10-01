import BlogCard from "@/components/BlogCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="bg-color py-30 px-8">
      <div className="md:w-[60%] mx-auto">
        <h1 className="text-3xl sm:text-5xl text-center text-zinc-800">
          Designing Tomorrow: Architecture & Innovation
        </h1>
        <h4 className="w-[80%] mx-auto mt-4 text-center text-sm text-zinc-600">
          Explore how vision, form, and technology merge to create spaces that
          inspire — with expert insights, projects, and ideas.
        </h4>
      </div>

      <div className="mt-20 ">
        <div id="images" className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {array.map((item) => (
            <BlogCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
