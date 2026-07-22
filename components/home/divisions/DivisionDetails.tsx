import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function DivisionDetails({ division }: any) {
  return (
    <div className="max-w-xl">
      {/* Badge */}

      <div
        className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-green-200
        bg-green-50
        px-5
        py-2
        "
      >
        <Sparkles size={16} className="text-green-700" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          Business Division
        </span>
      </div>

      {/* Heading */}

      <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">
        {division.title}
      </h2>

      {/* Description */}

      <p className="mt-8 text-lg leading-8 text-slate-600">
        {division.description}
      </p>

      <br />

      {/* Services */}

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {division.services.map((service: string) => (
          <div key={service} className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-green-600" />

            <span className="font-medium text-slate-700">{service}</span>
          </div>
        ))}
      </div>

      <br />

      {/* CTA */}

      <div className="mt-12 flex flex-wrap gap-5">
        <Link
          href={division.href}
          className="
          group
          inline-flex
          h-10
          w-55
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          from-green-900
          via-green-700
          to-green-500
          px-8
          font-semibold
          text-white
          shadow-[0_15px_45px_rgba(22,163,74,.35)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_20px_55px_rgba(22,163,74,.45)]
          "
        >
          Explore Division
          <ArrowRight
            size={18}
            className="
            ml-3
            transition-transform
            duration-300
            group-hover:translate-x-1
            "
          />
        </Link>

        <Link
          href="/contact"
          className="
          inline-flex
          h-10
          w-50
          items-center
          justify-center
          rounded-2xl
          border
          border-green-200
          bg-white
          px-8
          font-semibold
          text-slate-700
          transition
          hover:border-green-500
          hover:bg-green-50
          "
        >
          Contact Team
        </Link>
      </div>

      <br />

      {/* Metrics */}

      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-green-100 pt-8">
        <div>
          <h3 className="text-xl font-black text-green-700">50+</h3>

          <p className="mt-2 text-sm text-slate-500">Services</p>
        </div>

        <div>
          <h3 className="text-xl font-black text-green-700">24/7</h3>

          <p className="mt-2 text-sm text-slate-500">Support</p>
        </div>

        <div>
          <h3 className="text-xl font-black text-green-700">End-to-End</h3>

          <p className="mt-2 text-sm text-slate-500">Delivery</p>
        </div>
      </div>
    </div>
  );
}
