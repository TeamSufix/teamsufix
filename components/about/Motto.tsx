import {
  ArrowUpRight,
  Compass,
  DraftingCompass,
  Rocket,
  Wrench,
} from "lucide-react";

import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Imagine",
    description:
      "We begin by understanding the challenge, exploring possibilities and imagining what could be achieved.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We transform ideas into clear strategies, thoughtful designs and practical solutions.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We bring solutions to life through technical expertise, collaboration and disciplined execution.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We focus on creating outcomes that work, create value and continue to make an impact.",
    icon: Rocket,
  },
];

export default function Motto() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-slate-50
      py-28
      lg:py-36
      "
    >
      {/* BACKGROUND GRID */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.035]
        bg-[linear-gradient(rgba(15,23,42,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.8)_1px,transparent_1px)]
        bg-[size:64px_64px]
        "
      />

      {/* BACKGROUND GLOW */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-0
        h-[600px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-green-100/60
        blur-[140px]
        "
      />

      <Container>
        <div className="relative">
          {/* HEADER */}

          <div className="mx-auto max-w-4xl text-center">
            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-200
              bg-white/80
              px-5
              py-2.5
              text-sm
              font-semibold
              text-green-700
              shadow-sm
              backdrop-blur
              "
            >
              <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_12px_rgba(22,163,74,.5)]" />
              Our Motto
            </div>

            {/* MOTTO */}

            <h2
              className="
              mt-8
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-950
              sm:text-5xl
              lg:text-7xl
              "
            >
              Imagine.
              <span className="text-green-700"> Design.</span>
              <span className="text-slate-950"> Develop.</span>
              <span className="text-green-700"> Deliver.</span>
            </h2>

            <p
              className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
              "
            >
              A simple philosophy that guides how we think, how we work and how
              we turn possibility into meaningful progress.
            </p>
          </div>

          {/* PROCESS FLOW */}

          <div className="relative mt-20">
            {/* Desktop connector */}

            <div
              className="
              pointer-events-none
              absolute
              left-[12%]
              right-[12%]
              top-[76px]
              hidden
              h-px
              bg-gradient-to-r
              from-green-200
              via-green-500
              to-green-200
              lg:block
              "
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200/80
                    bg-white/90
                    p-7
                    shadow-[0_10px_35px_rgba(15,23,42,.04)]
                    backdrop-blur
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-300
                    hover:shadow-[0_25px_60px_rgba(22,163,74,.12)]
                    "
                  >
                    {/* CARD GLOW */}

                    <div
                      className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-green-100
                      opacity-0
                      blur-3xl
                      transition
                      duration-500
                      group-hover:opacity-100
                      "
                    />

                    {/* TOP ROW */}

                    <div className="relative flex items-center justify-between">
                      <span
                        className="
                        text-xs
                        font-black
                        tracking-[0.25em]
                        text-green-600
                        "
                      >
                        {step.number}
                      </span>

                      <ArrowUpRight
                        size={20}
                        className="
                        text-slate-300
                        transition-all
                        duration-500
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-green-600
                        "
                      />
                    </div>

                    {/* ICON */}

                    <div
                      className="
                      relative
                      z-10
                      mt-8
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-green-100
                      bg-gradient-to-br
                      from-green-50
                      to-green-100
                      text-green-700
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:border-green-700
                      group-hover:from-green-700
                      group-hover:to-green-500
                      group-hover:text-white
                      group-hover:shadow-lg
                      "
                    >
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      relative
                      mt-7
                      text-2xl
                      font-black
                      tracking-tight
                      text-slate-950
                      "
                    >
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                      relative
                      mt-4
                      text-sm
                      leading-7
                      text-slate-600
                      "
                    >
                      {step.description}
                    </p>

                    {/* BOTTOM ACCENT */}

                    <div
                      className="
                      relative
                      mt-7
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-green-300
                      via-green-100
                      to-transparent
                      "
                    />

                    <p
                      className="
                      relative
                      mt-4
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                      transition
                      duration-300
                      group-hover:text-green-600
                      "
                    >
                      Step {index + 1} of 4
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* CLOSING STATEMENT */}

          <div
            className="
            mx-auto
            mt-16
            max-w-3xl
            text-center
            "
          >
            <p
              className="
              text-sm
              font-bold
              uppercase
              tracking-[0.25em]
              text-green-700
              "
            >
              From possibility to progress
            </p>

            <div
              className="
              mx-auto
              mt-5
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-green-500
              to-transparent
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
