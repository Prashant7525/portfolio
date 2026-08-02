"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b1120]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-white"
        >
          Prashant
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button className="rounded-full bg-cyan-500 px-6 hover:bg-cyan-600">
            Resume
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="rounded-lg p-2 text-white hover:bg-slate-800">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-12 flex flex-col gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg"
                  >
                    {item.name}
                  </a>
                ))}

                <Button>Resume</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}