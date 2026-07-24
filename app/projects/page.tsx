import ProjectHeader from "@/components/projects/ProjectsHeader";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <ProjectHeader />

      <Projects />
    </main>
  );
}
