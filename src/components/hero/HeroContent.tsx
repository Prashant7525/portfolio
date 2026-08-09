"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        w-full
        max-w-[650px]
      "
    >
      {/* =====================================================
          AVAILABILITY
      ===================================================== */}

      <div
        className="
          mb-6
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
          font-medium
          text-cyan-300
        "
      >
        <span
          className="
            h-2.5
            w-2.5
            animate-pulse
            rounded-full
            bg-green-400
          "
        />

        Available for Opportunities
      </div>

      {/* =====================================================
          GREETING
      ===================================================== */}

      <p
        className="
          mb-4
          text-xl
          font-medium
          text-cyan-400
          sm:text-2xl
        "
      >
        👋 Hello, I&apos;m
      </p>

      {/* =====================================================
          NAME
      ===================================================== */}

      <h1
        className="
          text-5xl
          font-extrabold
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        Prashant{" "}
        <span
          className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          Kumar
        </span>
      </h1>

      {/* =====================================================
          ANIMATED TITLE
      ===================================================== */}

      <div
        className="
          mt-6
          min-h-[48px]
          text-2xl
          font-semibold
          leading-tight
          text-slate-300
          sm:min-h-[56px]
          sm:text-3xl
          lg:text-4xl
        "
      >
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Machine Learning Explorer",
            2000,
            "Cloud Computing Learner",
            2000,
            "Open Source Learner",
            2000,
          ]}
          speed={45}
          repeat={Infinity}
        />
      </div>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          mt-7
          max-w-[620px]
          text-base
          leading-8
          text-slate-400
          sm:mt-8
          sm:text-lg
        "
      >
        I enjoy building modern web applications and AI-powered
        solutions while continuously exploring{" "}
        <span className="font-semibold text-cyan-400">
          Machine Learning
        </span>{" "}
        and{" "}
        <span className="font-semibold text-cyan-400">
          Cloud Computing
        </span>
        . I love solving real-world problems through clean code,
        scalable architecture, and intuitive user experiences using{" "}
        <span className="font-semibold text-cyan-400">
          Python
        </span>
        ,{" "}
        <span className="font-semibold text-cyan-400">
          Java
        </span>
        ,{" "}
        <span className="font-semibold text-cyan-400">
          React
        </span>
        , and{" "}
        <span className="font-semibold text-cyan-400">
          Next.js
        </span>
        .
      </p>
    </motion.div>
  );
}