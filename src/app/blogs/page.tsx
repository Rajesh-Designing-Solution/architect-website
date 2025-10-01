import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="bg-color py-30 px-8">
      <div className="w-[60%] mx-auto">
        <h1 className="text-5xl text-center text-zinc-800">
          Designing Tomorrow: Architecture & Innovation
        </h1>
        <h4 className="w-[80%] mx-auto mt-4 text-center text-sm text-zinc-600">
          Explore how vision, form, and technology merge to create spaces that
          inspire — with expert insights, projects, and ideas.
        </h4>
      </div>

      <div className="mt-20 ">
        <div id="images" className="w-full grid grid-cols-3 gap-x-6 gap-y-16">
          {array.map((item) => (
            <Link href={"/blogs/1"}>
              <div className="w-full">
                <div className="w-full h-[90%]">
                  <img
                    src="/blogs/blog1.jfif"
                    alt="blogImg"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full flex justify-between gap-5 px-1 mt-2 text-zinc-600 text-sm">
                  <p>2025</p>
                  <h4 className="w-[85%]">
                    <p className="w-[70%]">
                      Insights into sustainable & modern urban planning
                    </p>
                  </h4>
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
