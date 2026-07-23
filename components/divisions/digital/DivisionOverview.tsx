import { CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";

interface DivisionOverviewProps {
  title: string;
  description: string;
  benefits: string[];
}

export default function DivisionOverview({
  title,
  description,
  benefits,
}: DivisionOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-green-500/15 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[140px]" />

      {/* Architectural Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <Container>
        <div className="relative grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-green-400/25 bg-white/[0.08] px-5 py-2.5 text-sm font-bold text-green-100 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
              Overview
            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Expertise designed
              <span className="block bg-gradient-to-r from-green-300 to-lime-300 bg-clip-text text-transparent">
                around your goals.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-green-50/75">
              {description}
            </p>

            <div className="mt-10 h-1 w-20 rounded-full bg-gradient-to-r from-green-400 to-lime-300" />
          </div>

          {/* Benefits Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-xl md:p-10">
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-400/20 blur-[80px]" />

            <div className="relative">
              <h3 className="text-2xl font-black text-white">
                Why work with us?
              </h3>

              <div className="mt-8 space-y-5">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-green-400/30 hover:bg-white/[0.1]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green-400/15 text-green-300">
                      <CheckCircle2 size={18} />
                    </div>

                    <p className="pt-1 text-sm leading-7 text-green-50/80">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
