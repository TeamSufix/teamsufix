import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950 pb-24 pt-36 text-white md:pb-32 md:pt-44">
      {/* Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[620px] w-[620px] rounded-full bg-green-500/20 blur-[150px]" />

        <div className="absolute -bottom-60 -left-40 h-[520px] w-[520px] rounded-full bg-green-700/20 blur-[140px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <Container>
        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-300 backdrop-blur-md sm:text-sm">
            <Sparkles size={15} />
            Let's Work Together
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Let&apos;s build
            <span className="block text-green-400">something meaningful.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-green-100/70 sm:text-lg">
            Whether you have a project idea, need professional advice or want to
            explore a partnership, our team is ready to hear from you.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#contact-form"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-green-400 px-7 py-4 font-bold text-green-950 shadow-[0_20px_60px_rgba(74,222,128,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-green-300"
            >
              Send a Message
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact-details"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:text-green-300"
            >
              Contact Details
            </Link>
          </div>

          {/* Bottom Scroll Indicator */}
          <a
            href="#contact-details"
            className="mx-auto mt-20 inline-flex items-center gap-3 text-sm font-semibold text-green-300/70 transition hover:text-green-300"
          >
            Explore ways to connect
            <ArrowDown size={17} className="animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
}
