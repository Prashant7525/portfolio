"use client";

import {
  Code2,
  Database,
  Globe,
  Terminal,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "Kotlin"],
  },
  {
    title: "Tools",
    icon: Terminal,
    items: [
      "Git",
      "GitBranch",
      "VS Code",
      "Android Studio",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0b1120] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Skills
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Technologies, programming languages and tools that I use to build
          modern applications.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-6 flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/20 p-3">
                  <skill.icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {skill.title}
                </h3>

              </div>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm transition hover:bg-cyan-500 hover:text-black"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}