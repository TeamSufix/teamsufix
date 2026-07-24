import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ProjectHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 pt-32 pb-24 text-white md:pt-40 md:pb-32">
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main radial glow */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/20 blur-[140px]" />

        {/* Secondary glow */}
        <div className="absolute -bottom-48 -left-40 h-[600px] w-[600px] rounded-full bg-green-700/20 blur-[140px]" />

        {/* Subtle central glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-900/30 blur-[160px]" />

        {/* Premium grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(74,222,128,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.45)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Decorative rings */}
        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full border border-green-400/10" />

        <div className="absolute -right-20 top-32 h-[380px] w-[380px] rounded-full border border-dashed border-green-400/10" />
      </div>

      <Container>
        <div className="relative">
          {/* Top Meta */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-300 backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
              Our Projects
            </div>

            <div className="hidden items-center gap-2 text-sm font-semibold text-green-300/50 md:flex">
              <Sparkles size={15} />
              Imagine. Design. Develop. Deliver.
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-16 max-w-5xl">
            <h1
              className="
                max-w-5xl
                text-5xl
                font-black
                leading-[0.98]
                tracking-[-0.04em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Ideas
              <span className="text-green-400"> Delivered.</span>
              <br />
              <span className="text-white">Solutions that create</span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-lime-300 bg-clip-text text-transparent">
                real impact.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-green-100/70 sm:text-lg">
              Explore selected projects and solutions delivered across
              technology, engineering, architecture, construction and
              consulting.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-green-400
                  px-7
                  py-4
                  font-bold
                  text-green-950
                  shadow-[0_20px_60px_rgba(74,222,128,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-300
                  hover:shadow-[0_25px_80px_rgba(74,222,128,0.32)]
                "
              >
                Explore Our Work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/request-quote"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-green-400/25
                  bg-green-900/30
                  px-7
                  py-4
                  font-bold
                  text-green-50
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-400/60
                  hover:bg-green-800/50
                  hover:text-green-300
                "
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Bottom Information */}
          <div className="mt-20 flex flex-col gap-8 border-t border-green-400/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-green-100/50">
              <span className="transition-colors hover:text-green-300">
                Digital
              </span>

              <span className="transition-colors hover:text-green-300">
                Engineering
              </span>

              <span className="transition-colors hover:text-green-300">
                Architecture
              </span>

              <span className="transition-colors hover:text-green-300">
                Construction
              </span>

              <span className="transition-colors hover:text-green-300">
                Consulting
              </span>
            </div>

            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-sm font-bold text-green-400 transition-colors hover:text-green-300"
            >
              Explore Portfolio
              <ArrowDown
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
