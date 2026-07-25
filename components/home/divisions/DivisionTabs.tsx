"use client";

import { divisions } from "./divisions.data";

interface Props {
  active: number;
  setActive: (index: number) => void;
}

export default function DivisionTabs({ active, setActive }: Props) {
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
      {divisions.map((division, index) => {
        const Icon = division.icon;

        return (
          <button
            key={division.title}
            type="button"
            onClick={() => setActive(index)}
            className={`
              flex
              min-h-14
              w-full
              min-w-0
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              px-2
              py-3
              transition-all
              duration-300
              sm:w-auto
              sm:min-w-[140px]
              sm:px-6
              sm:py-4

              ${
                active === index
                  ? "border-green-600 bg-gradient-to-r from-green-700 to-green-500 text-white shadow-xl"
                  : "border-green-100 bg-white text-slate-700 hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
              }
            `}
          >
            <Icon size={18} className="shrink-0" />

            <span className="truncate text-xs font-semibold sm:text-base">
              {division.short}
            </span>
          </button>
        );
      })}
    </div>
  );
}
