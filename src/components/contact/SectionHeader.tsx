"use client";

import { motion } from "framer-motion";
import { MessageSquareMore } from "lucide-react";

export default function SectionHeader() {
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
        mb-14
        w-full
        max-w-4xl
        text-center
        sm:mb-16
        lg:mb-20
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
          tracking-[3px]
          text-cyan-400
          sm:tracking-[4px]
        "
      >
        <MessageSquareMore size={16} />

        Contact
      </span>

      {/* Heading */}

      <h2
        className="
          mt-5
          text-4xl
          font-extrabold
          leading-tight
          sm:mt-6
          sm:text-5xl
          md:text-6xl
        "
      >
        Get In Touch
      </h2>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-5
          max-w-3xl
          text-base
          leading-7
          text-slate-400
          sm:mt-6
          sm:text-lg
          sm:leading-8
        "
      >
        Have an exciting opportunity, project, or collaboration in mind?
        I&apos;d love to hear from you. Feel free to reach out through any of
        the platforms below.
      </p>
    </motion.div>
  );
}