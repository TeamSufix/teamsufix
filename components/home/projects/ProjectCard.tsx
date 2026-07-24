import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CheckCircle2 } from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
  tags: string[];
}

interface Props {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: Props) {
  const Icon = project.icon;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-gradient-to-br
        from-green-950
        via-green-900
        to-green-800
        shadow-[0_30px_80px_rgba(0,0,0,.35)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-green-400/40
        hover:shadow-[0_40px_100px_rgba(22,163,74,.25)]
      "
    >
      {/* Decorative Glows */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-lime-300/10 blur-[90px]" />

      <div
        className={`relative grid lg:grid-cols-2 lg:gap-8 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}

        <div className="relative min-h-[380px] overflow-hidden sm:min-h-[430px] lg:min-h-[520px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03190d]/80 via-black/20 to-transparent" />

          <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-green-700 shadow-xl backdrop-blur sm:left-8 sm:top-8 sm:h-16 sm:w-16">
            <Icon size={28} />
          </div>

          <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-green-600/90 px-4 py-2 text-xs font-bold text-white shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:px-5 sm:text-sm">
            {project.category}
          </span>
        </div>

        {/* Content */}

        <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-16">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
            Featured Project
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
            {project.title}
          </h2>

          <p className="mt-7 text-base leading-8 text-green-50/80 sm:text-lg">
            {project.description}
          </p>

          <div className="my-8 h-px bg-gradient-to-r from-green-500/40 via-white/20 to-transparent sm:my-10" />

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-200">
              Project Highlights
            </h4>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-green-400" />

                  <span className="text-sm text-green-50">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/projects"
            className="
              group/button
              mt-10
              inline-flex
              min-h-14
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-green-500
              via-green-600
              to-green-700
              px-7
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(34,197,94,.35)]
              sm:mt-16
              sm:w-fit
            "
          >
            View Case Study
            <ArrowRight
              size={18}
              className="ml-3 transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}