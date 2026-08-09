"use client";

import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#08101d]
        py-24
        text-white
        sm:py-28
      "
    >
      {/* ================================================= */}
      {/* Background Glows */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-16
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/15
          blur-[200px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-500/15
          blur-[200px]
        "
      />

      {/* ================================================= */}
      {/* Content */}
      {/* ================================================= */}

      <Container>
        <ProjectHeader />

        <div className="space-y-16 lg:space-y-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}