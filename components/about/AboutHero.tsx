// import Link from "next/link";
// import { ArrowRight, Building2 } from "lucide-react";

// import Container from "@/components/ui/Container";
// import GradientText from "@/components/ui/GradientText";

// export default function AboutHero() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.16),transparent_35%)]" />

//       <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

//       <Container>
//         <div className="relative grid min-h-[620px] items-center gap-16 py-32 lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Content */}
//           <div className="max-w-3xl">
//             {/* Eyebrow */}
//             <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
//               <span className="h-2 w-2 rounded-full bg-green-600" />
//               About TeamSufix
//             </div>

//             {/* Heading */}
//             <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
//               One Vision.
//               <span className="block">
//                 <GradientText>Many Possibilities.</GradientText>
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
//               TeamSufix.System Consulting & Engineering is a multidisciplinary
//               company bringing together technology, engineering, architecture,
//               construction and consulting expertise to solve meaningful
//               challenges and create lasting impact.
//             </p>

//             {/* Actions */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="group inline-flex items-center gap-3 rounded-full bg-green-700 px-7 py-4 font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
//               >
//                 Start a Conversation
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 href="/divisions"
//                 className="inline-flex items-center rounded-full border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50"
//               >
//                 Explore Our Divisions
//               </Link>
//             </div>
//           </div>

//           {/* Visual */}
//           <div className="relative hidden min-h-[460px] items-center justify-center lg:flex">
//             {/* Outer glow */}
//             <div className="absolute h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

//             {/* Main card */}
//             <div className="relative w-full max-w-md rounded-[36px] border border-green-100 bg-white/90 p-8 shadow-[0_30px_100px_rgba(22,163,74,0.12)] backdrop-blur-xl">
//               <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg">
//                 <Building2 size={30} />
//               </div>

//               <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
//                 Our Approach
//               </p>

//               <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900">
//                 Connecting expertise to create better solutions.
//               </h2>

//               <p className="mt-5 leading-7 text-gray-600">
//                 We believe the strongest solutions are created when different
//                 disciplines work together with a shared vision.
//               </p>

//               <div className="mt-8 h-px bg-gradient-to-r from-green-200 via-green-100 to-transparent" />

//               <div className="mt-6 flex items-center justify-between text-sm">
//                 <span className="font-semibold text-gray-900">
//                   Imagine. Design.
//                 </span>

//                 <span className="font-semibold text-green-700">
//                   Develop. Deliver.
//                 </span>
//               </div>
//             </div>

//             {/* Floating label */}
//             <div className="absolute -bottom-4 -left-4 rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-xl">
//               <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
//                 Our Motto
//               </p>

