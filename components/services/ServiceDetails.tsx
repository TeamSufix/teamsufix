import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { serviceCategories } from "@/lib/services";

export default function ServiceDetails() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-lime-100/40 blur-[140px]" />

      <Container>
        <div className="relative space-y-28">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                id={category.slug}
                key={category.slug}
                className="scroll-mt-28"
              >
                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
                  {/* Intro */}
                  <div className="lg:sticky lg:top-32">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-950 via-green-800 to-green-500 text-white shadow-[0_20px_50px_rgba(21,128,61,0.25)]">
                      <Icon size={30} strokeWidth={1.6} />
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="text-sm font-black tracking-[0.25em] text-green-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px w-16 bg-green-300" />

                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Expertise Area
                      </span>
                    </div>

                    <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                      {category.title}
                    </h2>

                    <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={service.title}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-[28px]
                          border
                          border-slate-200
                          bg-white
                          p-7
                          shadow-[0_10px_40px_rgba(15,23,42,0.04)]
                          transition-all
                          duration-500
                          hover:-translate-y-2
                          hover:border-green-600
                          hover:bg-gradient-to-br
                          hover:from-green-950
                          hover:via-green-900
                          hover:to-green-800
                          hover:shadow-[0_25px_70px_rgba(21,128,61,0.2)]
                        "
                      >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative">
                          <div className="flex items-start justify-between">
                            <span className="text-xs font-black tracking-[0.2em] text-green-700/60 transition-colors duration-500 group-hover:text-green-300/70">
                              {String(serviceIndex + 1).padStart(2, "0")}
                            </span>

                            <ArrowUpRight
                              size={18}
                              className="text-slate-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-300"
                            />
                          </div>

                          <h3 className="mt-8 font-black text-slate-950 transition-colors duration-500 group-hover:text-white">
                            {service.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors duration-500 group-hover:text-green-50/70">
                            {service.description}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-7 right-7 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-400 to-lime-300 transition-transform duration-500 group-hover:scale-x-100" />
                      </div>
                    ))}
                  </div>
                </div>

                {index !== serviceCategories.length - 1 && (
                  <div className="mt-28 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
