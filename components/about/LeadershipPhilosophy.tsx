import {
  Compass,
  HeartHandshake,
  LineChart,
  Sparkles,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Lead with Purpose",
    description:
      "We believe leadership begins with a clear understanding of why the work matters and who it is meant to serve.",
  },
  {
    number: "02",
    icon: Users,
    title: "Empower People",
    description:
      "Great work is built by capable people. We create an environment where expertise, ideas and initiative can grow.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Think Long-Term",
    description:
      "We look beyond immediate results to build solutions, partnerships and systems that create lasting value.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Build Trust",
    description:
      "We lead through accountability, transparency and a commitment to doing what we say we will do.",
  },
];

export default function LeadershipPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Ambient Background Glows */}

      <div className="pointer-events-none absolute -left-48 top-1/3 h-[520px] w-[520px] rounded-full bg-green-100/60 blur-[140px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-green-50 blur-[120px]" />

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* LEFT CONTENT */}

          <div className="relative">
            {/* Eyebrow */}

            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
              </span>
              How We Lead
            </div>

            {/* Heading */}

            <h2 className="mt-7 max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Leadership that
              <span className="block bg-gradient-to-r from-green-900 via-green-700 to-green-500 bg-clip-text text-transparent">
                creates possibilities.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              At TeamSufix, leadership is not about having all the answers. It
              is about creating the clarity, trust and environment needed for
              great people to solve meaningful problems together.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-500">
              We combine strategic thinking with practical execution, bringing
              together different disciplines to create solutions that are
              thoughtful, useful and built to last.
            </p>

            {/* Philosophy Quote */}

            <div className="mt-10 max-w-xl rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-[0_20px_60px_rgba(22,163,74,0.08)]">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                    Our Philosophy
                  </p>

                  <p className="mt-2 text-base font-medium leading-7 text-slate-700">
                    Create the conditions for great people to do meaningful
                    work.
                  </p>
                </div>
              </div>
            </div>

            {/* Accent */}

            <div className="mt-10 h-1 w-24 rounded-full bg-gradient-to-r from-green-900 via-green-600 to-green-400" />
          </div>

          {/* RIGHT PRINCIPLES */}

          <div className="relative">
            {/* Background Panel */}

            <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-green-50 via-white to-green-100/60 blur-2xl" />

            <div className="relative grid gap-5 sm:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-slate-200/80
                      bg-white/90
                      p-7
                      shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-green-300
                      hover:shadow-[0_25px_70px_rgba(22,163,74,0.14)]
                    "
                  >
                    {/* Hover Glow */}

                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-200/40 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    {/* Number */}

                    <span className="absolute right-6 top-5 text-xs font-black tracking-[0.25em] text-green-200 transition-colors duration-300 group-hover:text-green-400">
                      {principle.number}
                    </span>

                    {/* Icon */}

                    <div
                      className="
                        relative
                        flex
                        h-14
                        w-14
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
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    {/* Content */}

                    <h3 className="relative mt-7 text-xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-green-700">
                      {principle.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-600">
                      {principle.description}
                    </p>

                    {/* Bottom Accent */}

                    <div className="absolute bottom-0 left-7 right-7 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-900 via-green-600 to-green-400 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
