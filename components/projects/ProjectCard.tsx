import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    type: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[440px]
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-green-200
        hover:shadow-[0_24px_70px_rgba(15,23,42,0.10)]
      "
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

        {/* Project Type */}
        <div className="absolute bottom-6 left-6">
          <span
            className="
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
            "
          >
            {project.type}
          </span>
        </div>

        {/* Arrow */}
        <div
          className="
            absolute
            right-6
            top-6
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <p className="text-sm font-semibold text-green-700">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                bg-slate-100
                px-3
                py-1.5
                text-xs
                font-medium
                text-slate-600
                transition
                group-hover:bg-green-50
                group-hover:text-green-700
              "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
