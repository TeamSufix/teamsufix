import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";

interface DivisionServicesProps {
  services: string[];
}

export default function DivisionServices({ services }: DivisionServicesProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Architecture */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-green-100/60 blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-lime-100/50 blur-[140px]" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-bold text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_10px_rgba(22,163,74,0.5)]" />
              What We Do
            </div>

            <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Services built to
              <span className="block bg-gradient-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent">
                move projects forward.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore the capabilities and services we bring together to help
              turn complex challenges into practical outcomes.
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-14 flex items-center gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-200 to-green-300" />

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
            </div>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-green-200 to-green-300" />
          </div>

          {/* Services */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-green-600
                  hover:bg-gradient-to-br
                  hover:from-green-950
                  hover:via-green-900
                  hover:to-green-800
                  hover:shadow-[0_25px_70px_rgba(21,128,61,0.25)]
                "
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/20 opacity-0 blur-[70px] transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-xs font-black text-green-700 transition-all duration-500 group-hover:bg-white/10 group-hover:text-green-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-bold text-slate-800 transition-colors duration-500 group-hover:text-white">
                      {service}
                    </span>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-500 group-hover:border-green-400/30 group-hover:bg-white/10 group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-400 via-lime-300 to-green-500 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
