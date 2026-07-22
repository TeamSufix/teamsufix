// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronDown } from "lucide-react";

// import { navigation } from "@/lib/navigation";

// export default function NavLinks() {
//   const pathname = usePathname();

//   return (
//     <nav className="hidden lg:flex items-center gap-9">
//       {navigation.map((item) => {
//         const active = pathname === item.href;

//         return (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="
//               group
//               relative
//               text-[15px]
//               font-semibold
//               tracking-wide
//               text-slate-700
//               transition-colors
//               hover:text-[var(--primary)]
//             "
//           >
//             <span className="flex items-center gap-1">
//               {item.title}

//               {item.children && (
//                 <ChevronDown
//                   size={15}
//                   className="
//                     transition
//                     group-hover:rotate-180
//                   "
//                 />
//               )}
//             </span>

//             <span
//               className={`
//                 absolute
//                 -bottom-2
//                 left-0
//                 h-[2px]
//                 rounded-full
//                 bg-[var(--primary)]
//                 transition-all
//                 duration-300
//                 ${active ? "w-full" : "w-0 group-hover:w-full"}
//               `}
//             />
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";

import { navigation } from "@/lib/navigation";

import NavDropdown from "./NavDropdown";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const hasChildren = Boolean(item.children);

        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(`${item.href}/`));

        if (hasChildren) {
          return (
            <div key={item.title} className="group relative">
              <Link
                href={item.href}
                className={`
                  relative
                  flex
                  items-center
                  gap-1
                  text-[15px]
                  font-semibold
                  tracking-wide
                  transition-colors
                  ${
                    active
                      ? "text-green-700"
                      : "text-slate-700 hover:text-green-700"
                  }
                `}
              >
                {item.title}

                <ChevronDown
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    rounded-full
                    bg-green-600
                    transition-all
                    duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>

              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <NavDropdown />
              </div>
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              group
              relative
              text-[15px]
              font-semibold
              tracking-wide
              transition-colors
              ${
                active
                  ? "text-green-700"
                  : "text-slate-700 hover:text-green-700"
              }
            `}
          >
            {item.title}

            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-[2px]
                rounded-full
                bg-green-600
                transition-all
                duration-300
                ${active ? "w-full" : "w-0 group-hover:w-full"}
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}