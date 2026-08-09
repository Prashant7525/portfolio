"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import useMounted from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

const navItems = [
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

export default function Navbar() {
  const mounted = useMounted();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-all duration-500",
        scrolled
          ? "border-b border-cyan-500/10 bg-[#050b16]/80 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <Container>
        {/* =====================================================
            NAVBAR INNER
        ===================================================== */}

        <div className="flex h-20 w-full items-center justify-between">

          {/* ===================================================
              LOGO
          =================================================== */}

          <Link
            href="/"
            className="group shrink-0"
          >
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-sky-400
                to-blue-500
                bg-clip-text
                text-3xl
                font-extrabold
                tracking-tight
                text-transparent
                transition-transform
                duration-300
                group-hover:scale-105
              "
            >
              Prashant
            </span>
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-8
              md:flex
              lg:gap-10
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  text-[15px]
                  font-medium
                  tracking-wide
                  text-slate-300
                  transition-colors
                  duration-300
                  hover:text-cyan-400
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-cyan-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* ===================================================
              DESKTOP RESUME
          =================================================== */}

          <div className="hidden shrink-0 md:block">
            <a
              href="/resume/Prashant_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button
                className="
                  h-12
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-sky-500
                  to-blue-600
                  px-7
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-cyan-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  hover:shadow-cyan-500/40
                "
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* ===================================================
              MOBILE MENU
          =================================================== */}

          {mounted && (
            <div className="md:hidden">
              <Sheet>

                <SheetTrigger
                  render={
                    <button
                      type="button"
                      aria-label="Open navigation menu"
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-500/20
                        bg-slate-900/40
                        text-white
                        transition-all
                        duration-300
                        hover:border-cyan-400
                        hover:bg-cyan-500/10
                      "
                    >
                      <Menu className="h-6 w-6" />
                    </button>
                  }
                />

                <SheetContent
                  side="right"
                  className="
                    w-[85%]
                    border-l
                    border-cyan-500/20
                    bg-[#07111f]/95
                    text-white
                    backdrop-blur-3xl
                    sm:max-w-sm
                  "
                >
                  <div className="mt-14 flex flex-col px-2">

                    <h2
                      className="
                        mb-10
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      Navigation
                    </h2>

                    {/* Mobile Navigation */}

                    <nav
                      aria-label="Mobile navigation"
                      className="flex flex-col gap-7"
                    >
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="
                            text-lg
                            font-medium
                            text-slate-300
                            transition-all
                            duration-300
                            hover:translate-x-2
                            hover:text-cyan-400
                          "
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>

                    {/* Mobile Resume */}

                    <a
                      href="/resume/Prashant_Resume.pdf"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10"
                    >
                      <Button
                        className="
                          h-12
                          w-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500
                          via-sky-500
                          to-blue-600
                          font-semibold
                          text-white
                          transition-all
                          duration-300
                          hover:scale-[1.02]
                        "
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </a>

                  </div>
                </SheetContent>

              </Sheet>
            </div>
          )}

        </div>
      </Container>
    </header>
  );
}