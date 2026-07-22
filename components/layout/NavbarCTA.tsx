import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NavbarCTA() {
  return (
    <Link
      href="/contact"
      className="
        group
        relative
        inline-flex
        h-11
        min-w-[150px]
        items-center
        justify-center
        overflow-hidden
        whitespace-nowrap
        rounded-2xl
        bg-gradient-to-r
        from-emerald-700
        via-green-600
        to-lime-500
        px-6
        text-[15px]
        font-semibold
        tracking-wide
        text-white
        shadow-[0_18px_45px_rgba(22,163,74,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_28px_60px_rgba(22,163,74,0.45)]
        active:translate-y-0
      "
    >
      {/* Shine */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/25
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      {/* Border Glow */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-white/15
        "
      />

      {/* Content */}
      <span className="relative inline-flex items-center gap-3 whitespace-nowrap">
        <span>Get Started</span>

        <ArrowRight
          size={18}
          className="
            shrink-0
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </span>
    </Link>
  );
}
