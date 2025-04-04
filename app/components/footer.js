import Link from "next/link";
const Footer = () => {
  return (
    <div className="min-h-24 w-full flex flex-col md:flex-row items-center justify-between bg-[#B1C29E] md:px-20">
      <div className="flex flex-col">
        <p className="text-sm">Designed by Me! (Darren)</p>
        <p className="text-sm">© 2025 all rights reserved</p>
      </div>
      <div>
        <div className="flex flex-row md:me-4 bg-[var(--accent)] rounded-full py-2">
          <Link
            href="/"
            className="lg:text-lg lg:px-4 md:px-2 md:mx-2 mx-1 h-full font-medium flex items-center justify-center text-center transition-all duration-300 hover:text-[var(--accent)] hover:scale-105 hover:bg-[var(--background)] rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="lg:text-lg lg:px-4 md:px-2 md:mx-2 mx-1 h-full font-medium flex items-center justify-center text-center transition-all duration-300 hover:text-[var(--accent)] hover:scale-105 hover:bg-[var(--background)] rounded-xl"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="lg:text-lg lg:px-4 md:px-2 md:mx-2 mx-1 h-full font-medium flex items-center justify-center text-center transition-all duration-300 hover:text-[var(--accent)] hover:scale-105 hover:bg-[var(--background)] rounded-xl"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="lg:text-lg lg:px-4 md:px-2 md:mx-2 mx-1 h-full font-medium flex items-center justify-center text-center transition-all duration-300 hover:text-[var(--accent)] hover:scale-105 hover:bg-[var(--background)] rounded-xl"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="lg:text-lg lg:px-4 md:px-2 md:mx-2 mx-1 h-full font-medium flex items-center justify-center text-center transition-all duration-300 hover:text-[var(--accent)] hover:scale-105 hover:bg-[var(--background)] rounded-xl"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
