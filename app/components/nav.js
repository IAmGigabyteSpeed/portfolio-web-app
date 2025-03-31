"use client";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./sidebar";
import ToggleTheme from "./toggletheme";

const Nav = () => {
  const [SidebarOp, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="fixed block top-0 z-20">
      <div className="flex items-center justify-between bg-[#B1C29E] w-screen h-12">
        <div className="flex items-center justify-center">
          <MenuIcon className="cursor-pointer ms-2" onClick={toggleSidebar} />
        </div>
        <div className="flex items-center justify-center h-full md:me-5">
          <ToggleTheme />
          <Link
            href="/"
            className="px-4 mx-2 font-semibold hover:bg-gray-300 h-full hidden md:flex items-center justify-center text-center"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 mx-2 font-semibold hover:bg-gray-300 h-full hidden md:flex items-center justify-center text-center"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="px-4 mx-2 font-semibold hover:bg-gray-300 h-full hidden md:flex items-center justify-center text-center"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="px-4 mx-2 font-semibold hover:bg-gray-300 h-full hidden md:flex items-center justify-center text-center"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-4 mx-2 font-semibold hover:bg-gray-300 h-full hidden md:flex items-center justify-center text-center"
          >
            Contact
          </Link>
        </div>
      </div>
      <div>
        <Sidebar SidebarState={SidebarOp} SidebarMech={toggleSidebar} />
      </div>
    </div>
  );
};

export default Nav;
