import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import TechnologyPill from "./TechnologyPill";
import { technologies } from "./Technologies.data";

export default function Technologies() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-green-100/50 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-green-100/40 blur-[140px]" />

      <Container>
        <div className="relative">
          <SectionHeading
            badge="Technology & Capabilities"
            title="The Tools and Expertise to Build What Comes Next."
            description="We combine modern technology, technical expertise and practical problem-solving to help organizations build, improve and scale."
          />

          <div className="mt-14 grid items-start gap-8 sm:mt-16 lg:mt-20 lg:grid-cols-[0.85fr_1.5fr]">
            {/* CAPABILITY PANEL */}

            <div
              className="
                group
                relative
                flex
                min-h-[520px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-green-800/30
                bg-gradient-to-br
                from-[#052e16]
                via-[#14532d]
                to-[#15803d]
                p-7
                text-white
                shadow-[0_30px_80px_rgba(5,46,22,.25)]
                sm:min-h-[600px]
                sm:rounded-[30px]
                sm:p-8
                lg:min-h-[680px]
                lg:p-10
              "
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-green-400/20 blur-[100px] transition duration-700 group-hover:bg-green-300/30" />

                <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-lime-300/10 blur-[100px]" />
              </div>

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-300/20 bg-white/10">
                    <Cpu size={20} className="text-green-300" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-300">
                    Built For Possibility
                  </span>
                </div>

                <h3 className="mt-7 max-w-md text-3xl font-black leading-tight sm:text-4xl">
                  Technology should move your organization forward.
                </h3>

                <p className="mt-5 max-w-lg leading-7 text-green-50/75">
                  Our capabilities bring together software engineering, digital
                  systems, cloud technologies and strategic thinking to
                  transform complex challenges into practical solutions.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-300"
                    />

                    <div>
                      <p className="font-semibold text-white">Built to Scale</p>

                      <p className="mt-1 text-sm leading-6 text-green-100/60">
                        Solutions designed to grow with your organization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-300"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        Designed for Impact
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/60">
                        Technology focused on solving real-world problems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-green-300"
                    />

                    <div>
                      <p className="font-semibold text-white">
                        Engineering Precision
                      </p>

                      <p className="mt-1 text-sm leading-6 text-green-100/60">
                        Reliable systems built with technical excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 sm:mt-auto sm:pt-10">
                  <Link
                    href="/services"
                    className="
                      group/button
                      inline-flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-white
                      px-6
                      py-3
                      text-center
                      font-semibold
                      text-green-900
                      shadow-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-2xl
                      sm:w-auto
                      sm:px-7
                    "
                  >
                    Explore Our Capabilities
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* TECHNOLOGY GRID */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyPill
                  key={technology.name}
                  name={technology.name}
                  shortName={technology.shortName}
                  description={technology.description}
                  icon={technology.icon}
                />
              ))}
            </div>
          </div>

          {/* CTA */}

          <div className="relative mt-10 overflow-hidden rounded-[24px] border border-green-200/70 bg-gradient-to-r from-white via-green-50 to-white px-5 py-6 shadow-[0_15px_40px_rgba(22,163,74,.08)] sm:mt-12 sm:px-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-200/40 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white shadow-lg">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-base font-bold text-slate-900">
                    Have a challenge worth solving?
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Let&apos;s turn the right idea into the right solution.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="
                  inline-flex
                  min-h-11
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-green-700
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-green-800
                  hover:shadow-xl
                "
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
