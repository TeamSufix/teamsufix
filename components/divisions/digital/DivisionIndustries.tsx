import { ArrowUpRight, Layers3 } from "lucide-react";

import Container from "@/components/ui/Container";

interface DivisionIndustriesProps {
  industries: string[];
}

export default function DivisionIndustries({
  industries,
}: DivisionIndustriesProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#15803d] py-24 text-white md:py-32">
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-300/10 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[140px]" />

      <Container>
        <div className="relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* CONTENT */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-green-300/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-200 backdrop-blur-md">
              <Layers3 size={15} />
              Industries We Serve
            </div>

            {/* Heading */}
            <h2 className="mt-7 max-w-xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
              Expertise that moves across industries.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-lg text-base leading-8 text-green-50/70 sm:text-lg">
              We bring multidisciplinary expertise to organizations facing
              different challenges, environments and opportunities.
            </p>

            {/* Accent */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-green-300/60" />

              <span className="text-sm font-semibold text-green-200">
                Built for complexity
              </span>
            </div>
          </div>

          {/* INDUSTRIES */}
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.07]
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-green-300/40
                  hover:bg-white/[0.12]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                "
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green-300/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="text-xs font-black tracking-[0.2em] text-green-300/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="truncate font-semibold text-white">
                      {industry}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="
                      shrink-0
                      text-green-300/50
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-green-300
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
