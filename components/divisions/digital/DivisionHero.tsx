// import Link from "next/link";
// import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

// import Container from "@/components/ui/Container";

// interface DivisionHeroProps {
//   title: string;
//   tagline: string;
//   description: string;
//   icon: LucideIcon;
// }

// export default function DivisionHero({
//   title,
//   tagline,
//   description,
//   icon: Icon,
// }: DivisionHeroProps) {
//   return (
//     <section className="relative overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
//       {/* Architectural Background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-green-100/60 blur-[140px]" />

//         <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-100/50 blur-[140px]" />

//         <div
//           className="
//             absolute
//             inset-0
//             opacity-[0.035]
//             [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
//             [background-size:64px_64px]
//           "
//         />
//       </div>

//       <Container>
//         <div className="relative grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
//           {/* Content */}
//           <div className="max-w-2xl">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-bold text-green-700">
//               <span className="h-2 w-2 rounded-full bg-green-600 shadow-[0_0_12px_rgba(22,163,74,0.6)]" />
//               TeamSufix Business Division
//             </div>

//             {/* Heading */}
//             <h1 className="mt-8 text-5xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
//               {title}
//             </h1>

//             <h2 className="mt-7 max-w-xl text-2xl font-bold leading-tight text-green-700 md:text-3xl">
//               {tagline}
//             </h2>

//             <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
//               {description}
//             </p>

//             {/* Actions */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <Link
//                 href="/request-quote"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-3
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-green-950
//                   via-green-800
//                   to-green-600
//                   px-7
//                   py-4
//                   font-bold
//                   text-white
//                   shadow-[0_20px_50px_rgba(21,128,61,0.25)]
//                   transition-all
//                   duration-500
//                   hover:-translate-y-1
//                   hover:shadow-[0_25px_70px_rgba(21,128,61,0.35)]
//                 "
//               >
//                 Start a Conversation
//                 <ArrowRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 href="/divisions"
//                 className="
//                   inline-flex
//                   items-center
//                   rounded-2xl
//                   border
//                   border-slate-200
//                   bg-white
//                   px-7
//                   py-4
//                   font-bold
//                   text-slate-700
//                   shadow-sm
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-green-300
//                   hover:text-green-700
//                   hover:shadow-lg
//                 "
//               >
//                 View All Divisions
//               </Link>
//             </div>

//             {/* Trust Points */}
//             <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-500">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={17} className="text-green-600" />
//                 Professional Expertise
//               </div>

//               <div className="flex items-center gap-2">
//                 <CheckCircle2 size={17} className="text-green-600" />
//                 Integrated Solutions
//               </div>
//             </div>
//           </div>

//           {/* Premium Visual */}
//           <div className="relative flex min-h-[460px] items-center justify-center">
//             {/* Glow */}
//             <div className="absolute h-[360px] w-[360px] rounded-full bg-green-200/60 blur-[100px]" />

//             {/* Outer Ring */}
//             <div className="absolute h-[430px] w-[430px] rounded-full border border-green-200/60 md:h-[520px] md:w-[520px]" />

//             <div className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-green-300/60 md:h-[430px] md:w-[430px]" />

//             {/* Main Orb */}
//             <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-green-950 via-green-800 to-green-500 shadow-[0_35px_100px_rgba(21,128,61,0.35)] md:h-96 md:w-96">
//               <div className="absolute inset-5 rounded-full border border-white/20" />

//               <div className="absolute inset-12 rounded-full border border-white/10" />

//               {/* Icon */}
//               <div className="relative flex h-36 w-36 items-center justify-center rounded-[32px] border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-xl md:h-44 md:w-44">
//                 <Icon size={78} strokeWidth={1.4} />
//               </div>
//             </div>

//             {/* Floating Label */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-green-200 bg-white/90 w-85 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-green-700 shadow-xl backdrop-blur-md">
//               • Expertise • Innovation • Impact
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";

import Container from "@/components/ui/Container";

interface DivisionHeroProps {
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
}

