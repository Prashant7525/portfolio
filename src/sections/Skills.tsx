"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

import {
  Globe,
  Database,
  Code2,
  Wrench,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiAndroidstudio,
  SiPostman,
  SiGooglecloud,
  SiVscodium,
} from "react-icons/si";

/* =========================================================
   STATISTICS
========================================================= */

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

/* =========================================================
   SKILL CATEGORIES
========================================================= */

const categories = [
  {
    title: "Frontend",
    icon: Globe,
    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        level: 90,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
        level: 85,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        level: 92,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
        level: 95,
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
        level: 90,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        level: 75,
      },
    ],
  },

  {
    title: "Backend",
    icon: Database,
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#5FA04E",
        level: 80,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#ffffff",
        level: 78,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        level: 75,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        level: 85,
      },
    ],
  },

  {
    title: "Languages",
    icon: Code2,
    technologies: [
      {
        name: "Java",
        icon: FaJava,
        color: "#F89820",
        level: 90,
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        level: 92,
      },
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC",
        level: 88,
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        level: 90,
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "#7F52FF",
        level: 70,
      },
    ],
  },

  {
    title: "Tools & Cloud",
    icon: Wrench,
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        level: 90,
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#ffffff",
        level: 92,
      },
      {
        name: "VS Code",
        icon: SiVscodium,
        color: "#007ACC",
        level: 95,
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "#3DDC84",
        level: 82,
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        level: 88,
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        level: 65,
      },
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
        level: 65,
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
        color: "#4285F4",
        level: 60,
      },
    ],
  },
];

/* =========================================================
   SKILLS SECTION
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-slate-950
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
          -left-24
          top-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        "
      />

      <Container>
        {/* =====================================================
            HEADER
        ===================================================== */}

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
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-16
            w-full
            max-w-4xl
            text-center
            sm:mb-20
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
              tracking-[4px]
              text-cyan-400
            "
          >
            Skills
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-extrabold
              leading-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Skills &{" "}
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
              Technologies
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-slate-400
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            I enjoy building scalable software, AI-powered applications,
            Android apps and modern web experiences using today&apos;s most
            popular technologies.
          </p>
        </motion.div>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <div
          className="
            mb-16
            grid
            w-full
            grid-cols-2
            gap-4
            sm:gap-6
            lg:mb-20
            lg:grid-cols-4
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 25,
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
                rounded-3xl
                border
                border-cyan-500/20
                bg-white/5
                p-5
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:shadow-[0_20px_45px_rgba(34,211,238,0.18)]
                sm:p-7
              "
            >
              <h3
                className="
                  text-3xl
                  font-extrabold
                  text-cyan-400
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  text-slate-400
                  sm:text-sm
                  lg:text-base
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            SKILL CATEGORY GRID
        ===================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            lg:grid-cols-2
            lg:gap-8
          "
        >
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                  delay: categoryIndex * 0.1,
                  duration: 0.6,
                }}
                className="
                  flex
                  min-w-0
                  flex-col
                  rounded-3xl
                  border
                  border-slate-700/60
                  bg-slate-900/60
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-cyan-400
                  hover:shadow-[0_25px_60px_rgba(34,211,238,0.15)]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Category Header */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-500/10
                    "
                  >
                    <CategoryIcon
                      size={26}
                      className="text-cyan-400"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        text-xl
                        font-bold
                        sm:text-2xl
                      "
                    >
                      {category.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {category.technologies.length} Technologies
                    </p>
                  </div>
                </div>

                {/* Technology List */}

                <div className="flex flex-col gap-4">
                  {category.technologies.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <motion.div
                        key={tech.name}
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
                          duration: 0.4,
                        }}
                        className="
                          min-w-0
                          rounded-2xl
                          border
                          border-slate-700/60
                          bg-slate-900/70
                          px-4
                          py-4
                          transition-all
                          duration-300
                          hover:border-cyan-400/70
                          hover:bg-slate-800/90
                        "
                      >
                        {/* Technology Header */}

                        <div
                          className="
                            mb-3
                            flex
                            min-w-0
                            items-center
                            justify-between
                            gap-4
                          "
                        >
                          <div
                            className="
                              flex
                              min-w-0
                              items-center
                              gap-4
                            "
                          >
                            <div
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                              "
                            >
                              <Icon
                                size={30}
                                style={{
                                  color: tech.color,
                                }}
                              />
                            </div>

                            <span
                              className="
                                min-w-0
                                truncate
                                font-semibold
                                tracking-wide
                              "
                            >
                              {tech.name}
                            </span>
                          </div>

                          <span
                            className="
                              shrink-0
                              text-sm
                              font-bold
                              text-cyan-400
                            "
                          >
                            {tech.level}%
                          </span>
                        </div>

                        {/* Progress */}

                        <div
                          className="
                            h-1.5
                            w-full
                            overflow-hidden
                            rounded-full
                            bg-slate-700
                          "
                        >
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${tech.level}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1,
                              delay: index * 0.06,
                            }}
                            className="
                              h-full
                              rounded-full
                              bg-gradient-to-r
                              from-cyan-400
                              via-blue-500
                              to-purple-500
                            "
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}