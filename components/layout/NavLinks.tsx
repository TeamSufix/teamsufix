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
                {item.title === "Business Divisions" ? (
                  <NavDropdown />
                ) : (
                  <div className="w-[360px] rounded-3xl border border-green-100 bg-white p-4 shadow-2xl shadow-slate-900/10">
                    <div className="grid gap-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group/item flex items-center justify-between rounded-2xl p-4 transition hover:bg-green-50"
                        >
                          <div>
                            <h3 className="font-semibold text-slate-900 transition group-hover/item:text-green-700">
                              {child.title}
                            </h3>

                            {child.description && (
                              <p className="mt-1 text-sm text-slate-500">
                                {child.description}
                              </p>
                            )}
                          </div>

                          <span className="text-lg text-slate-300 transition group-hover/item:translate-x-1 group-hover/item:text-green-600">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
