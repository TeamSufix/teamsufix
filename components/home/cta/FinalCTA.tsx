import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* BACKGROUND ATMOSPHERE */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[600px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-green-100/50
        blur-[140px]
        "
      />

      <Container>
        <div
          className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-green-800/30
          bg-gradient-to-br
          from-[#03190d]
          via-[#052e16]
          to-[#15803d]
          px-8
          py-16
          text-white
          shadow-[0_30px_100px_rgba(5,46,22,.25)]
          sm:px-12
          lg:px-20
          lg:py-24
          "
        >
          {/* GRID TEXTURE */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.05]
            bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
            bg-[size:48px_48px]
            "
          />

          {/* TOP RIGHT GLOW */}

          <div
            className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-green-400/20
            blur-[120px]
            "
          />

          {/* BOTTOM LEFT GLOW */}

          <div
            className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-lime-300/10
            blur-[120px]
            "
          />

          {/* DECORATIVE RINGS */}

          <div
            className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-96
            w-96
            rounded-full
            border
            border-white/10
            "
          />

          <div
            className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-72
            w-72
            rounded-full
            border
            border-white/10
            "
          />

          {/* CONTENT */}

          <div className="relative mx-auto max-w-4xl text-center">
            {/* BADGE */}

            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-300/20
              bg-white/[0.08]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-green-100
              backdrop-blur-md
              "
            >
              <span
                className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-green-400/20
                "
              >
                <Sparkles size={14} className="text-green-300" />
              </span>
              Let's Build What Comes Next
            </div>

            {/* HEADING */}

            <h2
              className="
              mx-auto
              mt-8
              max-w-4xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
              "
            >
              Big Ideas Deserve
              <span className="block text-green-300">the Right Execution.</span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-green-50/75
              "
            >
              Whether you are starting something new, solving a complex
              challenge or looking to move your organization forward, our
              multidisciplinary team is ready to help turn possibility into
              progress.
            </p>

            {/* VALUE POINTS */}

            <div
              className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-x-6
              gap-y-3
              text-sm
              text-green-100/80
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                Strategic thinking
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                Technical expertise
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                End-to-end delivery
              </div>
            </div>

            {/* BUTTONS */}

            <div
              className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
              "
            >
              <Link
                href="/request-quote"
                className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-white
                px-8
                font-bold
                text-green-900
                shadow-[0_15px_40px_rgba(0,0,0,.2)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(0,0,0,.3)]
                "
              >
                Start a Conversation
                <ArrowRight
                  size={19}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/contact"
                className="
                group
                inline-flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-xl
                border
                border-white/20
                bg-white/[0.06]
                px-8
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/40
                hover:bg-white/[0.12]
                "
              >
                Contact TeamSufix
                <ArrowUpRight
                  size={18}
                  className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* BRAND MOTTO */}

            <div className="mt-14">
              <div className="mx-auto mb-5 h-px max-w-xs bg-gradient-to-r from-transparent via-green-300/30 to-transparent" />

              <p
                className="
                text-xs
                font-bold
                uppercase
                tracking-[0.35em]
                text-green-300/80
                "
              >
                Imagine · Design · Develop · Deliver
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
