"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface TechBadgeProps {
  name: string;
  icon: IconType;
  color: string;
}

export default function TechBadge({
  name,
  icon: Icon,
  color,
}: TechBadgeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-500/20
        bg-slate-900/60
        px-3
        py-2
        text-sm
        text-slate-200
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-slate-800/80
        hover:shadow-[0_10px_30px_rgba(34,211,238,0.18)]
        sm:px-4
      "
    >
      <Icon
        size={18}
        style={{
          color,
        }}
        className="shrink-0"
      />

      <span className="font-medium">
        {name}
      </span>
    </motion.div>
  );
}