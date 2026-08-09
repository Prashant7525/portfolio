"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        x: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        flex
        w-full
        justify-center
      "
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          shrink-0
        "
      >
        {/* =====================================================
            BACKGROUND GLOW
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-cyan-500/20
            blur-[70px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-6
            rounded-full
            bg-blue-500/20
            blur-[55px]
          "
        />

        {/* =====================================================
            GRADIENT RING
        ===================================================== */}

        <div
          className="
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            p-[5px]
            shadow-[0_0_70px_rgba(34,211,238,0.35)]
          "
        >
          {/* Inner Circle */}

          <div className="rounded-full bg-slate-950 p-2">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden rounded-full"
            >
              <Image
                src="/images/profile.jpg"
                alt="Prashant Kumar"
                width={390}
                height={390}
                priority
                className="
                  h-[280px]
                  w-[280px]
                  object-cover

                  sm:h-[330px]
                  sm:w-[330px]

                  md:h-[360px]
                  md:w-[360px]

                  lg:h-[390px]
                  lg:w-[390px]
                "
              />
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            FLOATING ACCENT 1
        ===================================================== */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -left-5
            top-10
            h-6
            w-6
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_#22d3ee]
          "
        />

        {/* =====================================================
            FLOATING ACCENT 2
        ===================================================== */}

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-6
            bottom-16
            h-5
            w-5
            rounded-full
            bg-purple-500
            shadow-[0_0_20px_#a855f7]
          "
        />

        {/* =====================================================
            FLOATING ACCENT 3
        ===================================================== */}

        <motion.div
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-8
            -top-5
            h-4
            w-4
            rounded-full
            bg-blue-500
            shadow-[0_0_20px_#3b82f6]
          "
        />
      </motion.div>
    </motion.div>
  );
}