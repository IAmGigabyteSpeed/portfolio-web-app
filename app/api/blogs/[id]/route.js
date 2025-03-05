import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "blogs");

export async function GET(req, { params }) {
  const { id } = await params;
  const fullPath = path.join(blogDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return NextResponse.json({
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    summary: matterResult.data.summary,
  });
}
