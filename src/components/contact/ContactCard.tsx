"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

import {
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";

const contacts = [
  {
    title: "Email",
    value: "prashantkumar75258@gmail.com",
    href: "mailto:prashantkumar75258@gmail.com",
    icon: Mail,
    color: "text-cyan-400",
  },
  {
    title: "Phone",
    value: "+91 9065949148",
    href: "tel:+919065949148",
    icon: Phone,
    color: "text-green-400",
  },
  {
    title: "Location",
    value: "India",
    href: "#",
    icon: MapPin,
    color: "text-orange-400",
  },
  {
    title: "GitHub",
    value: "github.com/prashant7525",
    href: "https://github.com/prashant7525",
    icon: Github,
    color: "text-white",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/prashant7525",
    href: "https://linkedin.com/in/prashant7525",
    icon: Linkedin,
    color: "text-blue-400",
  },
  {
    title: "LeetCode",
    value: "leetcode.com/u/Prashant7525",
    href: "https://leetcode.com/u/Prashant7525",
    icon: SiLeetcode,
    color: "text-yellow-400",
  },
  {
    title: "GeeksforGeeks",
    value: "geeksforgeeks.org/user/prashantkumar7525",
    href: "https://geeksforgeeks.org/user/prashantkumar7525",
    icon: SiGeeksforgeeks,
    color: "text-green-500",
  },
];

export default function ContactCard() {
  return (
    <div className="flex h-full flex-col gap-4">

      {contacts.map((item, index) => {
        const Icon = item.icon;

        const isExternal = item.href.startsWith("http");

        return (
          <motion.a
            key={item.title}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            initial={{
              opacity: 0,
              x: -20,
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
              duration: 0.45,
            }}
            whileHover={{
              x: 5,
            }}
            className="
              group
              flex
              w-full
              min-w-0
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-cyan-500/20
              bg-white/5
              p-4
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-white/10
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
              sm:p-5
            "
          >
            {/* Left Content */}

            <div className="flex min-w-0 items-center gap-4">

              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500/10
                "
              >
                <Icon
                  className={item.color}
                  size={22}
                />
              </div>

              {/* Text */}

              <div className="min-w-0">

                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    break-all
                    text-sm
                    font-medium
                    leading-6
                    text-white
                    sm:text-base
                  "
                >
                  {item.value}
                </p>

              </div>
            </div>

            {/* External Link Icon */}

            {item.href !== "#" && (
              <ExternalLink
                size={17}
                className="
                  shrink-0
                  text-slate-500
                  transition-colors
                  duration-300
                  group-hover:text-cyan-400
                "
              />
            )}

          </motion.a>
        );
      })}

    </div>
  );
}