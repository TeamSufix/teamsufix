import { Eye, Rocket, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";

const principles = [
  {
    number: "01",
    icon: Eye,
    label: "Our Vision",
    title: "A future where ideas create meaningful progress.",
    description:
      "To become Africa's most trusted multidisciplinary consulting and engineering organization, delivering world class technology, infrastructure and construction solutions.",
  },
  {
    number: "02",
    icon: Rocket,
    label: "Our Mission",
    title: "Turning possibility into progress.",
    description:
      "To engineer innovative solutions that improve businesses, infrastructure and communities through technology, professional consulting and sustainable engineering practices.",
  },
];

export default function VisionMission() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#04140b]
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
        bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
        bg-[size:64px_64px]
        "
      />

      {/* TOP GLOW */}

      <div
        className="
        pointer-events-none
        absolute
        -left-40
        -top-40
        h-[600px]
        w-[600px]
        rounded-full
        bg-green-700/20
        blur-[140px]
        "
      />

      {/* BOTTOM GLOW */}

      <div
        className="
        pointer-events-none
        absolute
        -bottom-60
        -right-40
        h-[650px]
        w-[650px]
        rounded-full
        bg-green-500/10
        blur-[160px]
        "
      />

      <Container>
        <div className="relative">
          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-400/20
              bg-green-400/[0.08]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-green-300
              backdrop-blur
              "
            >
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,.8)]" />
              What Drives Us
            </div>

            <h2
              className="
              mt-8
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              lg:text-6xl
              "
            >
              Direction gives us focus.
              <span className="block text-green-400">
                Purpose gives us momentum.
              </span>
            </h2>

            <p
              className="
              mx-auto
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-green-100/65
              "
            >
              Our vision defines the future we are working toward. Our mission
              defines how we create meaningful progress along the way.
            </p>
          </div>

          {/* PRINCIPLES */}

          <div className="mt-20 grid gap-6 lg:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.08]
                  bg-white/[0.045]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-green-400/30
                  hover:bg-white/[0.07]
                  hover:shadow-[0_30px_80px_rgba(0,0,0,.25)]
                  md:p-10
                  "
                >
                  {/* LARGE NUMBER */}

                  <div
                    className="
                    pointer-events-none
                    absolute
                    -right-4
                    -top-8
                    text-[150px]
                    font-black
                    leading-none
                    tracking-tighter
                    text-white/[0.025]
                    transition-all
                    duration-500
                    group-hover:text-green-400/[0.06]
                    "
                  >
                    {item.number}
                  </div>

                  {/* TOP LINE */}

                  <div className="relative flex items-start justify-between">
                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-green-400/20
                      bg-green-400/10
                      text-green-400
                      transition-all
                      duration-500
                      group-hover:border-green-300/40
                      group-hover:bg-green-400
                      group-hover:text-green-950
                      "
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={22}
                      className="
                      text-white/20
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-green-400
                      "
                    />
                  </div>

                  {/* LABEL */}

                  <p
                    className="
                    relative
                    mt-10
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-green-400
                    "
                  >
                    {item.label}
                  </p>

                  {/* TITLE */}

                  <h3
                    className="
                    relative
                    mt-5
                    max-w-xl
                    text-2xl
                    font-bold
                    leading-tight
                    tracking-tight
                    sm:text-3xl
                    "
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                    relative
                    mt-6
                    max-w-xl
                    text-base
                    leading-8
                    text-green-100/60
                    "
                  >
                    {item.description}
                  </p>

                  {/* BOTTOM ACCENT */}

                  <div
                    className="
                    relative
                    mt-10
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-green-400/40
                    via-green-400/10
                    to-transparent
                    "
                  />

                  <p
                    className="
                    relative
                    mt-5
                    text-sm
                    font-semibold
                    text-white/40
                    transition
                    duration-300
                    group-hover:text-green-300/70
                    "
                  >
                    Imagine. Design. Develop. Deliver.
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