export default function DivisionHero({
  title,
  tagline,
  description,
  icon: Icon,
}: DivisionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full bg-green-100/60 blur-[120px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-lime-100/50 blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
            [background-size:48px_48px]
            sm:[background-size:64px_64px]
          "
        />
      </div>

      <Container>
        <div
          className="
            relative
            grid
            min-w-0
            items-center
            gap-14
            lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]
            lg:gap-16
          "
        >
          {/* CONTENT */}
          <div className="min-w-0 max-w-3xl">
            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-xs font-bold text-green-700 sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-600 shadow-[0_0_12px_rgba(22,163,74,0.6)]" />

              <span className="truncate">TeamSufix Business Division</span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                whitespace-nowrap
                text-[clamp(2.5rem,5.5vw,5.5rem)]
                font-black
                leading-[0.95]
                tracking-[-0.045em]
                text-slate-950
                sm:mt-8
              "
            >
              {title}
            </h1>

            {/* Tagline */}
            <h2
              className="
                mt-6
                max-w-xl
                text-xl
                font-bold
                leading-tight
                text-green-700
                sm:mt-7
                sm:text-2xl
                md:text-3xl
              "
            >
              {tagline}
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:mt-7
                sm:text-lg
                sm:leading-8
              "
            >
              {description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/request-quote"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-950
                  via-green-800
                  to-green-600
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_20px_50px_rgba(21,128,61,0.25)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_25px_70px_rgba(21,128,61,0.35)]
                  sm:w-auto
                  sm:px-7
                "
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/divisions"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-green-300
                  hover:text-green-700
                  hover:shadow-lg
                  sm:w-auto
                  sm:px-7
                "
              >
                View All Divisions
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-col gap-3 text-sm font-semibold text-slate-500 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="shrink-0 text-green-600" />
                Professional Expertise
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="shrink-0 text-green-600" />
                Integrated Solutions
              </div>
            </div>
          </div>

          {/* PREMIUM VISUAL */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center lg:max-w-none">
            {/* Glow */}
            <div className="absolute h-[65%] w-[65%] rounded-full bg-green-200/60 blur-[80px] sm:blur-[100px]" />

            {/* Outer Ring */}
            <div className="absolute h-[82%] w-[82%] rounded-full border border-green-200/60" />

            {/* Dashed Ring */}
            <div className="absolute h-[66%] w-[66%] rounded-full border border-dashed border-green-300/60" />

            {/* Decorative Nodes */}
            <div className="absolute left-[10%] top-[24%] h-3 w-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

            <div className="absolute right-[12%] top-[32%] h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

            <div className="absolute bottom-[22%] left-[20%] h-2 w-2 rounded-full bg-green-600" />

            {/* Main Orb */}
            <div
              className="
                relative
                flex
                aspect-square
                w-[54%]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-green-950
                via-green-800
                to-green-500
                shadow-[0_35px_100px_rgba(21,128,61,0.35)]
              "
            >
              <div className="absolute inset-[7%] rounded-full border border-white/20" />

              <div className="absolute inset-[17%] rounded-full border border-white/10" />

              {/* Icon */}
              <div
                className="
                  relative
                  flex
                  aspect-square
                  w-[42%]
                  items-center
                  justify-center
                  rounded-[24%]
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                  sm:rounded-[32px]
                "
              >
                <Icon className="h-[45%] w-[45%]" strokeWidth={1.4} />
              </div>
            </div>

            {/* Floating Label */}
            <div
              className="
                absolute
                bottom-[3%]
                left-1/2
                w-[85%]
                -translate-x-1/2
                rounded-full
                border
                border-green-200
                bg-white/90
                px-3
                py-2.5
                text-center
                text-[9px]
                font-black
                uppercase
                tracking-[0.12em]
                text-green-700
                shadow-xl
                backdrop-blur-md
                sm:w-auto
                sm:min-w-[280px]
                sm:px-5
                sm:text-xs
                sm:tracking-[0.2em]
              "
            >
              <span className="hidden sm:inline">
                • Expertise • Innovation • Impact
              </span>

              <span className="sm:hidden">
                • Expertise • Innovation • Impact
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}