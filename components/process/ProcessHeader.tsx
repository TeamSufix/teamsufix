import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ProcessHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 pt-32 pb-24 text-white md:pt-40 md:pb-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glows */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/20 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-700/20 blur-[140px]" />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Decorative rings */}
        <div className="absolute right-[8%] top-[18%] hidden h-72 w-72 rounded-full border border-green-400/10 lg:block" />

        <div className="absolute right-[12%] top-[24%] hidden h-48 w-48 rounded-full border border-green-400/10 lg:block" />
      </div>

      <Container>
        <div className="relative">
          {/* Top Meta */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
              How We Work
            </div>

            <span className="hidden text-sm font-semibold text-white/40 md:block">
              Imagine. Design. Develop. Deliver.
            </span>
          </div>

          {/* Content */}
          <div className="mt-16 max-w-5xl">
            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              From the first
              <span className="text-green-400"> idea.</span>
              <br />
              <span className="text-white/90">To meaningful</span>
              <br />
              <span className="text-green-400">impact.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-green-100/70 sm:text-lg">
              Our process brings together strategic thinking, creative design,
              technical expertise and disciplined execution to turn ideas into
              solutions that deliver real value.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#process"
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
                  shadow-[0_20px_60px_rgba(74,222,128,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-300
                "
              >
                Explore Our Process
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
                  border-white/15
                  bg-white/[0.04]
                  px-7
                  py-4
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-400/50
                  hover:text-green-300
                "
              >
                Start a Conversation
              </Link>
            </div>
          </div>

          {/* Bottom Information */}
          <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-green-100/50">
              <span>Understand</span>
              <span>Design</span>
              <span>Build</span>
              <span>Deliver</span>
            </div>

            <a
              href="#process"
              className="group inline-flex items-center gap-3 text-sm font-bold text-green-400"
            >
              See How We Work
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
