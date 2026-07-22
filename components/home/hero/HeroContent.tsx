// import Link from "next/link";
// import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

// import GradientText from "@/components/ui/GradientText";
// import CapabilityPill from "./CapabilityPill";

// export default function HeroContent() {
//   return (
//     <div className="max-w-2xl">
//       {/* Enterprise Badge */}

//       <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-5 py-3 shadow-lg">
//         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
//           <Sparkles size={16} className="text-green-700" />
//         </div>

//         <div>
//           <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
//             Multidisciplinary Consulting
//           </p>

//           <p className="text-sm text-gray-500">
//             Imagine • Design • Develop • Deliver
//           </p>
//         </div>
//       </div>

//       {/* Heading */}

//       <h1 className="mt-10 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
//         Engineering
//         <br />
//         <GradientText>Tomorrow.</GradientText>
//         {/* <span className="block">Designing Today.</span> */}
//       </h1>

//       {/* Description */}

//       <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
//         TeamSufix integrates digital technology, engineering, architecture,
//         construction and consulting into one coordinated ecosystem that
//         transforms ambitious ideas into sustainable, future ready solutions.
//       </p>

//       <br />

//       {/* Capabilities */}

//       {/* <div className="mt-10 flex flex-wrap gap-3">
//         <CapabilityPill text="Digital Systems" />

//         <CapabilityPill text="Engineering" />

//         <CapabilityPill text="Construction" />

//         <CapabilityPill text="Consulting" />
//       </div> */}

//       {/* Highlights */}

//       <div className="mt-10 grid gap-4">
//         {[
//           "Enterprise Software & Digital Platforms",
//           "Civil & Structural Engineering",
//           "Architecture & Construction",
//           "Business & Technology Consulting",
//         ].map((item) => (
//           <div key={item} className="flex items-center gap-3">
//             <CheckCircle2 size={20} className="text-green-600" />

//             <span className="font-medium text-gray-700">{item}</span>
//           </div>
//         ))}
//       </div>

//       <br />

//       {/* Buttons */}

//       <div className="mt-12 flex flex-col gap-4 sm:flex-row">
//         <Link
//           href="/contact"
//           className="
//           group
//           inline-flex
//           h-10
//           w-35
//           items-center
//           justify-center
//           rounded-2xl
//           bg-gradient-to-r
//           from-green-900
//           via-green-700
//           to-green-500
//           px-8
//           font-semibold
//           text-white
//           shadow-xl
//           transition
//           hover:-translate-y-1
//           hover:shadow-2xl
//           "
//         >
//           Start Project
//           <ArrowRight
//             size={18}
//             className="ml-3 transition group-hover:translate-x-1"
//           />
//         </Link>

//         <Link
//           href="/services"
//           className="
//           inline-flex
//           h-10
//           w-35
//           items-center
//           justify-center
//           rounded-2xl
//           border
//           border-green-200
//           bg-white
//           px-8
//           font-semibold
//           text-gray-800
//           transition
//           hover:border-green-600
//           hover:bg-green-50
//           "
//         >
//           Explore Services
//         </Link>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import GradientText from "@/components/ui/GradientText";

const highlights = [
  "Enterprise Software & Digital Platforms",
  "Civil & Structural Engineering",
  "Architecture & Construction",
  "Business & Technology Consulting",
];

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}

      <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-green-200 bg-white/90 px-4 py-3 shadow-lg shadow-green-900/5 backdrop-blur-sm sm:px-5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100">
          <Sparkles size={16} className="text-green-700" />
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-700 sm:text-xs sm:tracking-[0.25em]">
            Multidisciplinary Consulting
          </p>

          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Imagine • Design • Develop • Deliver
          </p>
        </div>
      </div>

      {/* Heading */}

      <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:mt-10 lg:text-7xl">
        Engineering
        <br />
        <GradientText>Tomorrow.</GradientText>
      </h1>

      {/* Description */}

      <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
        TeamSufix integrates digital technology, engineering, architecture,
        construction and consulting into one coordinated ecosystem that
        transforms ambitious ideas into sustainable, future-ready solutions.
      </p>

      {/* Highlights */}

      <div className="mt-9 grid gap-4">
        {highlights.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-green-600"
            />

            <span className="text-sm font-medium text-slate-700 sm:text-base">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/contact"
          className="
            group
            inline-flex
            min-h-14
            w-full
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            from-green-900
            via-green-700
            to-green-500
            px-7
            font-semibold
            text-white
            shadow-xl
            shadow-green-900/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:shadow-green-900/30
            sm:w-auto
          "
        >
          Start a Project
          <ArrowRight
            size={18}
            className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/services"
          className="
            inline-flex
            min-h-14
            w-full
            items-center
            justify-center
            rounded-2xl
            border
            border-green-200
            bg-white/80
            px-7
            font-semibold
            text-slate-800
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-green-500
            hover:bg-green-50
            hover:shadow-lg
            sm:w-auto
          "
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}