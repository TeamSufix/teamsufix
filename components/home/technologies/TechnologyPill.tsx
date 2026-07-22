// import { ArrowUpRight, LucideIcon } from "lucide-react";

// interface TechnologyPillProps {
//   name: string;
//   shortName: string;
//   description: string;
//   icon: LucideIcon;
// }

// export default function TechnologyPill({
//   name,
//   shortName,
//   description,
//   icon: Icon,
// }: TechnologyPillProps) {
//   return (
//     <div
//       className="
//       group
//       relative
//       flex
//       min-h-[205px]
//       flex-col
//       overflow-hidden
//       rounded-[22px]
//       border
//       border-slate-200/80
//       bg-gradient-to-br
//       from-white
//       via-white
//       to-slate-50
//       p-5
//       shadow-[0_10px_30px_rgba(15,23,42,.04)]
//       transition-all
//       duration-500
//       hover:-translate-y-2
//       hover:border-green-300
//       hover:shadow-[0_20px_50px_rgba(22,163,74,.12)]
//       "
//     >
//       {/* HOVER GLOW */}

//       <div
//         className="
//         pointer-events-none
//         absolute
//         -right-12
//         -top-12
//         h-32
//         w-32
//         rounded-full
//         bg-green-100
//         opacity-0
//         blur-3xl
//         transition
//         duration-500
//         group-hover:opacity-100
//         "
//       />

//       {/* TOP ROW */}

//       <div className="relative flex items-start justify-between">
//         <div
//           className="
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-xl
//           bg-gradient-to-br
//           from-green-50
//           to-green-100
//           text-green-700
//           transition-all
//           duration-500
//           group-hover:from-green-700
//           group-hover:to-green-500
//           group-hover:text-white
//           "
//         >
//           <Icon size={22} strokeWidth={1.8} />
//         </div>

//         <ArrowUpRight
//           size={19}
//           className="
//           text-slate-300
//           transition-all
//           duration-500
//           group-hover:-translate-y-1
//           group-hover:translate-x-1
//           group-hover:text-green-600
//           "
//         />
//       </div>

//       {/* LABEL */}

//       <div
//         className="
//         relative
//         mt-5
//         text-[9px]
//         font-bold
//         uppercase
//         tracking-[0.22em]
//         text-green-600
//         "
//       >
//         {shortName}
//       </div>

//       {/* TITLE */}

//       <h3
//         className="
//         relative
//         mt-1.5
//         text-base
//         font-bold
//         leading-snug
//         text-slate-900
//         "
//       >
//         {name}
//       </h3>

//       {/* DESCRIPTION */}

//       <p
//         className="
//         relative
//         mt-2
//         text-[13px]
//         leading-5
//         text-slate-500
//         "
//       >
//         {description}
//       </p>
//     </div>
//   );
// }

import { ArrowUpRight } from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface TechnologyPillProps {
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
}

export default function TechnologyPill({
  name,
  shortName,
  description,
  icon: Icon,
}: TechnologyPillProps) {
  return (
    <div className="group relative flex min-h-[205px] flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-[0_10px_30px_rgba(15,23,42,.04)] transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-[0_20px_50px_rgba(22,163,74,.12)]">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-green-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 text-green-700 transition-all duration-500 group-hover:from-green-700 group-hover:to-green-500 group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} />
        </div>

        <ArrowUpRight
          size={19}
          className="text-slate-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-600"
        />
      </div>

      <div className="relative mt-5 text-[9px] font-bold uppercase tracking-[0.22em] text-green-600">
        {shortName}
      </div>

      <h3 className="relative mt-1.5 text-base font-bold leading-snug text-slate-900">
        {name}
      </h3>

      <p className="relative mt-2 text-[13px] leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}