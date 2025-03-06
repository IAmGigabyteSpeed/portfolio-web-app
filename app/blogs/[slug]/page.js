"use client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Nav from "@/app/components/nav";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const fetchBlog = async (slug) => {
  const res = await fetch(`/api/blogs/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

const Blog = () => {
  const { slug } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlog(slug),
    enabled: !!slug,
  });

  return (
    <>
      <Nav />
      <div className=" min-h-screen">
        {isLoading ? (
          <p className="text-center w-screen">Loading...</p>
        ) : error ? (
          <p className="text-cenver w-screen">Error: {error.message}</p>
        ) : (
          <section className="mx-auto w-11/12 md:w-8/12 pt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins place-items-center">
              <Link
                href="/blog"
                className="text-[#CBA35C] hover:text-[#927542]"
              >
                <ArrowBackIosIcon sx={{ cursor: "pointer" }} />
              </Link>
              <p className="">{blog.date.toString()}</p>
            </div>
            <article
              className="article lg:px-20 text-justify"
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            ></article>
          </section>
        )}
      </div>
    </>
  );
};

export default Blog;
