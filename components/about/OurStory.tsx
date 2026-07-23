import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Target,
  Workflow,
} from "lucide-react";

import Container from "@/components/ui/Container";

const storyPoints = [
  {
    number: "01",
    title: "Think Beyond",
    description:
      "We look beyond immediate challenges to understand the wider context, the opportunity and the possibilities ahead.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Connect Expertise",
    description:
      "We bring different disciplines together because the strongest solutions often exist at the intersection of multiple perspectives.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Deliver With Purpose",
    description:
      "We focus on turning ideas into practical solutions that create measurable and lasting value.",
    icon: Target,
  },
];

export default function OurStory() {
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
      {/* BACKGROUND ATMOSPHERE */}

      <div
        className="
        pointer-events-none
        absolute
        -left-40
        top-1/3
        h-[500px]
        w-[500px]
        rounded-full
        bg-green-100/50
        blur-[140px]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        bottom-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-emerald-100/40
        blur-[140px]
        "
      />

      <Container>
        <div
          className="
          relative
          grid
          gap-16
          lg:grid-cols-[0.8fr_1.2fr]
          lg:items-start
          lg:gap-24
          "
        >
          {/* LEFT STORY INTRODUCTION */}

          <div className="lg:sticky lg:top-32">
            {/* EYEBROW */}

            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-200
              bg-green-50
              px-4
              py-2
              text-sm
              font-bold
              text-green-700
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
              Our Story
            </div>

            {/* HEADING */}

            <h2
              className="
              mt-8
              max-w-xl
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              text-slate-950
              sm:text-5xl
              "
            >
              Built around the belief that{" "}
              <span className="text-green-700">
                possibility deserves action.
              </span>
            </h2>

            {/* INTRODUCTION */}

            <p
              className="
              mt-8
              max-w-md
              text-lg
              leading-8
              text-slate-600
              "
            >
              TeamSufix was created to bring different forms of expertise
              together under one connected vision — helping ideas move beyond
              possibility and into meaningful progress.
            </p>

            {/* BRAND MARKER */}

            <div
              className="
              mt-10
              flex
              items-center
              gap-3
              border-l-2
              border-green-600
              pl-5
              "
            >
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Imagine. Design. Develop. Deliver.
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Our way of moving ideas forward.
                </p>
              </div>

              <ArrowUpRight size={18} className="text-green-700" />
            </div>
          </div>

          {/* RIGHT STORY CONTENT */}

          <div className="relative">
            {/* MAIN STORY CARD */}

            <div
              className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-[0_20px_70px_rgba(15,23,42,.06)]
              sm:p-10
              lg:p-12
              "
            >
              {/* TOP ACCENT */}

              <div
                className="
                absolute
                left-0
                right-0
                top-0
                h-1
                bg-gradient-to-r
                from-green-950
                via-green-600
                to-green-300
                "
              />

              {/* STORY COPY */}

              <div className="max-w-3xl">
                <p
                  className="
                  text-xl
                  font-semibold
                  leading-9
                  text-slate-800
                  sm:text-2xl
                  "
                >
                  Many of the challenges facing organizations and communities
                  cannot be solved by one discipline alone.
                </p>

                <p className="mt-7 text-lg leading-8 text-slate-600">
                  Technology needs strategy. Infrastructure needs engineering.
                  Design needs execution. Growth needs vision.
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  TeamSufix brings these capabilities together to create a more
                  connected way of solving problems. Our multidisciplinary model
                  allows ideas to move more effectively from concept, through
                  design and development, into real-world delivery.
                </p>
              </div>

              {/* DIVIDER */}

              <div className="my-10 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

              {/* STORY PRINCIPLES */}

              <div className="space-y-4">
                {storyPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div
                      key={point.number}
                      className="
                      group
                      flex
                      gap-5
                      rounded-2xl
                      border
                      border-transparent
                      p-4
                      transition-all
                      duration-300
                      hover:border-green-100
                      hover:bg-green-50/50
                      "
                    >
                      {/* NUMBER */}

                      <div
                        className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-slate-100
                        text-xs
                        font-black
                        tracking-widest
                        text-slate-400
                        transition-all
                        duration-300
                        group-hover:bg-green-700
                        group-hover:text-white
                        "
                      >
                        {point.number}
                      </div>

                      {/* ICON */}

                      <div
                        className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-green-50
                        text-green-700
                        transition-all
                        duration-300
                        group-hover:bg-green-100
                        "
                      >
                        <Icon size={21} />
                      </div>

                      {/* CONTENT */}

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {point.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM STATEMENT */}

              <div
                className="
                mt-10
                flex
                flex-col
                gap-4
                rounded-2xl
                bg-slate-950
                p-6
                text-white
                sm:flex-row
                sm:items-center
                sm:justify-between
                "
              >
                <div>
                  <p className="text-sm font-bold">
                    From possibility to progress.
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    That is the journey we help organizations take.
                  </p>
                </div>

                <ArrowRight size={20} className="text-green-400" />
              </div>
            </div>

            {/* DECORATIVE ACCENT */}

            <div
              className="
              pointer-events-none
              absolute
              -bottom-6
              -right-6
              -z-10
              hidden
              h-32
              w-32
              rounded-[24px]
              bg-green-700
              lg:block
              "
            />

            <div
              className="
              pointer-events-none
              absolute
              -left-5
              top-20
              -z-10
              hidden
              h-20
              w-20
              rounded-full
              border
              border-green-200
              lg:block
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
