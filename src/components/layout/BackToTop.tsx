"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.a
      href="#home"
      initial={{ opacity: 0, scale: .5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.1,
        y: -3,
      }}
      className="fixed bottom-8 right-8 z-50 rounded-full bg-cyan-500 p-4 text-white shadow-xl"
    >
      <ArrowUp />
    </motion.a>
  );
}