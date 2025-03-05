"use client";
import Link from "next/link";
import Nav from "../components/nav";
import { Card, CardContent } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect, useState } from "react";
import useDebounce from "@/libs/useDebounce";
import { motion } from "framer-motion";

const fetchBlogs = async ({ pageParam = 1, search, category }) => {
  const res = await fetch(
    `/api/blog?page=${pageParam}&limit=5&search=${search}&category=${category}`
  );
  if (!res.ok) throw new Error("Failed to fetch Blogs");
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
        <div className="my-4 flex flex-row items-center justify-end me-5 md:mx-20">
          <input
            type="text"
            placeholder="Search Blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-1/4 border rounded text-black"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded ml-2 text-black"
          >
            <option>All</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        {isLoading ? (
          <p>Loading Blogs...</p>
        ) : error ? (
          <p>Error loading Blogs: {error.message}</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 mx-5 md:mx-20 mt-5">
            {data?.pages.map((page) =>
              page.blogs.map((blog) => (
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75 }}
                  className=""
                  key={blog.id}
                >
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                    <CardContent className="rounded-xl">
                      <Link href={`/blogs/${blog.id}`} passHref>
                        <div className="flex md:flex-row flex-col md:items-start items-center md:justify-start justify-center">
                          <div className="md:me-5">
                            <img
                              alt="Cover"
                              src={blog.cover || "/default-cover.jpg"}
                              className="rounded w-[300px] h-[225px]"
                            />
                          </div>
                          <div>
                            <div className="cursor-pointer">
                              <h2 className="text-lg font-semibold text-blue-500 hover:underline">
                                {blog.title}
                              </h2>
                              <p className="text-gray-500 text-sm text-center md:text-start">
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
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        )}

        <div
          ref={observerRef}
          className="h-10 flex justify-center items-center"
        >
          {isFetchingNextPage && <p>Loading more Blogs...</p>}
        </div>
      </div>
    </div>
  );
}
