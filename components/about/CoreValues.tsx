import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We challenge conventional thinking and explore better ways to solve complex problems.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "We hold ourselves to high standards in the quality of our thinking, work and delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We build trust through transparency, accountability and doing what is right.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We believe the strongest outcomes are created when diverse expertise works together.",
  },
  {
    icon: Target,
    title: "Purpose",
    description:
      "We focus on solutions that create meaningful value for organizations, communities and society.",
  },
  {
    icon: Users,
    title: "People",
    description:
      "We value the people behind every idea, project and partnership we help bring to life.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[140px]" />

      {/* Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-green-400/30
                bg-white/[0.07]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-green-100
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              What We Stand For
            </div>

            <h2
              className="
                mt-8
                text-4xl
                font-black
                leading-[1.08]
                tracking-tight
                text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              Values that shape
              <span className="block bg-gradient-to-r from-green-300 via-green-400 to-lime-300 bg-clip-text text-transparent">
                how we work.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-green-50/75">
              Our values influence the decisions we make, the partnerships we
              build and the solutions we deliver.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={value.title}
                  className="
                    group
                    relative
                    min-h-[320px]
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.07]
                    p-8
                    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-green-400/40
                    hover:bg-white/[0.11]
                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                  "
                >
                  {/* Background Number */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-3
                      -top-8
                      select-none
                      text-[150px]
                      font-black
                      leading-none
                      text-white/[0.03]
                      transition-all
                      duration-500
                      group-hover:text-green-400/[0.08]
                    "
                  >
                    {number}
                  </span>

                  {/* Hover Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-48
                      w-48
                      rounded-full
                      bg-green-400/20
                      opacity-0
                      blur-[80px]
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

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
                      border
                      border-green-300/20
                      bg-gradient-to-br
                      from-green-400
                      via-green-600
                      to-green-800
                      text-white
                      shadow-[0_15px_35px_rgba(34,197,94,0.25)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      group-hover:shadow-[0_20px_50px_rgba(34,197,94,0.4)]
                    "
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="relative mt-8">
                    <h3
                      className="
                        text-2xl
                        font-black
                        tracking-tight
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-green-300
                      "
                    >
                      {value.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-green-50/65">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-8
                      right-8
                      h-1
                      origin-left
                      scale-x-0
                      rounded-full
                      bg-gradient-to-r
                      from-green-400
                      via-green-500
                      to-lime-300
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
