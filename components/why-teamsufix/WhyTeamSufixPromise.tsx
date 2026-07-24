import { CheckCircle2, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

const promises = [
  "We listen before we recommend.",
  "We focus on practical outcomes.",
  "We communicate clearly throughout the process.",
  "We take quality seriously.",
  "We design for long-term value.",
  "We stand behind the work we deliver.",
];

export default function WhyTeamSufixPromise() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-green-100/60 blur-[140px]" />

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-green-700 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Our Promise
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-green-950 md:text-5xl">
              Every project deserves
              <span className="block text-green-700">
                thoughtful execution.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-900/60">
              Our promise is simple: to bring clarity, expertise and commitment
              to every engagement, regardless of the size or complexity of the
              project.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-bold text-green-700">
              <Sparkles size={17} />
              Built on trust. Delivered with purpose.
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] bg-green-950 p-3 shadow-[0_35px_100px_rgba(5,46,22,0.22)]">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-green-500/20 blur-[100px]" />

            <div className="relative rounded-[32px] border border-green-400/15 bg-green-900/40 p-6 backdrop-blur-xl sm:p-9">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                  The TeamSufix Standard
                </span>

                <span className="text-xs font-bold text-green-400/50">
                  06 PRINCIPLES
                </span>
              </div>

              <div className="space-y-3">
                {promises.map((promise, index) => (
                  <div
                    key={promise}
                    className="
                      group flex items-center gap-4
                      rounded-2xl border border-white/10
                      bg-white/[0.04] p-4
                      transition-all duration-300
                      hover:border-green-400/30
                      hover:bg-green-400/10
                    "
                  >
                    <span className="text-xs font-black text-green-400/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-green-400"
                    />

                    <span className="text-sm font-medium text-green-50/80">
                      {promise}
                    </span>
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
