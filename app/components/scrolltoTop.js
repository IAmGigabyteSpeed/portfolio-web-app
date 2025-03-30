"use client";

import { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { motion } from "framer-motion";

export default function ScrollToTop({ ref }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendTop = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={sendTop}
      className={` fixed text-center bottom-3 right-3 z-10 p-4 bg-[var-accent] text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <motion.div
        animate={{ y: [0, -5, 0, 0, 0, -5, 0, 0] }}
        transition={{
          ease: "easeInOut",
          duration: 4,
          repeat: Infinity,
          times: [0, 0.125, 0.25, 0.5, 0.625, 0.75, 0.875, 1],
        }}
      >
        <KeyboardDoubleArrowUpIcon fontSize="large" />
      </motion.div>
    </button>
  );
}
