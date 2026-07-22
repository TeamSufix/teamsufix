import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import ProcessStep from "./ProcessStep";
import { processSteps } from "./process.data";

export default function Process() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#052e16]
        via-[#14532d]
        to-[#15803d]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="pointer-events-none absolute -left-48 top-20 h-[520px] w-[520px] rounded-full bg-green-400/20 blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full bg-lime-300/10 blur-[150px]" />

      <Container>
        <div className="relative">
          <SectionHeading
            light
            badge="Our Process"
            title="From Vision To Reality."
            description="Every successful project begins with a clear understanding of the challenge and ends with a solution built to create lasting value."
          />

          <div
            className="
              mt-14
              grid
              gap-6
              sm:mt-16
              sm:grid-cols-2
              sm:gap-8
              lg:mt-20
              lg:grid-cols-4
            "
          >
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                {...step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>

          <div
            className="
              relative
              mx-auto
              mt-16
              max-w-5xl
              overflow-hidden
              rounded-[28px]
              border
              border-green-300/20
              bg-gradient-to-r
              from-white/[0.08]
              via-green-400/[0.08]
              to-white/[0.04]
              px-6
              py-8
              text-center
              shadow-[0_20px_60px_rgba(0,0,0,.15)]
              backdrop-blur-xl
              sm:mt-20
              sm:rounded-[32px]
              sm:px-12
              sm:py-10
            "
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[80px]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-300 sm:text-sm">
                The TeamSufix Approach
              </p>

              <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                From the first idea to the final outcome.
              </h3>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-lg font-bold sm:gap-5 sm:text-xl">
                <span className="text-green-300">Imagine.</span>
                <span className="text-white/30">→</span>
                <span className="text-green-300">Design.</span>
                <span className="text-white/30">→</span>
                <span className="text-green-300">Develop.</span>
                <span className="text-white/30">→</span>
                <span className="text-green-300">Deliver.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
