import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogCard = ({ image, index }: { image: string; index: number }) => {
  return (
    <Link href={`/blogs/${index}`} passHref>
      <div className="w-full h-80 group">
        <div className="w-full h-[90%] overflow-hidden">
          <img
            src={image}
            alt="blogImg"
            className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
        </div>
        <div className="w-full flex justify-between gap-5 px-1 mt-2 text-zinc-600 text-sm">
          <p>2025</p>
          <h4 className="w-[85%]">
            <p className="w-[70%]">
              Insights into sustainable & modern urban planning
            </p>
          </h4>
          <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
