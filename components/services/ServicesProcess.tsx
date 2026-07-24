import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

const process = [
  {
    number: "01",
    title: "Imagine",
    description:
      "We listen, ask the right questions and understand the challenge behind the request.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We develop a clear solution that balances goals, resources, requirements and possibilities.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team applies the required expertise to develop, engineer, design or deliver the solution.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We complete the work with a focus on quality, communication and long term value.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-24 text-white md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-green-500/15 blur-[160px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/25 bg-white/[0.06] px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-green-200 backdrop-blur-xl sm:text-sm">
              <Sparkles size={15} className="text-green-400" />
              How We Work
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
              From challenge
              <span className="block bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                to outcome.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-green-100/65">
              Whatever the discipline, our approach is built around clarity,
              collaboration and dependable delivery.
            </p>
          </div>

          {/* Process */}
          <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting Line */}
            <div className="absolute left-[12%] right-[12%] top-[76px] hidden h-px bg-gradient-to-r from-green-900 via-green-400/60 to-green-900 lg:block" />

            {process.map((step) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-green-400/40
                  hover:bg-green-900/60
                  hover:shadow-[0_25px_70px_rgba(74,222,128,0.12)]
                "
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-5xl font-black text-green-400/50 transition-colors duration-500 group-hover:text-green-300">
                    {step.number}
                  </span>

                  <ArrowRight
                    size={19}
                    className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-300"
                  />
                </div>

                <div className="relative z-10 mt-8 h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

                <h3 className="relative z-10 mt-6 text-xl font-black">
                  {step.title}
                </h3>

                <p className="relative z-10 mt-4 text-sm leading-7 text-green-100/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
