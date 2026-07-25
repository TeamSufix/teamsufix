import Image from "next/image";

import { Building2, Briefcase, Code2, Hammer } from "lucide-react";

import OrbitNode from "./OrbitNode";

export default function HeroEcosystem() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center sm:h-[480px] lg:h-[560px]">
      {/* Central Glow */}

      <div className="absolute h-[280px] w-[280px] rounded-full bg-green-300/30 blur-3xl sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]" />

      {/* Outer Orbit */}

      <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-green-300/60 sm:h-[360px] sm:w-[360px] lg:h-[390px] lg:w-[390px]" />

      {/* Inner Orbit */}

      <div className="absolute h-[200px] w-[200px] rounded-full border border-green-200/60 sm:h-[240px] sm:w-[240px] lg:h-[260px] lg:w-[260px]" />

      {/* Center Logo */}

      <div className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-green-900 via-green-700 to-green-500 p-4 shadow-[0_25px_80px_rgba(22,163,74,.35)] sm:h-40 sm:w-40 sm:p-5 lg:h-44 lg:w-44">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-sm sm:p-4">
          <Image
            src="/logo/logo.png"
            alt="TeamSufix"
            width={150}
            height={150}
            priority
            className="h-auto w-auto max-w-full object-contain"
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
