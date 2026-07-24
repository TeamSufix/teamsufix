import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-[140px]" />

      <Container>
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-green-950
            via-green-800
            to-green-600
            px-8
            py-16
            text-center
            shadow-[0_30px_100px_rgba(21,128,61,0.22)]
            sm:px-12
            md:px-16
            md:py-24
          "
        >
          {/* Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.05]
              [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
              [background-size:56px_56px]
            "
          />

          {/* Rings */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

          {/* Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-green-400/20 blur-[120px]" />

          <div className="relative mx-auto max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-green-100 backdrop-blur-xl">
              <Sparkles size={15} className="text-green-300" />
              Let's Build What Comes Next
            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              Have a challenge
              <span className="block text-green-300">worth solving?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-green-50/75">
              Tell us what you are working on and let's explore how the right
              combination of expertise can move it forward.
            </p>

            <Link
              href="/request-quote"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-white
                px-8
                py-4
                font-black
                text-green-950
                shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-green-400
                hover:text-white
              "
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-10 text-xs font-black uppercase tracking-[0.3em] text-green-200/70">
              Imagine · Design · Develop · Deliver
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
