// import { LucideIcon, ArrowRight } from "lucide-react";

// interface Props {
//   title: string;
//   description: string;
//   stat: string;
//   icon: LucideIcon;
// }

// export default function WhyCard({
//   title,
//   description,
//   stat,
//   icon: Icon,
// }: Props) {
//   return (
//     <div
//       className="
// group
// relative
// overflow-hidden
// rounded-[30px]
// border
// border-green-100
// bg-white
// p-7
// transition-all
// duration-500
// hover:-translate-y-2
// hover:border-green-300
// hover:shadow-[0_25px_60px_rgba(22,163,74,.12)]
// "
//     >
//       <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-100 blur-3xl opacity-60 transition group-hover:scale-125" />

//       <div className="relative flex items-start gap-5">
//         <div
//           className="
// flex
// h-16
// w-16
// items-center
// justify-center
// rounded-2xl
// bg-gradient-to-br
// from-green-700
// to-green-500
// text-white
// shadow-lg
// transition
// duration-500
// group-hover:rotate-6
// group-hover:scale-110
// "
//         >
//           <Icon size={28} />
//         </div>

//         <div className="flex-1">
//           <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
//             {stat}
//           </span>

//           <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>

//           <p className="mt-3 leading-7 text-slate-600">{description}</p>

//           <div className="mt-5 inline-flex items-center text-sm font-semibold text-green-700">
//             Learn More
//             <ArrowRight
//               size={16}
//               className="ml-2 transition group-hover:translate-x-1"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { ArrowRight } from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  stat: string;
  icon: LucideIcon;
}

export default function WhyCard({
  title,
  description,
  stat,
  icon: Icon,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-green-100 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-[0_25px_60px_rgba(22,163,74,.12)]">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-100 opacity-60 blur-3xl transition group-hover:scale-125" />

      <div className="relative flex items-start gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-700 to-green-500 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
          <Icon size={28} />
        </div>

        <div className="flex-1">
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
            {stat}
          </span>

          <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>

          <p className="mt-3 leading-7 text-slate-600">{description}</p>

          <div className="mt-5 inline-flex items-center text-sm font-semibold text-green-700">
            Learn More
            <ArrowRight
              size={16}
              className="ml-2 transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}