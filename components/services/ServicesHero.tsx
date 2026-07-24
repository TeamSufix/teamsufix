import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

const capabilities = [
"Digital",
"Engineering",
"Architecture",
"Construction",
"Consulting",
];

export default function ServicesHero() {
return ( <section className="relative isolate overflow-hidden bg-green-950 pt-32 pb-24 text-white sm:pt-36 md:pb-32 lg:pt-44">
{/* =========================================================
PREMIUM BACKGROUND SYSTEM
========================================================== */}

  {/* Ambient glow — top right */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-green-500/20 blur-[160px]" />

  {/* Ambient glow — bottom left */}
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[160px]" />

  {/* Architectural grid */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.045]
      [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
      [background-size:64px_64px]
    "
  />

  {/* Central architectural rings */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/[0.08] lg:block" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-green-400/[0.1] lg:block" />

  {/* Soft vignette */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,46,22,0.45)_100%)]" />

  <Container>
    <div className="relative mx-auto max-w-6xl text-center">
      {/* =========================================================
          BADGE
      ========================================================== */}

      <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-white/[0.07] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-green-200 shadow-[0_10px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>

        <Sparkles size={15} className="text-green-400" />

        What We Do
      </div>

      {/* =========================================================
          HEADING
      ========================================================== */}

      <h1 className="mx-auto mt-9 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]">
        Expertise that turns
        <span className="mt-3 block bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text text-transparent">
          ambition into progress.
        </span>
      </h1>

      {/* =========================================================
          DESCRIPTION
      ========================================================== */}

      <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg md:text-xl">
        From digital innovation and engineering to architecture,
        construction and strategic consulting, TeamSufix brings the
        expertise required to move ideas forward.
      </p>

      {/* =========================================================
          ACTIONS
      ========================================================== */}

      <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {/* Primary CTA */}
        <Link
          href="/request-quote"
          className="
            group
            relative
            inline-flex
            h-14
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-2xl
            bg-white
            px-8
            font-bold
            text-green-950
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-green-400
            hover:text-white
            hover:shadow-[0_25px_70px_rgba(74,222,128,0.3)]
          "
        >
          {/* Shine effect */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative">
            Start Your Project
          </span>

          <ArrowRight
            size={18}
            className="relative transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* Secondary CTA */}
        <Link
          href="/divisions"
          className="
            group
            inline-flex
            h-14
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-white/20
            bg-white/[0.06]
            px-8
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-green-400/60
            hover:bg-green-400/10
            hover:text-green-300
          "
        >
          Explore Divisions

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-8">
        {/* Label */}
        <div className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-green-300/50">
          <span className="h-px w-10 bg-green-400/30" />

          One Connected Ecosystem

          <span className="h-px w-10 bg-green-400/30" />
        </div>

        {/* Capabilities */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((item) => (
            <div
              key={item}
              className="
                group
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                px-4
                py-4
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-green-100/55
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-400/30
                hover:bg-green-400/10
                hover:text-green-200
              "
            >
              <CheckCircle2
                size={14}
                className="text-green-400/60 transition-colors duration-300 group-hover:text-green-400"
              />

              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>

  {/* Bottom fade */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-950 to-transparent" />
</section>

);
}
