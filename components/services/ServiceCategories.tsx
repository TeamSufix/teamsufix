import Container from "@/components/ui/Container";

import ServiceCategoryCard from "./ServiceCategoryCard";
import { serviceCategories } from "@/lib/services";

export default function ServiceCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Architecture */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-green-100/60 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-100/50 blur-[140px]" />

      {/* Architectural Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-green-700 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_12px_rgba(22,163,74,0.6)]" />
              Our Capabilities
            </div>

            <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
              One partner.
              <span className="block bg-gradient-to-r from-green-800 via-green-600 to-green-500 bg-clip-text text-transparent">
                Multiple areas of expertise.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Our services are organized around the disciplines that help
              organizations create, improve and grow.
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-14 flex max-w-5xl items-center gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-200 to-green-300" />

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-white text-green-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
            </div>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-green-200 to-green-300" />
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div
                key={category.slug}
                className={index === 0 ? "lg:col-span-2" : ""}
              >
                <ServiceCategoryCard category={category} />
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="mx-auto mt-20 flex max-w-4xl items-center gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-green-200" />

            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-green-700">
                Connected Expertise
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Coordinated delivery. Meaningful impact.
              </p>
            </div>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-green-200" />
          </div>
        </div>
      </Container>
    </section>
  );
}
