import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <Link href={"/blogs/1"} passHref>
      <div className="w-full h-96">
        <div className="w-full h-[90%] relative">
          <Image
            src="/blogs/blog1.jfif"
            alt="blogImg"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
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
  );
};

export default BlogCard;
