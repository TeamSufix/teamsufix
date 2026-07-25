import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function DivisionDetails({ division }: any) {
  return (
    <div className="w-full max-w-xl">
      {/* Badge */}

      <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 sm:px-5">
        <Sparkles size={16} className="shrink-0 text-green-700" />

        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700 sm:text-sm sm:tracking-[0.2em]">
          Business Division
        </span>
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
        {division.title}
      </h2>

      {/* Description */}

      <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
        {division.description}
      </p>

      {/* Services */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {division.services.map((service: string) => (
          <div key={service} className="flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-green-600"
            />

            <span className="font-medium leading-6 text-slate-700">
              {service}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link
          href={division.href}
          className="group inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-green-900 via-green-700 to-green-500 px-6 font-semibold text-white shadow-[0_15px_45px_rgba(22,163,74,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(22,163,74,.45)] sm:w-auto"
        >
          Explore Division
          <ArrowRight
            size={18}
            className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/contact"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-green-200 bg-white px-6 font-semibold text-slate-700 transition hover:border-green-500 hover:bg-green-50 sm:w-auto"
        >
          Contact Team
        </Link>
      </div>

      {/* Metrics */}

      <div className="mt-16 grid grid-cols-3 gap-4 border-t border-green-100 pt-8 sm:gap-6">
        <div>
          <h3 className="text-lg font-black text-green-700 sm:text-xl">50+</h3>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">Services</p>
        </div>

        <div>
          <h3 className="text-lg font-black text-green-700 sm:text-xl">24/7</h3>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">Support</p>
        </div>

        <div>
          <h3 className="text-lg font-black text-green-700 sm:text-xl">
            End-to-End
          </h3>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">Delivery</p>
        </div>
      </div>
    </div>
  );
}
