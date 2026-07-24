import { Headphones, Leaf, Lightbulb, ShieldCheck, Users } from "lucide-react";

import Container from "@/components/ui/Container";

const standards = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "We apply structured thinking, professional standards and careful review to improve the quality of our work.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore better technologies, ideas and methods to create more effective solutions.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We consider long-term impact and encourage solutions that create lasting value for people and the environment.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "Our relationship with clients does not have to end when a project is delivered. We support continued growth and improvement.",
  },
  {
    icon: Users,
    title: "Professional Expertise",
    description:
      "Our multidisciplinary approach allows clients to access different areas of expertise through one trusted partner.",
  },
];

export default function WhyTeamSufixStandards() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 py-28 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-green-600/10 blur-[160px]" />

        <div
          className="
            absolute inset-0 opacity-[0.035]
            [background-image:linear-gradient(rgba(74,222,128,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.5)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
              How We Work
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight md:text-5xl">
              Standards that guide
              <span className="block text-green-400">everything we do.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-100/65">
              Our commitment extends beyond completing projects. We aim to build
              trust, create value and deliver solutions that continue to matter.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {standards.map((standard, index) => {
              const Icon = standard.icon;

              return (
                <div
                  key={standard.title}
                  className="
                    group relative overflow-hidden
                    rounded-[32px]
                    border border-green-400/15
                    bg-green-900/40
                    p-7
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:border-green-400/50
                    hover:bg-green-800/50
                  "
                >
                  <span className="absolute right-5 top-4 text-5xl font-black text-green-400/10">
                    0{index + 1}
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400 transition-all duration-500 group-hover:rotate-3 group-hover:bg-green-400 group-hover:text-green-950">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="relative mt-7 text-lg font-bold text-white">
                    {standard.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-green-100/60">
                    {standard.description}
                  </p>

                  <div className="mt-7 h-px w-8 bg-green-400/40 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
