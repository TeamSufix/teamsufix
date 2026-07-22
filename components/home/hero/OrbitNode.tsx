// import { LucideIcon } from "lucide-react";

// interface OrbitNodeProps {
//   title: string;
//   icon: LucideIcon;
//   className?: string;
// }

// export default function OrbitNode({
//   title,
//   icon: Icon,
//   className,
// }: OrbitNodeProps) {
//   return (
//     <div className={`absolute ${className}`}>
//       <div className="flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-green-100 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500">
//         <div className="rounded-2xl bg-green-100 p-3 text-green-700">
//           <Icon size={24} />
//         </div>

//         <p className="mt-3 text-center text-sm font-semibold text-gray-700">
//           {title}
//         </p>
//       </div>
//     </div>
//   );
// }

import type { LucideIcon } from "lucide-react";

interface OrbitNodeProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

export default function OrbitNode({
  title,
  icon: Icon,
  className = "",
}: OrbitNodeProps) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="
          flex
          h-28
          w-28
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-green-100
          bg-white/95
          shadow-xl
          shadow-green-900/10
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-green-500
          hover:shadow-2xl
        "
      >
        <div className="rounded-2xl bg-green-100 p-3 text-green-700">
          <Icon size={24} strokeWidth={1.8} />
        </div>

        <p className="mt-3 text-center text-sm font-semibold text-slate-700">
          {title}
        </p>
      </div>
    </div>
  );
}