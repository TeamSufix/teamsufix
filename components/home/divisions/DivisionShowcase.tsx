// "use client";

// import { useState } from "react";

// import { divisions } from "./divisions.data";

// import DivisionImage from "./DivisionImage";
// import DivisionDetails from "./DivisionDetails";
// import DivisionTabs from "./DivisionTabs";

// export default function DivisionShowcase() {
//   const [active, setActive] = useState(0);

//   const division = divisions[active];

//   return (
//     <div className="space-y-10">
//       <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
//         <DivisionImage division={division} />

//         <DivisionDetails division={division} />
//       </div>

//       <br />

//       <DivisionTabs active={active} setActive={setActive} />
//     </div>
//   );
// }

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
    <div className="space-y-12">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <DivisionImage division={division} />

        <DivisionDetails division={division} />
      </div>

      <DivisionTabs active={active} setActive={setActive} />
    </div>
  );
}