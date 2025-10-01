import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
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
  );
};

export default BlogCard;
