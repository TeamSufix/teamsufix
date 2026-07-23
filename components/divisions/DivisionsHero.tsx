import Link from "next/link";
import { ArrowDown, ArrowRight, Network } from "lucide-react";

import Container from "@/components/ui/Container";

export default function DivisionsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#03190d] pt-32 pb-24 md:pt-40 md:pb-36">
      {/* Deep Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.22),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(132,204,22,0.16),transparent_35%)]" />

      {/* Large Orbital Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/[0.08]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-green-300/[0.08]" />

      {/* Glow Orbs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-lime-400/10 blur-[160px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Blueprint Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          <path
            d="M0 420 H1200"
            stroke="#4ade80"
            strokeDasharray="8 8"
            strokeWidth="1"
          />

          <path
            d="M600 0 V800"
            stroke="#4ade80"
            strokeDasharray="8 8"
            strokeWidth="1"
          />

          <circle
            cx="600"
            cy="400"
            r="260"
            fill="none"
            stroke="#22c55e"
            strokeDasharray="12 10"
            strokeWidth="1"
          />
        </svg>
      </div>

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-green-300/25 bg-white/[0.08] px-5 py-2.5 text-sm font-semibold text-green-100 shadow-xl backdrop-blur-xl">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-400/15 text-green-300">
              <Network size={15} />
            </span>
            Our Business Divisions
          </div>

          {/* Heading */}
          <h1 className="mt-9 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl">
            Expertise that works
            <span className="mt-3 block bg-gradient-to-r from-green-300 via-green-400 to-lime-300 bg-clip-text text-transparent">
              across disciplines.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-9 max-w-3xl text-lg leading-8 text-green-50/70 md:text-xl">
            TeamSufix brings together Technology, Engineering, Architecture,
            Construction and Consulting expertise to help organizations solve
            complex challenges and build what comes next.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex h-14 items-center gap-4 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-7 font-bold text-white shadow-[0_20px_50px_rgba(34,197,94,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(34,197,94,0.45)]"
            >
              Start a Conversation
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>

            <a
              href="#divisions"
              className="group inline-flex h-14 items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-7 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-green-300/40 hover:bg-white/[0.1]"
            >
              Explore Divisions
              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>

          {/* Bottom Indicator */}
          <div className="mx-auto mt-20 flex max-w-md items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-green-300/50">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-green-400/30" />
            Five Connected Disciplines
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-green-400/30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
