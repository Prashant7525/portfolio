"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

import {
  Rocket,
  CheckCircle2,
  Github,
  ExternalLink,
} from "lucide-react";

import TechBadge from "./TechBadge";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

interface Stat {
  title: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  status: string;
  image: string;
  description: string;
  features: string[];
  stats: Stat[];
  technologies: Technology[];
  github: string;
  liveDemo: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
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
        duration: 0.7,
      }}
      className="w-full"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-cyan-500/20
          bg-white/5
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
          sm:rounded-[36px]
        "
      >
        <div
          className="
            grid
            items-center
            lg:grid-cols-2
          "
        >
          {/* IMAGE */}

          <div
            className="
              relative
              p-5
              sm:p-8
              lg:p-10
              xl:p-12
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-12
                -top-12
                h-64
                w-64
                rounded-full
                bg-cyan-500/15
                blur-[180px]
              "
            />

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                sm:rounded-[30px]
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={650}
                className="
                  h-auto
                  w-full
                  rounded-[24px]
                  border
                  border-cyan-500/20
                  object-cover
                  shadow-[0_35px_80px_rgba(0,0,0,0.35)]
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:rounded-[28px]
                "
                priority
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#08101d]/60
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-500/30
                    bg-cyan-500/10
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-cyan-300
                    backdrop-blur-md
                    sm:px-4
                    sm:text-sm
                  "
                >
                  <Rocket className="h-4 w-4" />
                  Featured
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div
            className="
              px-5
              pb-8
              sm:px-8
              sm:pb-10
              lg:px-8
              lg:py-10
              lg:pr-10
              xl:pr-12
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-500/30
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-300
              "
            >
              <Rocket className="h-4 w-4" />
              AI • {project.status}
            </span>

            <h3
              className="
                mt-5
                text-3xl
                font-extrabold
                leading-tight
                sm:text-4xl
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-5
                text-base
                leading-7
                text-slate-400
                sm:text-lg
                sm:leading-8
              "
            >
              {project.description}
            </p>

            {/* STATS */}

            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-4
                sm:gap-5
              "
            >
              {project.stats.map((stat) => (
                <motion.div
                  key={stat.title}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    p-4
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    sm:p-5
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
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {stat.title}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* FEATURES */}

            <div className="mt-8 sm:mt-10">
              <h4 className="mb-5 text-xl font-bold">
                Key Features
              </h4>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/60
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:border-cyan-400
                    "
                  >
                    <CheckCircle2
                      size={18}
                      className="
                        mt-0.5
                        shrink-0
                        text-cyan-400
                      "
                    />

                    <span className="text-sm text-slate-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGY STACK */}

            <div className="mt-8 sm:mt-10">
              <h4 className="mb-5 text-xl font-bold">
                Technology Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <TechBadge
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                  />
                ))}
              </div>
            </div>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-cyan-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-cyan-600
                "
              >
                <Github className="h-5 w-5" />
                GitHub
              </motion.a>

              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-cyan-500/30
                  bg-transparent
                  px-6
                  py-3
                  font-semibold
                  text-cyan-300
                  transition
                  hover:bg-cyan-500/10
                "
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>

        {/* MORE PROJECTS */}

        <motion.div
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
            delay: 0.3,
          }}
          className="
            mx-5
            mb-5
            mt-2
            rounded-3xl
            border
            border-dashed
            border-cyan-500/20
            bg-cyan-500/5
            p-6
            text-center
            sm:mx-8
            sm:mb-8
            sm:p-8
            lg:mx-10
            lg:mb-10
          "
        >
          <h4 className="text-xl font-bold sm:text-2xl">
            More Projects Coming Soon 🚀
          </h4>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
              sm:leading-8
            "
          >
            I&apos;m actively building more AI, Full Stack, Android,
            Cloud and Machine Learning projects. This portfolio
            will continue to grow with real-world applications.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}