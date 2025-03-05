import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  const getSortedCategories = () => {
    const blogsDirectory = path.join(process.cwd(), "blogs");
    const fileNames = fs.readdirSync(blogsDirectory);
    const categories = new Set();
    fileNames.map((fileName) => {
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const matterResult = matter(fileContents);
      if (matterResult.data.category) {
        categories.add(matterResult.data.category);
      }
    });
    return Array.from(categories).sort();
  };

  const categories = getSortedCategories();

  return NextResponse.json({ categories });
}
