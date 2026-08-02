"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-3xl border-4 border-cyan-500 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Prashant"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side */}
        <div>

          <h2 className="mb-6 text-5xl font-bold">
            About Me
          </h2>

          <p className="mb-6 text-lg leading-8 text-slate-300">
            I&apos;m a passionate Software Developer and Computer Science student
            who enjoys building beautiful web applications, Android apps and
            solving Data Structures &amp; Algorithms.
          </p>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            I love learning new technologies and creating projects using
            React, Next.js, Tailwind CSS, Java, Python and Android.
            My goal is to build scalable applications that provide
            excellent user experiences while continuously improving my
            problem-solving skills.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <div>
              <h3 className="font-semibold text-cyan-400">
                Name
              </h3>
              <p>Prashant Kumar</p>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-400">
                Education
              </h3>
              <p>B.Tech (CSE)</p>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-400">
                Email
              </h3>
              <p className="break-all">
                prashantkumar75258@gmail.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-cyan-400">
                Location
              </h3>
              <p>India</p>
            </div>

          </div>

          <div className="mt-10">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              <a
                href="/resume/Prashant_Resume.pdf"
                download
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}