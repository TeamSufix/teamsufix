// import { ArrowUpRight, LucideIcon } from "lucide-react";

// interface IndustryCardProps {
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   index: number;
// }

// export default function IndustryCard({
//   title,
//   description,
//   icon: Icon,
//   index,
// }: IndustryCardProps) {
//   const number = String(index + 1).padStart(2, "0");

//   return (
//     <div
//       className="
//       group
//       relative
//       min-h-[330px]
//       overflow-hidden
//       rounded-[32px]
//       border
//       border-slate-200/80
//       bg-white/80
//       p-8
//       shadow-[0_15px_45px_rgba(15,23,42,.05)]
//       backdrop-blur-xl
//       transition-all
//       duration-500
//       hover:-translate-y-2
//       hover:border-green-300
//       hover:shadow-[0_25px_70px_rgba(22,163,74,.15)]
//       "
//     >
//       {/* Background Number */}

//       <span
//         className="
//         pointer-events-none
//         absolute
//         -right-3
//         -top-8
//         select-none
//         text-[150px]
//         font-black
//         leading-none
//         text-green-50
//         transition-all
//         duration-500
//         group-hover:text-green-100
//         "
//       >
//         {number}
//       </span>

//       {/* Hover Glow */}

//       <div
//         className="
//         pointer-events-none
//         absolute
//         -right-20
//         -top-20
//         h-48
//         w-48
//         rounded-full
//         bg-green-200/40
//         blur-[80px]
//         opacity-0
//         transition
//         duration-500
//         group-hover:opacity-100
//         "
//       />

//       {/* Top Row */}

//       <div className="relative flex items-start justify-between">
//         <div
//           className="
//           flex
//           h-16
//           w-16
//           items-center
//           justify-center
//           rounded-2xl
//           bg-gradient-to-br
//           from-green-700
//           to-green-500
//           text-white
//           shadow-[0_10px_25px_rgba(22,163,74,.25)]
//           transition-all
//           duration-500
//           group-hover:scale-110
//           group-hover:rotate-3
//           "
//         >
//           <Icon size={28} strokeWidth={1.8} />
//         </div>

//         <div
//           className="
//           flex
//           h-10
//           w-10
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-slate-200
//           text-slate-400
//           transition-all
//           duration-300
//           group-hover:border-green-500
//           group-hover:bg-green-600
//           group-hover:text-white
//           "
//         >
//           <ArrowUpRight size={18} />
//         </div>
//       </div>

//       {/* Content */}

//       <div className="relative mt-12">
//         <h3
//           className="
//           text-2xl
//           font-black
//           tracking-tight
//           text-slate-900
//           transition-colors
//           duration-300
//           group-hover:text-green-700
//           "
//         >
//           {title}
//         </h3>

//         <p
//           className="
//           mt-4
//           max-w-sm
//           text-sm
//           leading-7
//           text-slate-600
//           "
//         >
//           {description}
//         </p>
//       </div>

//       {/* Bottom Accent */}

//       <div
//         className="
//         absolute
//         bottom-0
//         left-8
//         right-8
//         h-1
//         origin-left
//         scale-x-0
//         rounded-full
//         bg-gradient-to-r
//         from-green-700
//         via-green-500
//         to-lime-400
//         transition-transform
//         duration-500
//         group-hover:scale-x-100
//         "
//       />
//     </div>
//   );
// }

import { ArrowUpRight } from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function IndustryCard({
  title,
  description,
  icon: Icon,
  index,
}: IndustryCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className="
        group
        relative
        min-h-[330px]
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200/80
        bg-white/80
        p-8
        shadow-[0_15px_45px_rgba(15,23,42,.05)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-green-300
        hover:shadow-[0_25px_70px_rgba(22,163,74,.15)]
      "
    >
      <span className="pointer-events-none absolute -right-3 -top-8 select-none text-[150px] font-black leading-none text-green-50 transition-all duration-500 group-hover:text-green-100">
        {number}
      </span>

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-200/40 blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-700 to-green-500 text-white shadow-[0_10px_25px_rgba(22,163,74,.25)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={28} strokeWidth={1.8} />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-600 group-hover:text-white">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="relative mt-12">
        <h3 className="text-2xl font-black tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-green-700">
          {title}
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
}