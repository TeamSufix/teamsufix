import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

export default function WhyTeamSufixCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28 md:py-36">
      <Container>
        <div className="relative overflow-hidden rounded-[44px] bg-green-950 px-8 py-20 text-center shadow-[0_35px_120px_rgba(5,46,22,0.22)] sm:px-12 md:px-20 md:py-28">
          {/* Atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-32 h-[550px] w-[550px] rounded-full bg-green-500/20 blur-[140px]" />

            <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-green-700/20 blur-[140px]" />

            <div
              className="
                absolute inset-0 opacity-[0.04]
                [background-image:linear-gradient(rgba(74,222,128,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.5)_1px,transparent_1px)]
                [background-size:56px_56px]
              "
            />

            <div className="absolute right-12 top-12 h-24 w-24 rounded-full border border-green-400/20" />

            <div className="absolute bottom-12 left-12 h-16 w-16 rounded-full border border-green-400/20" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-300">
              <Sparkles size={15} />
              Let's Build What Comes Next
            </div>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
              Have a challenge
              <span className="block text-green-400">worth solving?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100/65">
              Tell us what you are working on. Our team can help you explore the
              right path forward.
            </p>

            <Link
              href="/request-quote"
              className="
                group mt-10 inline-flex items-center gap-3
                rounded-2xl bg-green-400 px-8 py-4
                font-bold text-green-950
                shadow-[0_20px_60px_rgba(74,222,128,0.2)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-green-300
                hover:shadow-[0_25px_80px_rgba(74,222,128,0.35)]
              "
            >
              Start a Conversation
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <div className="mx-auto mt-12 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-green-200/50">
              <span className="h-px w-10 bg-green-400/30" />
              Imagine · Design · Develop · Deliver
              <span className="h-px w-10 bg-green-400/30" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
