import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

interface DivisionExpertiseProps {
  expertise: string[];
}

export default function DivisionExpertise({
  expertise,
}: DivisionExpertiseProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Architecture */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[550px] w-[550px] rounded-full bg-green-100/60 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-lime-100/50 blur-[140px]" />

      {/* Architectural Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <Container>
        <div className="relative grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
          {/* LEFT CONTENT */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-green-700">
              <Sparkles size={15} />
              Our Expertise
            </div>

            {/* Heading */}
            <h2 className="mt-8 max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              Experience that connects
              <span className="block bg-gradient-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                the bigger picture.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Our multidisciplinary approach allows us to look beyond isolated
              tasks and understand how each part of a project contributes to the
              bigger outcome.
            </p>

            {/* Premium Statement */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-green-700 to-green-400" />

              <span className="text-sm font-bold text-slate-500">
                Connected expertise. Better outcomes.
              </span>
            </div>

            {/* Supporting Stats */}
            <div className="mt-12 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-2xl border border-green-100 bg-green-50/70 p-5">
                <p className="text-3xl font-black text-green-700">01</p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  Integrated Thinking
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50/70 p-5">
                <p className="text-3xl font-black text-green-700">∞</p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  Possibilities
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT EXPERTISE PANEL */}
          <div className="relative">
            {/* Panel Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-green-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-green-800/20 bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-6 shadow-[0_30px_90px_rgba(21,128,61,0.25)] md:p-8">
              {/* Panel Grid */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.06]
                  [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
                  [background-size:48px_48px]
                "
              />

              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-400/20 blur-[100px]" />

              <div className="relative">
                {/* Panel Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-green-300">
                      Capabilities
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Built around your goals.
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-green-300 backdrop-blur-md">
                    <Sparkles size={21} />
                  </div>
                </div>

                {/* Expertise Grid */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {expertise.map((item, index) => (
                    <div
                      key={item}
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
                        hover:bg-white/[0.14]
                      "
                    >
                      {/* Top Row */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black tracking-[0.2em] text-green-300/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="
                            text-green-300/50
                            transition-all
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                            group-hover:text-green-300
                          "
                        />
                      </div>

                      {/* Icon */}
                      <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/15 text-green-300 transition-all duration-300 group-hover:bg-green-400 group-hover:text-green-950">
                        <Check size={20} strokeWidth={2.5} />
                      </div>

                      {/* Text */}
                      <h4 className="mt-5 text-sm font-bold leading-6 text-white">
                        {item}
                      </h4>

                      {/* Accent */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-lime-300 transition-all duration-500 group-hover:w-full" />
                    </div>
                  ))}
                </div>

                {/* Bottom Statement */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm leading-7 text-green-50/65">
                    From strategy to execution, our expertise works together to
                    create solutions that are practical, connected and built for
                    lasting impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
