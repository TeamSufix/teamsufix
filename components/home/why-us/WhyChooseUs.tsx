import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import WhyCard from "./WhyCard";
import { whyItems } from "./why.data";

export default function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/40 to-white" />

      <div className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-green-100 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-100 blur-[140px]" />

      <Container>
        <div className="relative">
          <SectionHeading
            badge="Why TeamSufix"
            title="Built For Organizations That Need More."
            description="We combine technology, engineering, architecture and strategic consulting into one integrated delivery ecosystem."
          />

          <div
            className="
              mt-14
              grid
              items-center
              gap-12
              sm:mt-16
              sm:gap-16
              lg:mt-20
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-20
            "
          >
            {/* IMAGE */}

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-2xl sm:rounded-[36px]">
                <Image
                  src="/images/why-sufix.png"
                  alt="Why TeamSufix"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  flex
                  w-40
                  flex-col
                  items-center
                  justify-center
                  rounded-3xl
                  border
                  border-green-100
                  bg-white
                  p-5
                  text-center
                  shadow-xl
                  sm:bottom-8
                  sm:left-8
                  sm:p-6
                "
              >
                <h3 className="text-xl font-black text-green-700 sm:text-2xl">
                  End-to-End
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Project Delivery
                </p>
              </div>
            </div>

            {/* CONTENT */}

            <div>
              <div className="grid gap-5 sm:gap-6">
                {whyItems.map((item) => (
                  <WhyCard key={item.title} {...item} />
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/about"
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-green-700
                    via-green-600
                    to-emerald-500
                    px-6
                    font-semibold
                    text-white
                    shadow-[0_15px_40px_rgba(22,163,74,.25)]
                    transition
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Discover TeamSufix
                  <ArrowRight
                    className="ml-3 transition group-hover:translate-x-1"
                    size={18}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
