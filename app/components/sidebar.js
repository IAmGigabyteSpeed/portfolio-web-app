import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ SidebarState, SidebarMech }) => {
  return (
    <AnimatePresence>
      {SidebarState && (
        <div className="fixed inset-0 z-30">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
            onClick={SidebarMech}
          />

          <motion.div
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed flex-col bg-[#8C7851] w-full md:w-64 min-h-screen z-30 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-end justify-end pe-2 pt-5">
              <CloseIcon
                className="cursor-pointer text-white hover:text-gray-300"
                onClick={SidebarMech}
              />
            </div>
            <div className="flex flex-col space-y-2 mt-5">
              <Link
                href="/"
                className="p-4 transition delay-100 duration-300 ease-in-out text-[#FCE7C8] hover:bg-[#37240D]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="p-4 transition delay-100 duration-300 ease-in-out text-[#FCE7C8] hover:bg-[#37240D]"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="p-4 transition delay-100 duration-300 ease-in-out text-[#FCE7C8] hover:bg-[#37240D]"
              >
                Blogs
              </Link>
              <Link
                href="/projects"
                className="p-4 transition delay-100 duration-300 ease-in-out text-[#FCE7C8] hover:bg-[#37240D]"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="p-4 transition delay-100 duration-300 ease-in-out text-[#FCE7C8] hover:bg-[#37240D]"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
