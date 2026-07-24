import {
  Award,
  BrainCircuit,
  Handshake,
  Layers3,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

const advantages = [
  {
    icon: Layers3,
    number: "01",
    title: "Multidisciplinary Expertise",
    description:
      "Technology, engineering, architecture, construction and consulting expertise working together under one organization.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Solutions That Think Ahead",
    description:
      "We do not only solve today's problems. We design solutions with future growth, adaptability and sustainability in mind.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Quality-Driven Delivery",
    description:
      "Our approach prioritizes accuracy, accountability, professional standards and continuous improvement.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Partnership Mindset",
    description:
      "We work alongside our clients to understand their goals, challenges and opportunities before designing solutions.",
  },
  {
    icon: Users,
    number: "05",
    title: "People-Centered Thinking",
    description:
      "The best solutions work for real people. We consider users, teams, communities and stakeholders in our work.",
  },
  {
    icon: Award,
    number: "06",
    title: "Professional Excellence",
    description:
      "We combine technical knowledge, creativity and practical experience to deliver meaningful results.",
  },
];

export default function WhyTeamSufixAdvantages() {
  return (
    <section className="relative overflow-hidden bg-green-50 py-28 md:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-green-200/60 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-100 blur-[140px]" />

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-700 shadow-sm sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              What Sets Us Apart
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-green-950 md:text-5xl">
              Built to solve problems
              <span className="block text-green-700">from every angle.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-900/60">
              Our strength comes from connecting different areas of expertise
              and applying them to the real challenges our clients face.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <div
                  key={advantage.title}
                  className="
                    group relative overflow-hidden
                    rounded-[32px]
                    border border-green-200/70
                    bg-white p-8
                    shadow-[0_10px_40px_rgba(21,128,61,0.04)]
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:border-green-400
                    hover:shadow-[0_30px_80px_rgba(21,128,61,0.16)]
                  "
                >
                  {/* Number */}
                  <span className="absolute right-7 top-5 text-6xl font-black tracking-tight text-green-100 transition-colors duration-500 group-hover:text-green-200">
                    {advantage.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-green-100 bg-green-50 text-green-700 transition-all duration-500 group-hover:rotate-3 group-hover:bg-green-700 group-hover:text-white">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h3 className="relative mt-8 text-xl font-black text-green-950">
                    {advantage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-green-900/60">
                    {advantage.description}
                  </p>

                  <div className="mt-8 h-1 w-10 rounded-full bg-green-200 transition-all duration-500 group-hover:w-24 group-hover:bg-green-600" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
