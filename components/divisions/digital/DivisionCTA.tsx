import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

interface DivisionCTAProps {
  title: string;
  description: string;
}

export default function DivisionCTA({ title, description }: DivisionCTAProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">
      <Container>
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-green-800/40
            bg-gradient-to-br
            from-[#052e16]
            via-[#14532d]
            to-[#15803d]
            px-6
            py-16
            text-center
            shadow-[0_30px_100px_rgba(5,46,22,0.25)]
            sm:px-12
            md:px-16
            md:py-20
            lg:py-24
          "
        >
          {/* Background grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.06]
              [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
              [background-size:48px_48px]
            "
          />

          {/* Top glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-300/20 blur-[100px] transition duration-700 group-hover:bg-green-300/30" />

          {/* Bottom glow */}
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-lime-300/10 blur-[100px]" />

          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-white/10 lg:block" />

          <div className="pointer-events-none absolute -right-12 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full border border-white/10 lg:block" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-300/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-200 backdrop-blur-md">
              <Sparkles size={15} />
              Let's Work Together
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-50/70 sm:text-lg">
              {description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/request-quote"
                className="
                  group/button
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  font-bold
                  text-green-950
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-300
                  hover:shadow-2xl
                "
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/5
                  px-7
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white/40
                  hover:bg-white/10
                "
              >
                Contact TeamSufix
              </Link>
            </div>

            {/* Bottom statement */}
            <div className="mt-12 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-green-300/70">
              <span className="h-px w-8 bg-green-300/40" />
              From possibility to progress
              <span className="h-px w-8 bg-green-300/40" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