//               <p className="mt-1 font-bold text-green-700">
//                 Imagine. Design. Develop. Deliver.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers3,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import GradientText from "@/components/ui/GradientText";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* BACKGROUND ATMOSPHERE */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-green-100/50 blur-[140px]" />

        <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-[120px]" />

        <div
          className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(rgba(15,23,42,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.8)_1px,transparent_1px)]
          bg-[size:60px_60px]
          "
        />
      </div>

      <Container>
        <div
          className="
          relative
          grid
          min-h-[680px]
          items-center
          gap-20
          py-28
          lg:grid-cols-[1fr_0.9fr]
          lg:py-36
          "
        >
          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-3xl">
            {/* EYEBROW */}

            <div
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-green-200
              bg-green-50/80
              px-4
              py-2
              text-sm
              font-bold
              text-green-700
              shadow-sm
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
              </span>
              About TeamSufix
            </div>

            {/* HEADING */}

            <h1
              className="
              mt-8
              max-w-4xl
              text-5xl
              font-black
              leading-[1.02]
              tracking-tight
              text-slate-950
              sm:text-6xl
              lg:text-7xl
              "
            >
              One Vision.
              <span className="block">
                <GradientText>Many Possibilities.</GradientText>
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
              lg:text-xl
              "
            >
              TeamSufix.System Consulting & Engineering brings together
              technology, engineering, architecture, construction and consulting
              expertise to turn complex challenges into meaningful, practical
              and lasting solutions.
            </p>

            {/* ACTIONS */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                group
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-green-700
                px-7
                py-4
                font-bold
                text-white
                shadow-[0_15px_35px_rgba(21,128,61,.2)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-green-800
                hover:shadow-[0_20px_45px_rgba(21,128,61,.3)]
                "
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/divisions"
                className="
                inline-flex
                items-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-7
                py-4
                font-bold
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-green-300
                hover:bg-green-50
                "
              >
                Explore Our Divisions
              </Link>
            </div>

            {/* TRUST STATEMENT */}

            <div
              className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-4
              border-t
              border-slate-200
              pt-7
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" />

                <span className="text-sm font-semibold text-slate-600">
                  Multidisciplinary Expertise
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-600" />

                <span className="text-sm font-semibold text-slate-600">
                  End-to-End Solutions
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}

          <div className="relative hidden min-h-[560px] items-center justify-center lg:flex">
            {/* ORBITAL BACKGROUND */}

            <div
              className="
              absolute
              h-[440px]
              w-[440px]
              rounded-full
              border
              border-green-200/60
              "
            />

            <div
              className="
              absolute
              h-[350px]
              w-[350px]
              rounded-full
              border
              border-dashed
              border-green-300/50
              "
            />

            {/* CENTER CARD */}

            <div
              className="
              relative
              z-10
              w-full
              max-w-[390px]
              rounded-[30px]
              border
              border-white/80
              bg-white/90
              p-8
              shadow-[0_30px_100px_rgba(15,23,42,.12)]
              backdrop-blur-xl
              "
            >
              {/* ICON */}

              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-green-700
                to-green-500
                text-white
                shadow-lg
                shadow-green-700/20
                "
              >
                <Building2 size={30} />
              </div>

              {/* LABEL */}

              <p
                className="
                mt-8
                text-xs
                font-black
                uppercase
                tracking-[0.25em]
                text-green-700
                "
              >
                Our Approach
              </p>

              {/* HEADING */}

              <h2
                className="
                mt-4
                text-3xl
                font-black
                leading-tight
                text-slate-950
                "
              >
                Different disciplines.
                <span className="block text-green-700">One shared vision.</span>
              </h2>

              {/* DESCRIPTION */}

              <p className="mt-5 leading-7 text-slate-600">
                We bring diverse expertise together to design, build and deliver
                solutions that create real value.
              </p>

              {/* DIVIDER */}

              <div className="my-7 h-px bg-gradient-to-r from-green-200 via-slate-200 to-transparent" />

              {/* PROCESS */}

              <div className="grid grid-cols-4 gap-2">
                {[
                  {
                    label: "Imagine",
                    icon: Sparkles,
                  },
                  {
                    label: "Design",
                    icon: Layers3,
                  },
                  {
                    label: "Develop",
                    icon: Building2,
                  },
                  {
                    label: "Deliver",
                    icon: CheckCircle2,
                  },
                ].map(({ label, icon: Icon }, index) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      ${
                        index === 0
                          ? "bg-green-700 text-white"
                          : "bg-green-50 text-green-700"
                      }
                      `}
                    >
                      <Icon size={17} />
                    </div>

                    <span className="mt-2 text-[10px] font-bold text-slate-500">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TOP FLOATING CARD */}

            <div
              className="
              absolute
              -right-4
              top-10
              z-20
              rounded-2xl
              border
              border-green-100
              bg-white
              px-5
              py-4
              shadow-[0_20px_50px_rgba(15,23,42,.12)]
              "
            >
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Multidisciplinary
              </p>

              <p className="mt-1 font-bold text-slate-900">
                Expertise in Motion
              </p>
            </div>

            {/* BOTTOM FLOATING CARD */}

            <div
              className="
              absolute
              -bottom-2
              -left-8
              z-20
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-green-100
              bg-white
              px-5
              py-4
              shadow-[0_20px_50px_rgba(15,23,42,.12)]
              "
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Sparkles size={18} />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Our Motto
                </p>

                <p className="mt-1 text-sm font-bold text-slate-900">
                  Imagine. Design. Develop. Deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}