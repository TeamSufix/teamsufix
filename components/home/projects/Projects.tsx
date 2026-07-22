import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

export default function Projects() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#052e16]
        via-[#14532d]
        to-[#15803d]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-green-500/20 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-lime-300/10 blur-[170px]" />

      <Container>
        <div className="relative">
          <SectionHeading
            light
            badge="Projects"
            title="Engineering Ideas Into Real World Impact"
            description="Every solution we deliver demonstrates our commitment to innovation, engineering excellence and sustainable development across multiple industries."
          />

          <div className="mt-14 space-y-10 sm:mt-16 sm:space-y-12 lg:mt-20 lg:space-y-14">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
