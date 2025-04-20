"use client";
import Link from "next/link";
import Nav from "../components/nav";
import { Card, CardContent } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect, useState } from "react";
import useDebounce from "@/libs/useDebounce";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Footer from "../components/footer";

const fetchBlogs = async ({ pageParam = 1, search, category }) => {
  const res = await fetch(
    `/api/blog?page=${pageParam}&limit=5&search=${search}&category=${category}`
  );
  if (!res.ok) throw new Error("Failed to fetch blogs!");
  const data = await res.json();
  return data;
};
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const debouncedSearch = useDebounce(search, 1000);
  const debouncedCategory = useDebounce(category, 1000);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data.categories);
    }

    fetchCategories();
  }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["blogs", debouncedSearch, debouncedCategory],
    queryFn: ({ pageParam }) =>
      fetchBlogs({
        pageParam,
        search: debouncedSearch,
        category: debouncedCategory,
      }),
    getNextPageParam: (lastPage) => lastPage.nextPage ?? null,
  });

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <div>
      <Nav />
      <div className="pt-12 min-h-screen">
        <div className="my-4 flex flex-row items-center justify-end me-5 md:mx-20 lg:px-20">
          <input
            type="text"
            placeholder="Search Blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-1/2 lg:w-1/4 border rounded text-black"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded ml-2 w-1/4 text-black"
          >
            <option>All</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        {isLoading ? (
          <p className="text-center text-4xl">
            Loading Blogs<span className="showseqdots"></span>
          </p>
        ) : error ? (
          <div className="text-center">
            <DangerousIcon className="rotating" sx={{ fontSize: 256 }} />
            <p className="text-2xl">Error loading Blogs: {error.message}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 mx-5 md:mx-20 mt-2 lg:px-20">
            {data?.pages.map((page) =>
              page.blogs.map((blog) => (
                <Card
                  className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl animate-[slideRightFadeIn_0.7s_ease-in-out]"
                  key={blog.id}
                >
                  <CardContent className="rounded-xl">
                    <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
                      <div className="md:me-5">
                        <Link
                          className="cursor-pointer"
                          href={`/blogs/${blog.id}`}
                          passHref
                        >
                          <img
                            alt="Cover Image"
                            src={blog.cover || "/default-cover.jpg"}
                            className="rounded w-[250px] h-[225px] min-w-[250px] min-h-[225px] object-cover"
                          />
                        </Link>
                      </div>
                      <div>
                        <div>
                          <div className="flex flex-row">
                            <h2
                              className="min-w-20 text-center font-semibold cursor-pointer bg-[var(--accent)] text-[var(--background)] rounded-full py-1 px-2 hover:underline"
                              onClick={() => setCategory(blog.category)}
                            >
                              {blog.category}
                            </h2>
                          </div>
                          <Link
                            className="cursor-pointer"
                            href={`/blogs/${blog.id}`}
                            passHref
                          >
                            <h2 className="text-2xl font-semibold text-[var(--accent)] hover:underline">
                              {blog.title}
                            </h2>
                          </Link>
                          <p className="text-gray-500 text-md text-center md:text-start">
                            {blog.date}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm text-center md:text-start">
                            {blog.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        <div
          ref={observerRef}
          className="h-10 flex justify-center items-center"
        >
          {isFetchingNextPage && (
            <p className="text-xl">
              Loading more Blogs<span className="showseqdots"></span>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
