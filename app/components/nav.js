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
            className="px-4 mx-2 h-full font-medium hidden md:flex items-center justify-center text-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="px-4 mx-2 h-full font-medium hidden md:flex items-center justify-center text-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:scale-105"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="px-4 mx-2 h-full font-medium hidden md:flex items-center justify-center text-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:scale-105"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="px-4 mx-2 h-full font-medium hidden md:flex items-center justify-center text-center transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--background)] hover:scale-105"
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
