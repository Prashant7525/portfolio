"use client";

import HeroButtons from "@/components/hero/HeroButtons";
import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";
import HeroSocial from "@/components/hero/HeroSocial";
import Container from "@/components/layout/Container";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[550px]
          w-[550px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[550px]
          w-[550px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <Container>
        <div
          className="
            grid
            min-h-screen
            items-center
            gap-12
            pt-28
            pb-24

            sm:gap-14
            sm:pt-32

            lg:grid-cols-[1fr_1fr]
            lg:gap-10
            lg:pt-28
            lg:pb-24

            xl:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              order-2
              mx-auto
              w-full
              max-w-[650px]

              lg:order-1
              lg:mx-0
              lg:max-w-[650px]
            "
          >
            <HeroContent />

            {/* Buttons */}

            <div className="mt-10">
              <HeroButtons />
            </div>

            {/* Social Links */}

            <div className="mt-14">
              <HeroSocial />
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div
            className="
              order-1
              flex
              w-full
              justify-center

              lg:order-2
              lg:justify-center
            "
          >
            <HeroImage />
          </div>
        </div>
      </Container>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2

          sm:bottom-8
        "
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="pointer-events-auto"
        >
          <ChevronDown
            size={34}
            className="
              text-cyan-400
              transition-colors
              duration-300
              hover:text-white
            "
          />
        </a>
      </motion.div>
    </section>
  );
}