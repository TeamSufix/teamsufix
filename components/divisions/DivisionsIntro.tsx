import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";

export default function DivisionsIntro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-green-100/60 blur-[140px]" />

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-green-600" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                One Connected Organization
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
              Different expertise.
              <span className="block bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                Shared purpose.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-200 to-transparent" />

            <div className="pl-8">
              <p className="text-xl leading-9 text-slate-700">
                Our divisions are built around specialized expertise, but they
                are connected by one shared goal:
                <span className="font-semibold text-green-700">
                  {" "}
                  delivering practical solutions that create meaningful value.
                </span>
              </p>

              <p className="mt-6 leading-8 text-slate-500">
                Whether you need a Digital Platform, Engineering Expertise,
                Architectural Design, Construction delivery or strategic
                guidance, TeamSufix gives you access to a multidisciplinary
                ecosystem under one trusted brand.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                One ecosystem. Many possibilities.
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
