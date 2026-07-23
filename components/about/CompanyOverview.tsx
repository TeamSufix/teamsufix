import {
  ArrowUpRight,
  Building2,
  Code2,
  HardHat,
  Lightbulb,
} from "lucide-react";

import Container from "@/components/ui/Container";

const highlights = [
  {
    number: "01",
    icon: Code2,
    title: "Technology",
    description:
      "Digital platforms, enterprise systems and software solutions built around the way modern organizations operate.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Engineering",
    description:
      "Technical expertise and disciplined thinking applied to complex challenges and long-term development.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Infrastructure",
    description:
      "Practical solutions that connect planning, design, execution and the built environment.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Innovation",
    description:
      "New ideas, strategic thinking and creative problem-solving applied to challenges that matter.",
  },
];

export default function CompanyOverview() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#04140b]
      via-[#062f1b]
      to-[#14532d]
      py-28
      text-white
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
        bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
        bg-[size:64px_64px]
        "
      />

      {/* AMBIENT GLOWS */}

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        -top-40
        h-[600px]
        w-[600px]
        rounded-full
        bg-green-400/10
        blur-[140px]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -bottom-48
        -left-40
        h-[550px]
        w-[550px]
        rounded-full
        bg-emerald-500/10
        blur-[140px]
        "
      />

      <Container>
        <div
          className="
          relative
          grid
          gap-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-24
          "
        >
          {/* LEFT CONTENT */}

          <div>
            {/* EYEBROW */}

            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-300/20
              bg-white/[0.06]
              px-4
              py-2
              text-sm
              font-bold
              text-green-200
              backdrop-blur-md
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,.8)]" />
              Who We Are
            </div>

            {/* HEADING */}

            <h2
              className="
              mt-8
              max-w-2xl
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              sm:text-5xl
              lg:text-6xl
              "
            >
              Expertise that connects ideas to{" "}
              <span className="text-green-300">real-world impact.</span>
            </h2>

            {/* PRIMARY DESCRIPTION */}

            <p
              className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-green-50/80
              "
            >
              TeamSufix.System Consulting & Engineering is a multidisciplinary
              organization built around one simple belief: meaningful progress
              happens when knowledge, creativity and execution work together.
            </p>

            {/* SECONDARY DESCRIPTION */}

            <p
              className="
              mt-5
              max-w-xl
              leading-8
              text-green-100/60
              "
            >
              From digital platforms and enterprise systems to engineering,
              architecture, construction and strategic consulting, our ecosystem
              brings complementary expertise together to help organizations move
              from possibility to progress.
            </p>

            {/* BRAND STATEMENT */}

            <div
              className="
              mt-10
              flex
              items-center
              gap-4
              border-l-2
              border-green-400
              pl-5
              "
            >
              <div>
                <p className="text-sm font-bold text-white">One ecosystem.</p>

                <p className="mt-1 text-sm text-green-200/70">
                  Many disciplines. One direction: meaningful progress.
                </p>
              </div>

              <ArrowUpRight size={20} className="text-green-300" />
            </div>
          </div>

          {/* RIGHT CAPABILITY ECOSYSTEM */}

          <div className="relative">
            {/* Connecting line */}

            <div
              className="
              pointer-events-none
              absolute
              left-1/2
              top-8
              hidden
              h-[calc(100%-64px)]
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-green-400/20
              to-transparent
              sm:block
              "
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.06]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-300/30
                    hover:bg-white/[0.1]
                    hover:shadow-[0_25px_60px_rgba(0,0,0,.18)]
                    "
                  >
                    {/* HOVER GLOW */}

                    <div
                      className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-32
                      w-32
                      rounded-full
                      bg-green-400/20
                      opacity-0
                      blur-3xl
                      transition
                      duration-500
                      group-hover:opacity-100
                      "
                    />

                    {/* CARD HEADER */}

                    <div className="relative flex items-start justify-between">
                      <div
                        className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-green-300/20
                        bg-green-400/10
                        text-green-300
                        transition-all
                        duration-500
                        group-hover:border-green-300
                        group-hover:bg-green-400
                        group-hover:text-green-950
                        "
                      >
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span
                        className="
                        text-xs
                        font-black
                        tracking-[0.2em]
                        text-green-300/40
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="relative mt-7 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                      relative
                      mt-3
                      text-sm
                      leading-7
                      text-green-100/60
                      "
                    >
                      {item.description}
                    </p>

                    {/* BOTTOM ACCENT */}

                    <div
                      className="
                      relative
                      mt-6
                      h-px
                      w-10
                      bg-green-400/60
                      transition-all
                      duration-500
                      group-hover:w-16
                      "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
