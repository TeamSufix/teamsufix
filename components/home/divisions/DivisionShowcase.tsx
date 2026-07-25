"use client";

import { useState } from "react";

import { divisions } from "./divisions.data";

import DivisionDetails from "./DivisionDetails";
import DivisionImage from "./DivisionImage";
import DivisionTabs from "./DivisionTabs";

export default function DivisionShowcase() {
  const [active, setActive] = useState(0);

  const division = divisions[active];

  return (
    <div className="relative w-full">
      {/* Main Content */}
      <div className="grid w-full gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <DivisionImage division={division} />
        </div>

        <div className="min-w-0">
          <DivisionDetails division={division} />
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-20 mt-12 w-full sm:mt-14">
        <DivisionTabs active={active} setActive={setActive} />
      </div>
    </div>
  );
}
