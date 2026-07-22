"use client";

import { divisions } from "./divisions.data";

interface Props {
  active: number;
  setActive: (index: number) => void;
}

export default function DivisionTabs({ active, setActive }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {divisions.map((division, index) => {
        const Icon = division.icon;

        return (
          <button
            key={division.title}
            onClick={() => setActive(index)}
            className={`
            group
            flex
            items-center
            gap-3
            rounded-2xl
            border
            px-6
            py-4
            h-6
            w-45
            transition-all
            duration-300

            ${
              active === index
                ? "border-green-600 bg-gradient-to-r from-green-700 to-green-500 text-white shadow-xl"
                : "border-green-100 bg-white hover:-translate-y-1 hover:border-green-400 hover:shadow-lg"
            }
            `}
          >
            <Icon
              size={20}
              className={active === index ? "text-white" : "text-green-700"}
            />

            <span className="font-semibold">{division.short}</span>
          </button>
        );
      })}
    </div>
  );
}
