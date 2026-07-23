import { ArrowRight, Globe2, Lightbulb, Sparkles, Users } from "lucide-react";

import Link from "next/link";

import Container from "@/components/ui/Container";

const reasons = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Ideas deserve a path forward",
    description:
      "We help transform ideas from early concepts into practical solutions that can create real value.",
  },
  {
    number: "02",
    icon: Users,
    title: "Expertise works better together",
    description:
      "Complex challenges rarely belong to one discipline. We bring different capabilities together to create stronger outcomes.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Progress should create lasting value",
    description:
      "We believe the best solutions should not only solve today's problems but also create opportunities for tomorrow.",
  },
];

export default function WhyWeExist() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Ambient Background */}

      <div className="pointer-events-none absolute -right-48 top-20 h-[520px] w-[520px] rounded-full bg-green-100/70 blur-[140px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-green-50 blur-[120px]" />

      <Container>
        <div className="relative">
          {/* INTRO */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
              </span>
              Why We Exist
            </div>

            <h2 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Building what comes
              <span className="block bg-gradient-to-r from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">
                next.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              The world is changing quickly. Organizations, Communities and
              Industries need new ways to solve problems, create opportunity and
              build for the future.
            </p>
          </div>

          {/* MAIN STATEMENT */}

          <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-[40px] bg-gradient-to-br from-green-950 via-green-900 to-green-800 p-8 shadow-[0_30px_90px_rgba(5,46,22,0.25)] md:p-14">
            {/* Decorative Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-400/20 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-lime-400/10 blur-[100px]" />

            {/* Technical Grid */}

            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative text-center">
              {/* Icon */}

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-green-300/20 bg-green-400/10 text-green-300">
                <Sparkles size={25} />
              </div>

              <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold leading-10 text-white md:text-4xl md:leading-[1.3]">
                TeamSufix exists to turn
                <span className="block bg-gradient-to-r from-green-200 via-green-300 to-lime-300 bg-clip-text text-transparent">
                  possibility into progress.
                </span>
              </p>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-green-50/70 md:text-lg">
                Through Technology, Engineering, Architecture, Construction and
                Consulting, we help people and organizations move from where
                they are to where they want to be.
              </p>

              <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent" />
            </div>
          </div>

          {/* REASONS */}

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-slate-200/80
                    bg-white
                    p-8
                    shadow-[0_15px_45px_rgba(15,23,42,0.05)]
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-green-300
                    hover:shadow-[0_30px_75px_rgba(22,163,74,0.14)]
                  "
                >
                  {/* Hover Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-200/40 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Number */}

                  <span className="absolute right-7 top-6 text-xs font-black tracking-[0.25em] text-green-200 transition-colors duration-300 group-hover:text-green-500">
                    {reason.number}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-green-50
                      to-green-100
                      text-green-700
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:from-green-700
                      group-hover:to-green-500
                      group-hover:text-white
                      group-hover:shadow-lg
                    "
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* Content */}

                  <h3 className="relative mt-7 text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-green-700">
                    {reason.title}
                  </h3>

                  <p className="relative mt-4 text-sm leading-7 text-slate-600">
                    {reason.description}
                  </p>

                  {/* Bottom Accent */}

                  <div className="absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-900 via-green-600 to-green-400 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              );
            })}
          </div>

          {/* CTA */}

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-green-900
                via-green-700
                to-green-500
                px-8
                py-4
                font-semibold
                text-white
                shadow-[0_18px_45px_rgba(22,163,74,0.25)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(22,163,74,0.35)]
              "
            >
              Let's Build What Comes Next
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
