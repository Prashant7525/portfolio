"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Prashant7525",
    hover:
      "hover:border-gray-600 hover:bg-gray-900 hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/prashant7525",
    hover:
      "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/Prashant7525",
    hover:
      "hover:border-[#FFA116] hover:bg-[#FFA116] hover:text-white",
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/user/prashantkumar7525",
    hover:
      "hover:border-[#2F8D46] hover:bg-[#2F8D46] hover:text-white",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:prashantkumar75258@gmail.com",
    hover:
      "hover:border-cyan-500 hover:bg-cyan-500 hover:text-white",
  },
];

export default function HeroSocial() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
        duration: 0.7,
      }}
      className="
        flex
        flex-wrap
        justify-center
        gap-4
        sm:gap-5
        lg:justify-start
      "
    >
      {socials.map((item) => {
        const Icon = item.icon;

        const isExternal = item.link.startsWith("http");

        return (
          <motion.a
            key={item.name}
            href={item.link}
            target={isExternal ? "_blank" : undefined}
            rel={
              isExternal
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={item.name}
            whileHover={{
              scale: 1.1,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className={`
              group
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-700
              bg-slate-900/60
              text-xl
              text-cyan-400
              backdrop-blur-md
              transition-all
              duration-300
              ${item.hover}
            `}
          >
            <Icon
              className="
                transition-transform
                duration-300
                group-hover:rotate-6
              "
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
}