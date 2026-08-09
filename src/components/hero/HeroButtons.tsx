"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.3,
        duration: 0.6,
      }}
      className="
        flex
        w-full
        flex-wrap
        justify-center
        gap-4
        lg:justify-start
      "
    >
      {/* Download Resume */}

      <Link
        href="/resume/Prashant_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-14
          w-[220px]
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-6
          font-semibold
          text-white
          shadow-lg
          shadow-cyan-500/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-[1.02]
          hover:shadow-cyan-500/40
        "
      >
        <Download size={20} />

        Download Resume
      </Link>

      {/* Contact */}

      <a
        href="#contact"
        className="
          flex
          h-14
          w-[220px]
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-cyan-500/30
          bg-slate-900/40
          px-6
          font-semibold
          text-cyan-300
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400
          hover:bg-cyan-500
          hover:text-white
        "
      >
        <Mail size={20} />

        Contact Me
      </a>
    </motion.div>
  );
}