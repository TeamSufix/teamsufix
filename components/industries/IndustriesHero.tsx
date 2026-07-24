import Link from "next/link";
import { ArrowRight, Building2, Globe2, Layers3 } from "lucide-react";

import Container from "@/components/ui/Container";
import GradientText from "@/components/ui/GradientText";

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green glow */}
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-100/70 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-[130px]" />

        {/* Architectural grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-bold text-green-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_12px_rgba(22,163,74,0.7)]" />
              Industries We Serve
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Solutions built around
              <span className="block">
                <GradientText>real world challenges.</GradientText>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Every industry has different challenges. We bring together
              Technology, Engineering, Design and Strategic expertise to create
              solutions that fit the people, organizations and environments they
              serve.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-950
                  via-green-800
                  to-green-600
                  px-7
                  py-4
                  font-bold
                  text-white
                  shadow-[0_20px_50px_rgba(21,128,61,0.25)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(21,128,61,0.35)]
                "
              >
                Discuss Your Challenge
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#industries"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-7
                  py-4
                  font-bold
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-300
                  hover:text-green-700
                  hover:shadow-lg
                "
              >
                Explore Industries
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-slate-200 pt-7">
              <div>
                <p className="text-2xl font-black text-green-700">11+</p>
                <p className="mt-1 text-sm text-slate-500">Industries Served</p>
              </div>

              <div className="h-12 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-black text-green-700">5</p>
                <p className="mt-1 text-sm text-slate-500">Core Divisions</p>
              </div>

              <div className="h-12 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-black text-green-700">1</p>
                <p className="mt-1 text-sm text-slate-500">Connected Vision</p>
              </div>
            </div>
          </div>

          {/* Premium Visual */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center">
            {/* Glow */}
            <div className="absolute h-[65%] w-[65%] rounded-full bg-green-200/60 blur-[100px]" />

            {/* Rings */}
            <div className="absolute h-[88%] w-[88%] rounded-full border border-green-200/60" />

            <div className="absolute h-[70%] w-[70%] rounded-full border border-dashed border-green-300/70" />

            {/* Orbital dots */}
            <div className="absolute left-[12%] top-[28%] h-3 w-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

            <div className="absolute right-[15%] top-[20%] h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

            <div className="absolute bottom-[20%] left-[18%] h-2 w-2 rounded-full bg-green-600" />

            {/* Main visual */}
            <div className="relative flex aspect-square w-[52%] items-center justify-center rounded-full bg-gradient-to-br from-green-950 via-green-800 to-green-500 shadow-[0_35px_100px_rgba(21,128,61,0.35)]">
              <div className="absolute inset-[8%] rounded-full border border-white/20" />

              <div className="absolute inset-[18%] rounded-full border border-white/10" />

              <div className="relative flex aspect-square w-[42%] items-center justify-center rounded-[28%] border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
                <Globe2 className="h-[48%] w-[48%]" strokeWidth={1.3} />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute left-0 top-[18%] hidden rounded-2xl border border-green-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Building2 size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Diverse Sectors
                  </p>

                  <p className="text-[11px] text-slate-500">
                    One connected approach
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[12%] right-0 hidden rounded-2xl border border-green-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <Layers3 size={18} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Integrated Expertise
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Technology to infrastructure
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
