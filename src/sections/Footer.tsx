"use client";

import Link from "next/link";
import {
  
  Mail,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            Prashant
          </h2>

          <p className="mt-2 text-slate-400">
            Software Developer • React • Next.js • Java • Python
          </p>
        </div>

        {/* Center */}
        <div className="flex gap-6">

          <Link
            href="mailto:prashantkumar75258@gmail.com"
          >
            <Mail className="transition hover:text-cyan-400" />
          </Link>

          <Link
            href="https://linkedin.com/in/prashant7525"
            target="_blank"
          >
            <Linkedin className="transition hover:text-cyan-400" />
          </Link>
          
          <Link
            href="https://github.com/prashant7525"
            target="_blank"
          >
            <Github className="transition hover:text-cyan-400" />
          </Link>

        </div>

      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Prashant. All rights reserved.
      </p>
    </footer>
  );
}