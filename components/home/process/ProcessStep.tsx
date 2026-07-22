// import { LucideIcon } from "lucide-react";

// interface ProcessStepProps {
//   number: string;
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   isLast?: boolean;
// }

// export default function ProcessStep({
//   number,
//   title,
//   description,
//   icon: Icon,
//   isLast,
// }: ProcessStepProps) {
//   return (
//     <div className="group relative">
//       {/* Connector Line */}

//       {!isLast && (
//         <div
//           className="
//           absolute
//           left-[calc(50%+56px)]
//           right-[-40px]
//           top-[72px]
//           hidden
//           h-px
//           bg-gradient-to-r
//           from-green-400/70
//           via-green-300/30
//           to-transparent
//           lg:block
//           "
//         />
//       )}

//       {/* Card */}

//       <div
//         className="
//         relative
//         h-full
//         rounded-[28px]
//         border
//         border-white/10
//         bg-white/[0.06]
//         p-8
//         text-center
//         backdrop-blur-xl
//         transition-all
//         duration-500
//         hover:-translate-y-3
//         hover:border-green-400/40
//         hover:bg-white/[0.1]
//         hover:shadow-[0_25px_70px_rgba(34,197,94,.15)]
//         "
//       >
//         {/* Number */}

//         <div
//           className="
//           absolute
//           right-6
//           top-6
//           text-sm
//           font-black
//           tracking-[0.25em]
//           text-green-400/50
//           transition
//           duration-500
//           group-hover:text-green-300
//           "
//         >
//           {number}
//         </div>

//         {/* Icon */}

//         <div
//           className="
//           relative
//           mx-auto
//           flex
//           h-24
//           w-24
//           items-center
//           justify-center
//           rounded-[28px]
//           border
//           border-green-400/30
//           bg-gradient-to-br
//           from-green-400
//           via-green-600
//           to-green-800
//           text-white
//           shadow-[0_15px_40px_rgba(34,197,94,.25)]
//           transition-all
//           duration-500
//           group-hover:scale-110
//           group-hover:rotate-3
//           group-hover:shadow-[0_20px_60px_rgba(34,197,94,.4)]
//           "
//         >
//           <Icon size={36} strokeWidth={1.8} />

//           {/* Inner Glow */}

//           <div
//             className="
//             pointer-events-none
//             absolute
//             inset-0
//             rounded-[28px]
//             bg-white/10
//             opacity-0
//             transition
//             duration-500
//             group-hover:opacity-100
//             "
//           />
//         </div>

//         {/* Step Label */}

//         <div
//           className="
//           mt-7
//           text-xs
//           font-bold
//           uppercase
//           tracking-[0.3em]
//           text-green-400
//           "
//         >
//           Step {number}
//         </div>

//         {/* Title */}

//         <h3
//           className="
//           mt-4
//           text-2xl
//           font-black
//           text-white
//           "
//         >
//           {title}
//         </h3>

//         {/* Description */}

//         <p
//           className="
//           mt-4
//           text-sm
//           leading-7
//           text-green-50/70
//           "
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

import type { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="group relative">
      {!isLast && (
        <div className="absolute left-[calc(50%+56px)] right-[-40px] top-[72px] hidden h-px bg-gradient-to-r from-green-400/70 via-green-300/30 to-transparent lg:block" />
      )}

      <div className="relative h-full rounded-[28px] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-green-400/40 hover:bg-white/[0.1] hover:shadow-[0_25px_70px_rgba(34,197,94,.15)]">
        <div className="absolute right-6 top-6 text-sm font-black tracking-[0.25em] text-green-400/50 transition duration-500 group-hover:text-green-300">
          {number}
        </div>

        <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-green-400/30 bg-gradient-to-br from-green-400 via-green-600 to-green-800 text-white shadow-[0_15px_40px_rgba(34,197,94,.25)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_20px_60px_rgba(34,197,94,.4)]">
          <Icon size={36} strokeWidth={1.8} />

          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>

        <div className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-green-400">
          Step {number}
        </div>

        <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-green-50/70">{description}</p>
      </div>
    </div>
  );
}