"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import NavDropdown from "./NavDropdown";
import { navigation } from "@/lib/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(item.href + "/");

        if (item.children) {
          return (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition ${
                  active
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-700"
                }`}
              >
                {item.title}
                <ChevronDown size={16} />
              </button>

              {open && <NavDropdown />}
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative font-medium transition ${
              active ? "text-green-700" : "text-gray-700 hover:text-green-700"
            }`}
          >
            {item.title}

            {active && (
              <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-green-600" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
