import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

export default function CareersCTA() {
  return (
    <section className="bg-green-50 py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-green-950 via-green-900 to-green-800 px-8 py-14 shadow-[0_30px_100px_rgba(5,46,22,0.25)] md:px-16 md:py-20">
          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-400/20 blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-600/20 blur-[120px]" />

          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.04]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:64px_64px]
            "
          />

          <div className="relative flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400">
                <BriefcaseBusiness size={30} />
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
                <Sparkles size={15} />
                Join the TeamSufix Ecosystem
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
                Build the future
                <span className="block text-green-400">with TeamSufix.</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-green-100/70">
                We are always interested in connecting with talented, passionate
                and forward thinking professionals.
              </p>

              <p className="mt-4 leading-7 text-green-100/60">
                Even when there is no listed vacancy, you are welcome to
                introduce yourself and share how you could contribute to the
                TeamSufix ecosystem.
              </p>
            </div>

            <a
              href="mailto:teamsufix31@gmail.com?subject=Career%20Application%20-%20TeamSufix"
              className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-green-400 px-7 py-4 font-bold text-green-950 shadow-[0_20px_50px_rgba(74,222,128,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-300"
            >
              Apply to Join Us
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
