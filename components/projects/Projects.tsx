"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { projects } from "./projects.data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-green-100/60 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-[140px]" />

      <Container>
        <div className="relative">
          {/* Section Intro */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                Selected Work
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                Work built to move
                <span className="text-green-700"> things forward.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A selection of projects that reflect our multidisciplinary
                approach to solving complex challenges.
              </p>
            </div>

            <div className="text-sm font-semibold text-slate-400">
              {String(filteredProjects.length).padStart(2, "0")} Projects
            </div>
          </div>

          {/* Filters */}
          <div className="mt-12">
            <ProjectFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Project Grid */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="mt-14 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
              <p className="font-semibold text-slate-600">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
