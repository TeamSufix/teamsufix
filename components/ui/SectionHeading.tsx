// import { cn } from "@/lib/utils";

// interface SectionHeadingProps {
//   badge?: string;
//   title: string;
//   description?: string;
//   center?: boolean;
//   light?: boolean;
// }

// export default function SectionHeading({
//   badge,
//   title,
//   description,
//   center = false,
//   light = false,
// }: SectionHeadingProps) {
//   return (
//     <div className={cn("mb-12", center && "text-center")}>
//       {badge && (
//         <span
//           className={cn(
//             "inline-block rounded-full px-5 py-2 text-sm font-semibold",
//             light
//               ? "bg-white/15 text-white border border-white/20 backdrop-blur-md"
//               : "bg-green-100 text-green-700",
//           )}
//         >
//           {badge}
//         </span>
//       )}

//       <h2
//         className={cn(
//           "mt-8 font-heading text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl",
//           light ? "text-white" : "text-gray-900",
//         )}
//       >
//         {title}
//       </h2>

//       {description && (
//         <p
//           className={cn(
//             "mt-8 max-w-3xl text-lg leading-8",
//             light ? "text-green-50/90" : "text-gray-600",
//           )}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", center && "mx-auto max-w-4xl text-center")}>
      {badge && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold",
            light
              ? "border border-white/20 bg-white/10 text-white backdrop-blur-md"
              : "border border-green-100 bg-green-50 text-green-700",
          )}
        >
          {badge}
        </span>
      )}

      <h2
        className={cn(
          "mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl",
          light ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 max-w-3xl text-lg leading-8",
            center && "mx-auto",
            light ? "text-green-50/80" : "text-slate-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}