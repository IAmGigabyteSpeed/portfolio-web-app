import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

const blogsDirectory = path.join(process.cwd(), "blogs");

const getSortedblogs = () => {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allblogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      cover: matterResult.data.cover,
      summary: matterResult.data.summary,
    };
  });

  return allblogsData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    return moment(b.date, format).diff(moment(a.date, format));
  });
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);
  const search = searchParams.get("search").toString() || "";
  const tag = searchParams.get("category").toString() || "";

  let sortedblogs = getSortedblogs();

  if (tag.trim() !== "All") {
    sortedblogs = sortedblogs.filter(
      (blog) => blog.category.toLowerCase() === tag.toLowerCase()
    );
  }

  if (search.trim() !== "") {
    sortedblogs = sortedblogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const totalblogs = sortedblogs.length;
  //Skip (NoPage - 1) * totalInput
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedblogs = sortedblogs.slice(startIndex, endIndex);

  const nextPage = endIndex < totalblogs ? page + 1 : null;

  return NextResponse.json({
    blogs: paginatedblogs,
    nextPage,
  });
}
