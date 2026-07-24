import Container from "@/components/ui/Container";
import { processSteps } from "./process.data";

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="relative isolate overflow-hidden bg-green-50 py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-green-200/50 blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-100/80 blur-[120px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-6xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-green-300 to-transparent lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.title}
                  className={`relative lg:flex lg:min-h-[360px] lg:items-center ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-green-50 bg-green-950 text-sm font-black text-green-400 shadow-[0_0_0_8px_rgba(21,128,61,0.08),0_15px_40px_rgba(5,46,22,0.3)]">
                      {step.number}

                      <div className="absolute inset-0 animate-pulse rounded-full bg-green-400/10" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-green-200/70
                      bg-white/90
                      p-7
                      shadow-[0_15px_50px_rgba(21,128,61,0.06)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-green-400
                      hover:shadow-[0_30px_80px_rgba(21,128,61,0.16)]
                      sm:p-9
                      lg:w-[43%]
                    "
                  >
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-100/70 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-green-200/80" />

                    <div className="relative">
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-950 to-green-600 text-green-300 shadow-lg shadow-green-900/15 transition-all duration-300 group-hover:scale-105 group-hover:text-white">
                          <Icon size={28} strokeWidth={1.7} />
                        </div>

                        <span className="text-6xl font-black leading-none text-green-100 transition-colors duration-300 group-hover:text-green-200">
                          {step.number}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <p className="mt-8 text-xs font-black uppercase tracking-[0.22em] text-green-700">
                        {step.subtitle}
                      </p>

                      {/* Title */}
                      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                        {step.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-5 leading-8 text-slate-600">
                        {step.description}
                      </p>

                      {/* Outcome */}
                      <div className="mt-7 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-5">
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-green-700">
                          Expected Outcome
                        </p>

                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
