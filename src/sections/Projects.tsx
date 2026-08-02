"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Projects
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Some of my recent projects built using modern technologies.
        </p>

        <div className="grid gap-10">

          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative h-72 lg:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8">

                  <div>

                    <h3 className="mb-4 text-3xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mb-8 leading-8 text-slate-300">
                      {project.description}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="flex gap-4">

                    <Button >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}