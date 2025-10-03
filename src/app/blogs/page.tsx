import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Blogs = () => {
  const images = [
    "/blogs/blog1.jfif",
    "/blogs/blog2.jfif",
    "/blogs/blog3.jfif",
    "/blogs/blog4.jfif",
    "/blogs/blog5.jfif",
    "/blogs/blog6.jfif",
    "/blogs/blog7.jfif",
    "/blogs/blog8.jfif",
    "/blogs/blog9.jfif",
    "/blogs/blog10.jfif",
    "/blogs/blog11.jfif",
    "/blogs/blog12.jfif",
  ];

  return (
    <>
      <Navbar />
      <div className="bg-color py-30 px-8 max-w-[1500px] mx-auto">
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
          <div
            id="images"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16"
          >
            {images.map((image, idx) => (
              <BlogCard key={image} image={image} index={idx + 1} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
