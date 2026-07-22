// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Code2, Building2, Landmark, Hammer, Briefcase } from "lucide-react";

// const divisions = [
//   {
//     title: "TeamSufix Digital",
//     href: "/divisions/digital",
//     description: "Software, AI, Cloud & Automation",
//     icon: Code2,
//   },
//   {
//     title: "Engineering",
//     href: "/divisions/engineering",
//     description: "Civil, Structural & Electrical",
//     icon: Building2,
//   },
//   {
//     title: "Architecture",
//     href: "/divisions/architecture",
//     description: "Building Design & BIM",
//     icon: Landmark,
//   },
//   {
//     title: "Construction",
//     href: "/divisions/construction",
//     description: "Project Delivery & Site Management",
//     icon: Hammer,
//   },
//   {
//     title: "Consulting",
//     href: "/divisions/consulting",
//     description: "Business & Technology Advisory",
//     icon: Briefcase,
//   },
// ];

// export default function NavDropdown() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.2 }}
//       className="absolute left-1/2 top-full mt-4 w-[700px] -translate-x-1/2 rounded-3xl border border-green-100 bg-white p-6 shadow-2xl"
//     >
//       <div className="grid grid-cols-2 gap-4">
//         {divisions.map((item) => {
//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="group rounded-2xl p-4 transition hover:bg-green-50"
//             >
//               <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
//                 <Icon size={24} />
//               </div>

//               <h3 className="font-semibold text-gray-900 group-hover:text-green-700">
//                 {item.title}
//               </h3>

//               <p className="mt-2 text-sm text-gray-500">{item.description}</p>
//             </Link>
//           );
//         })}
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Building2, Briefcase, Code2, Hammer, Landmark } from "lucide-react";

const divisions = [
  {
    title: "TeamSufix Digital",
    href: "/divisions/digital",
    description: "Software, AI, Cloud & Automation",
    icon: Code2,
  },
  {
    title: "Engineering",
    href: "/divisions/engineering",
    description: "Civil, Structural & Electrical",
    icon: Building2,
  },
  {
    title: "Architecture",
    href: "/divisions/architecture",
    description: "Building Design & BIM",
    icon: Landmark,
  },
  {
    title: "Construction",
    href: "/divisions/construction",
    description: "Project Delivery & Site Management",
    icon: Hammer,
  },
  {
    title: "Consulting",
    href: "/divisions/consulting",
    description: "Business & Technology Advisory",
    icon: Briefcase,
  },
];

export default function NavDropdown() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="absolute left-1/2 top-full mt-5 w-[700px] -translate-x-1/2 rounded-3xl border border-green-100 bg-white p-6 shadow-2xl shadow-slate-900/10"
    >
      <div className="grid grid-cols-2 gap-3">
        {divisions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl p-4 transition hover:bg-green-50"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
                <Icon size={24} />
              </div>

              <h3 className="font-semibold text-slate-900 transition group-hover:text-green-700">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}