"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProjectHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        mx-auto
        mb-16
        w-full
        max-w-4xl
        text-center
        sm:mb-20
      "
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-500/10
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[4px]
          text-cyan-400
        "
      >
        <Sparkles size={16} />

        Featured Project
      </span>

      {/* Heading */}

      <h2
        className="
          mt-6
          text-4xl
          font-extrabold
          leading-tight
          sm:text-5xl
          md:text-6xl
        "
      >
        Things I&apos;ve Built
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-6
          max-w-3xl
          text-base
          leading-7
          text-slate-400
          sm:text-lg
          sm:leading-8
        "
      >
        Building modern AI-powered applications using cutting-edge web
        technologies, artificial intelligence, and scalable software
        engineering practices.
      </p>
    </motion.div>
  );
}