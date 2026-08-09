"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

import Container from "@/components/layout/Container";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/prashant7525",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/prashant7525",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Prashant7525",
    label: "LeetCode",
  },
  {
    icon: SiGeeksforgeeks,
    href: "https://geeksforgeeks.org/user/prashantkumar7525",
    label: "GeeksforGeeks",
  },
  {
    icon: Mail,
    href: "mailto:prashantkumar75258@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-cyan-500/10
        bg-slate-900
        text-white
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <Container>

        {/* Main Footer Content */}

        <motion.div
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
            duration: 0.6,
          }}
          className="
            flex
            flex-col
            items-center
            py-16
            sm:py-20
          "
        >
          {/* Name */}

          <h2
            className="
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-3xl
              font-extrabold
              text-transparent
              sm:text-4xl
            "
          >
            Prashant Kumar
          </h2>

          {/* Description */}

          <p
            className="
              mt-3
              text-center
              text-sm
              leading-6
              text-slate-400
              sm:text-base
            "
          >
            Software Developer • AI Enthusiast • Full Stack Developer
          </p>

          {/* Navigation */}

          <nav
            aria-label="Footer navigation"
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-x-8
              gap-y-4
            "
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                "
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{
                    scale: 1.12,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-white/5
                    text-slate-200
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                    hover:text-cyan-400
                  "
                >
                  <Icon size={21} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}

        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-cyan-500/20
            to-transparent
          "
        />

        {/* Bottom Row */}

        <div
          className="
            flex
            min-h-16
            items-center
            justify-center
            gap-5
            py-5
            md:justify-between
          "
        >
          {/* Copyright */}

          <p
            className="
              text-center
              text-xs
              text-slate-500
              sm:text-sm
            "
          >
            © {new Date().getFullYear()} Prashant Kumar. All rights reserved.
          </p>

          {/* Back To Top */}

          <motion.a
            href="#home"
            aria-label="Back to top"
            whileHover={{
              y: -4,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              hidden
              rounded-xl
              bg-cyan-500
              p-3
              text-white
              transition-colors
              hover:bg-cyan-600
              md:block
            "
          >
            <ArrowUp size={20} />
          </motion.a>
        </div>

      </Container>
    </footer>
  );
}