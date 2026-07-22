import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DivisionCard({ division }: any) {
  const Icon = division.icon;

  return (
    <div
      className="
      group
      flex
      h-full
      flex-col
      overflow-hidden
      rounded-[10px]
      bg-white
      shadow-[0_18px_50px_rgba(0,0,0,.08)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-[0_28px_80px_rgba(0,0,0,.15)]
      "
    >
      {/* Top Panel */}

      <div
        className="
        relative
        flex
        h-44
        items-center
        justify-center
        bg-gradient-to-br
        from-green-50
        via-white
        to-green-100
        "
      >
        <div
          className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-white
          text-green-700
          shadow-xl
          transition
          duration-500
          group-hover:scale-110
          "
        >
          <Icon size={42} />
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-8">
        <h3 className="text-2xl font-bold text-slate-900">{division.title}</h3>

        <p className="mt-4 leading-7 text-slate-600">{division.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {division.services.slice(0, 3).map((service: string) => (
            <span
              key={service}
              className="
              rounded-full
              bg-green-50
              px-3
              py-1.5
              text-xs
              font-semibold
              text-green-700
              "
            >
              {service}
            </span>
          ))}
        </div>

        <Link
          href={division.href}
          className="
          mt-auto
          inline-flex
          items-center
          pt-8
          text-sm
          font-bold
          text-green-700
          transition
          hover:text-green-900
          "
        >
          Explore Division
          <ArrowRight
            size={18}
            className="
            ml-2
            transition-transform
            duration-300
            group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </div>
  );
}
