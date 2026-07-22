"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { testimonials } from "./Testimonials.data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

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
        opacity-[0.35]
        bg-[linear-gradient(rgba(15,23,42,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.035)_1px,transparent_1px)]
        bg-[size:48px_48px]
        "
      />

      {/* BACKGROUND GLOWS */}

      <div
        className="
        pointer-events-none
        absolute
        -left-40
        top-1/4
        h-[500px]
        w-[500px]
        rounded-full
        bg-green-200/30
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
        <div className="relative">
          {/* SECTION HEADING */}

          <SectionHeading
            badge="Client Perspective"
            title="Built on Trust. Driven by Results."
            description="Strong partnerships are at the heart of everything we do. We work closely with our clients to understand their challenges and deliver meaningful solutions."
          />

          {/* TESTIMONIAL */}

          <div className="mx-auto mt-20 max-w-6xl">
            <div
              className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-green-800/30
              bg-gradient-to-br
              from-[#052e16]
              via-[#14532d]
              to-[#15803d]
              p-8
              text-white
              shadow-[0_35px_100px_rgba(5,46,22,.25)]
              sm:p-12
              lg:p-16
              "
            >
              {/* INNER GRID */}

              <div
                className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.05]
                bg-[linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
                bg-[size:44px_44px]
                "
              />

              {/* TOP RIGHT GLOW */}

              <div
                className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-96
                w-96
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
                h-96
                w-96
                rounded-full
                bg-lime-300/10
                blur-[120px]
                "
              />

              {/* DECORATIVE QUOTE */}

              <div
                className="
                pointer-events-none
                absolute
                right-8
                top-6
                text-green-300/10
                "
              >
                <Quote size={220} strokeWidth={1} />
              </div>

              {/* CONTENT */}

              <div className="relative">
                {/* TOP BAR */}

                <div
                  className="
                  flex
                  flex-col
                  justify-between
                  gap-6
                  sm:flex-row
                  sm:items-center
                  "
                >
                  {/* LABEL */}

                  <div className="flex items-center gap-3">
                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-green-300/20
                      bg-white/10
                      "
                    >
                      <Sparkles size={18} className="text-green-300" />
                    </div>

                    <span
                      className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-green-200
                      "
                    >
                      Client Experience
                    </span>
                  </div>

                  {/* COUNTER */}

                  <div
                    className="
                    text-sm
                    font-semibold
                    tracking-[0.2em]
                    text-green-200/70
                    "
                  >
                    {String(activeIndex + 1).padStart(2, "0")}{" "}
                    <span className="text-green-300/40">/</span>{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </div>
                </div>

                {/* STARS */}

                <div className="mt-12 flex gap-1 text-green-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* QUOTE */}

                <blockquote
                  key={activeIndex}
                  className="
                  mt-8
                  max-w-5xl
                  animate-[fadeIn_.5s_ease-in-out]
                  text-2xl
                  font-medium
                  leading-relaxed
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                  "
                >
                  “{testimonial.quote}”
                </blockquote>

                {/* BOTTOM AREA */}

                <div
                  className="
                  mt-14
                  flex
                  flex-col
                  justify-between
                  gap-8
                  border-t
                  border-white/15
                  pt-8
                  sm:flex-row
                  sm:items-end
                  "
                >
                  {/* CLIENT */}

                  <div className="flex items-center gap-4">
                    {/* INITIAL */}

                    <div
                      className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-green-400
                      to-green-700
                      text-lg
                      font-black
                      text-white
                      shadow-lg
                      "
                    >
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <p className="text-lg font-bold text-white">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-sm text-green-200/75">
                        {testimonial.role}
                      </p>

                      <p className="mt-0.5 text-sm font-medium text-green-300">
                        {testimonial.organization}
                      </p>
                    </div>
                  </div>

                  {/* NAVIGATION */}

                  <div className="flex items-center gap-3">
                    <button
                      onClick={previousTestimonial}
                      aria-label="Previous testimonial"
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/30
                      hover:bg-white
                      hover:text-green-800
                      "
                    >
                      <ArrowLeft size={19} />
                    </button>

                    <button
                      onClick={nextTestimonial}
                      aria-label="Next testimonial"
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/30
                      hover:bg-white
                      hover:text-green-800
                      "
                    >
                      <ArrowRight size={19} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* INDICATORS */}

            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    index === activeIndex
                      ? "w-10 bg-green-700"
                      : "w-2 bg-green-200 hover:bg-green-400"
                  }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
