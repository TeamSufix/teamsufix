import {
  Building2,
  Code2,
  Compass,
  Hammer,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";

const divisions = [
  {
    icon: Code2,
    title: "Digital",
    description: "Technology, software and digital transformation.",
  },
  {
    icon: Building2,
    title: "Engineering",
    description: "Technical expertise for complex built environments.",
  },
  {
    icon: Compass,
    title: "Architecture",
    description: "Designing spaces, structures and experiences.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Turning plans and ideas into physical reality.",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description: "Strategic thinking for better decisions and growth.",
  },
];

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 py-24 md:py-32">
      {/* Ambient Background Glows */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-green-500/20 blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-lime-400/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[160px]" />

      {/* Technical Grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:52px_52px]" />

      <Container>
        <div className="relative">
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-green-100 shadow-lg backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-300" />
              </span>
              Our Ecosystem
            </div>

            <h2 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Different disciplines.
              <span className="block bg-gradient-to-r from-green-200 via-green-300 to-lime-300 bg-clip-text text-transparent">
                One connected vision.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-green-50/70">
              TeamSufix brings technology, engineering, design, construction and
              strategic thinking together to create solutions that work across
              disciplines.
            </p>
          </div>

          {/* Ecosystem Structure */}

          <div className="relative mx-auto mt-20 max-w-7xl">
            {/* Central Connecting Line */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[85%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-green-300/40 to-transparent lg:block" />

            {/* Central Glow */}

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/20 blur-3xl lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {divisions.map((division, index) => {
                const Icon = division.icon;

                return (
                  <div
                    key={division.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.07]
                      p-7
                      text-center
                      shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:border-green-300/50
                      hover:bg-white/[0.12]
                      hover:shadow-[0_30px_80px_rgba(34,197,94,0.18)]
                    "
                  >
                    {/* Hover Glow */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    {/* Number */}

                    <span className="absolute right-5 top-5 text-xs font-black tracking-[0.25em] text-green-300/40 transition-colors duration-300 group-hover:text-green-300">
                      0{index + 1}
                    </span>

                    {/* Icon */}

                    <div
                      className="
                        relative
                        mx-auto
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-green-300/20
                        bg-gradient-to-br
                        from-green-400/20
                        to-green-900/40
                        text-green-200
                        shadow-lg
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                        group-hover:border-green-300/50
                        group-hover:bg-green-400
                        group-hover:text-green-950
                      "
                    >
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    {/* Title */}

                    <h3 className="relative mt-6 text-xl font-black text-white">
                      {division.title}
                    </h3>

                    {/* Description */}

                    <p className="relative mt-3 text-sm leading-7 text-green-50/65">
                      {division.description}
                    </p>

                    {/* Bottom Accent */}

                    <div className="absolute bottom-0 left-7 right-7 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-300 via-green-400 to-lime-300 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Statement */}

          <div className="mx-auto mt-20 max-w-4xl">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] px-8 py-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-16">
              {/* Decorative Icon */}

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-green-300/20 bg-green-400/10 text-green-300">
                <Sparkles size={22} />
              </div>

              <p className="mt-6 text-xl font-semibold leading-8 text-white md:text-2xl md:leading-10">
                When expertise works together,
                <span className="block bg-gradient-to-r from-green-200 to-lime-300 bg-clip-text text-transparent">
                  bigger possibilities emerge.
                </span>
              </p>

              <div className="mx-auto mt-7 h-px w-24 bg-gradient-to-r from-transparent via-green-300 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
