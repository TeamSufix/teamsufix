// import Image from "next/image";
// import { Building2, Briefcase, Code2, Hammer, Landmark } from "lucide-react";

// import OrbitNode from "./OrbitNode";

// export default function HeroEcosystem() {
//   return (
//     <div className="relative hidden h-[500px] lg:flex items-center justify-center">
//       <div className="absolute h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

//       <div className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-green-200" />

//       <div className="relative z-20 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-green-700 to-green-500 shadow-2xl">
//         <div className="rounded-full p-5">
//           <Image
//             src="/logo/logo.png"
//             alt="TeamSufix"
//             width={150}
//             height={150}
//             priority
//           />
//         </div>
//       </div>

//       <OrbitNode
//         title="Digital"
//         icon={Code2}
//         className="left-1/2 top-0 -translate-x-1/2"
//       />

//       <OrbitNode
//         title="Engineering"
//         icon={Building2}
//         className="right-0 top-1/2 -translate-y-1/2"
//       />

//       {/* <OrbitNode
//         title="Architecture"
//         icon={Landmark}
//         className="bottom-0 left-1/2 -translate-x-1/2"
//       /> */}

//       <OrbitNode
//         title="Construction"
//         icon={Hammer}
//         className="left-0 top-1/2 -translate-y-1/2"
//       />

//       {/* <OrbitNode
//         title="Consulting"
//         icon={Briefcase}
//         className="right-10 top-10"
//       /> */}

//       <OrbitNode
//         title="Consulting"
//         icon={Briefcase}
//         className="bottom-0 left-1/2 -translate-x-1/2"
//       />
//     </div>
//   );
// }

import Image from "next/image";

import { Building2, Briefcase, Code2, Hammer } from "lucide-react";

import OrbitNode from "./OrbitNode";

export default function HeroEcosystem() {
  return (
    <div className="relative hidden h-[560px] w-full items-center justify-center lg:flex">
      {/* Central Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-green-300/30 blur-3xl" />

      {/* Outer Orbit */}

      <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-green-300/60" />

      {/* Inner Orbit */}

      <div className="absolute h-[260px] w-[260px] rounded-full border border-green-200/60" />

      {/* Center Logo */}

      <div className="relative z-20 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-5 shadow-[0_25px_80px_rgba(22,163,74,.35)]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 p-4 backdrop-blur-sm">
          <Image
            src="/logo/logo.png"
            alt="TeamSufix"
            width={150}
            height={150}
            priority
            className="h-auto w-auto object-contain"
          />
        </div>
      </div>

      {/* Digital */}

      <OrbitNode
        title="Digital"
        icon={Code2}
        className="left-1/2 top-0 -translate-x-1/2"
      />

      {/* Engineering */}

      <OrbitNode
        title="Engineering"
        icon={Building2}
        className="right-0 top-1/2 -translate-y-1/2"
      />

      {/* Construction */}

      <OrbitNode
        title="Construction"
        icon={Hammer}
        className="left-0 top-1/2 -translate-y-1/2"
      />

      {/* Consulting */}

      <OrbitNode
        title="Consulting"
        icon={Briefcase}
        className="bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}