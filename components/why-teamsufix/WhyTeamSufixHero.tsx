import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import GradientText from "@/components/ui/GradientText";

export default function WhyTeamSufixHero() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 py-28 text-white md:py-36 lg:py-44">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-green-500/20 blur-[160px]" />

        <div className="absolute -bottom-48 -left-40 h-[650px] w-[650px] rounded-full bg-green-800/30 blur-[160px]" />

        <div
          className="
            absolute inset-0 opacity-[0.045]
            [background-image:linear-gradient(rgba(74,222,128,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.5)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div className="absolute right-[8%] top-[18%] hidden h-[460px] w-[460px] rounded-full border border-green-400/10 lg:block" />

        <div className="absolute right-[13%] top-[25%] hidden h-[320px] w-[320px] rounded-full border border-dashed border-green-400/10 lg:block" />

        <div className="absolute right-[22%] top-[38%] hidden h-3 w-3 rounded-full bg-green-400 shadow-[0_0_30px_rgba(74,222,128,0.9)] lg:block" />
      </div>

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-300 backdrop-blur-md sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.8)]" />
              Why TeamSufix
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-green-300/60">
              <Sparkles size={15} />
              One connected vision. Multiple areas of expertise.
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl xl:text-8xl">
              More than a
              <br />
              service provider.
              <span className="mt-3 block">
                <GradientText>A partner for progress.</GradientText>
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-green-100/70 sm:text-lg">
              We bring technology, engineering, architecture, construction and
              consulting expertise together to help organizations solve
              meaningful problems and build what comes next.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-quote"
                className="
                  group inline-flex items-center justify-center gap-3
                  rounded-2xl bg-green-400 px-7 py-4
                  font-bold text-green-950
                  shadow-[0_20px_60px_rgba(74,222,128,0.2)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-green-300
                  hover:shadow-[0_25px_80px_rgba(74,222,128,0.3)]
                "
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/about"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl border border-green-400/25
                  bg-green-900/30 px-7 py-4
                  font-bold text-green-50
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-green-400/60
                  hover:bg-green-800/50
                  hover:text-green-300
                "
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Difference Card */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/20 blur-[110px]" />

            <div className="relative rounded-[40px] border border-green-400/20 bg-green-900/40 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-5">
              <div className="rounded-[32px] border border-white/10 bg-green-950/80 p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                    Our Difference
                  </p>

                  <span className="text-xs font-bold text-green-400/50">
                    01 — 04
                  </span>
                </div>

                <h2 className="mt-7 text-3xl font-black leading-tight sm:text-4xl">
                  One connected team.
                  <span className="block text-green-400">
                    Multiple ways to create value.
                  </span>
                </h2>

                <div className="mt-10 space-y-3">
                  {[
                    "Multidisciplinary expertise",
                    "Practical and outcome-focused thinking",
                    "Quality-driven delivery",
                    "Long-term partnership mindset",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="
                        group flex items-center gap-4
                        rounded-2xl border border-white/10
                        bg-white/[0.04] p-4
                        transition-all duration-300
                        hover:border-green-400/30
                        hover:bg-green-400/10
                      "
                    >
                      <span className="text-xs font-black text-green-400/40">
                        0{index + 1}
                      </span>

                      <CheckCircle2
                        size={20}
                        className="shrink-0 text-green-400"
                      />

                      <span className="text-sm font-medium text-green-50/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-100/50">
                    Imagine · Design · Develop · Deliver
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
