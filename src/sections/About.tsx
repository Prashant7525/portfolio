"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import {
  Download,
  GraduationCap,
  Mail,
  MapPin,
  User,
} from "lucide-react";

const stats = [
  {
    value: "1",
    label: "Project",
  },
  {
    value: "1000+",
    label: "DSA Problems",
  },
  {
    value: "18+",
    label: "Technologies",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
];

const info = [
  {
    icon: User,
    title: "Name",
    value: "Prashant Kumar",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech (CSE)",
  },
  {
    icon: Mail,
    title: "Email",
    value: "prashantkumar75258@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#08101d]
        py-28
        text-white
        sm:py-32
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-[170px]
        "
      />

      <Container>
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            mb-20
            w-full
            max-w-4xl
            text-center
            lg:mb-24
          "
        >
          <span
            className="
              inline-flex
              items-center
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
            "
          >
            About Me
          </span>

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
            Know Me Better
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Passionate about creating scalable software, modern web
            applications and AI powered solutions.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN ABOUT CONTENT
        ===================================================== */}

        <div
          className="
            grid
            items-start
            gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
            xl:gap-24
          "
        >
          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              w-full
              justify-center
              lg:justify-start
            "
          >
            <div className="relative">
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[32px]
                  bg-cyan-500/20
                  blur-3xl
                "
              />

              {/* Image Card */}

              <div
                className="
                  relative
                  rounded-[32px]
                  border
                  border-cyan-500/20
                  bg-slate-800/60
                  p-3
                  shadow-[0_25px_70px_rgba(0,0,0,0.3)]
                  backdrop-blur-xl
                "
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Prashant Kumar"
                  width={380}
                  height={470}
                  priority
                  className="
                    h-auto
                    w-[280px]
                    rounded-[24px]
                    object-cover
                    sm:w-[320px]
                    md:w-[350px]
                    lg:w-[380px]
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              w-full
              max-w-[700px]
              lg:max-w-none
            "
          >
            {/* Heading */}

            <h3
              className="
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
              "
            >
              Software Developer

              <span
                className="
                  mt-2
                  block
                  text-cyan-400
                "
              >
                Computer Science Student
              </span>
            </h3>

            {/* Paragraph 1 */}

            <p
              className="
                mt-8
                text-base
                leading-8
                text-slate-300
                sm:text-lg
                sm:leading-9
              "
            >
              I&apos;m passionate about building modern websites, Android
              applications and AI powered software. I enjoy solving Data
              Structures & Algorithms, learning new technologies and
              developing projects that solve real-world problems.
            </p>

            {/* Paragraph 2 */}

            <p
              className="
                mt-6
                text-base
                leading-8
                text-slate-400
                sm:text-lg
                sm:leading-9
              "
            >
              My current interests include Artificial Intelligence, Machine
              Learning, Cloud Computing and Full Stack Development while
              continuously improving my problem-solving skills.
            </p>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              className="
                mt-12
                grid
                grid-cols-2
                gap-5
                sm:grid-cols-4
                sm:gap-6
              "
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                  "
                >
                  <h4
                    className="
                      text-2xl
                      font-bold
                      text-cyan-400
                      sm:text-3xl
                    "
                  >
                    {item.value}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-xs
                      text-slate-400
                      sm:text-sm
                    "
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* =================================================
                INFORMATION CARDS
            ================================================= */}

            <div
              className="
                mt-12
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              {info.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      min-w-0
                      rounded-3xl
                      border
                      border-cyan-500/20
                      bg-slate-800/60
                      p-6
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-cyan-400
                    "
                  >
                    <Icon
                      size={24}
                      className="mb-4 text-cyan-400"
                    />

                    <p className="text-sm text-slate-400">
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-2
                        break-words
                        font-semibold
                        text-white
                      "
                    >
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                RESUME BUTTON
            ================================================= */}

            <div className="mt-12">
              <a
                href="/resume/Prashant_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="
                    h-12
                    rounded-xl
                    bg-cyan-500
                    px-8
                    text-base
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-cyan-600
                    hover:shadow-cyan-500/30
                  "
                >
                  <Download className="mr-2 h-5 w-5" />

                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}