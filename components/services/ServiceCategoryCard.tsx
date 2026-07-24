import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ServiceCategory } from "@/lib/services";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

export default function ServiceCategoryCard({
  category,
}: ServiceCategoryCardProps) {
  const Icon = category.icon;

  return (
    <div
      className="
        group
        relative
        min-h-[390px]
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-[0_15px_50px_rgba(15,23,42,0.05)]
        transition-all
        duration-500

        hover:-translate-y-3
        hover:border-green-600
        hover:bg-gradient-to-br
        hover:from-green-950
        hover:via-green-900
        hover:to-green-800
        hover:shadow-[0_30px_90px_rgba(21,128,61,0.28)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-green-400/20
          opacity-0
          blur-[100px]
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-80
          w-80
          rounded-full
          bg-lime-400/10
          opacity-0
          blur-[110px]
          transition-all
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Grid Texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-700
          group-hover:opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="relative flex h-full flex-col">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-green-50
              text-green-700
              transition-all
              duration-500
              group-hover:rotate-3
              group-hover:scale-110
              group-hover:bg-white/15
              group-hover:text-green-300
            "
          >
            <Icon size={30} strokeWidth={1.7} />
          </div>

          <div className="text-right">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-green-600/60 transition-colors duration-500 group-hover:text-green-300/70">
              Services
            </span>

            <div className="mt-1 text-2xl font-black text-slate-900 transition-colors duration-500 group-hover:text-white">
              {String(category.services.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10">
          <h2 className="text-2xl font-black tracking-tight text-slate-950 transition-colors duration-500 group-hover:text-white">
            {category.title}
          </h2>

          <p className="mt-4 max-w-md leading-7 text-slate-600 transition-colors duration-500 group-hover:text-green-50/75">
            {category.description}
          </p>
        </div>

        {/* Services Preview */}
        <div className="mt-8 space-y-3 border-t border-slate-100 pt-6 transition-colors duration-500 group-hover:border-white/10">
          {category.services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-3 text-sm text-slate-600 transition-colors duration-500 group-hover:text-green-50/70"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600 transition-colors duration-500 group-hover:bg-green-300" />

              {service.title}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/services#${category.slug}`}
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-7
            text-sm
            font-black
            text-green-700
            transition-all
            duration-500
            group-hover:border-white/10
            group-hover:text-green-300
          "
        >
          <span>Explore Services</span>

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-green-200
              transition-all
              duration-500
              group-hover:border-green-400/40
              group-hover:bg-white/10
            "
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </span>
        </Link>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute
          bottom-0
          left-8
          right-8
          h-1
          origin-left
          scale-x-0
          rounded-full
          bg-gradient-to-r
          from-green-400
          via-lime-300
          to-green-500
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </div>
  );
}
