import Image from "next/image";

import { Code2, Building2, Landmark, Hammer, Briefcase } from "lucide-react";

import OrbitNode from "./OrbitNode";

export default function HeroEcosystem() {
  return (
    <div className="relative mx-auto h-[600px] w-[600px]">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/20 blur-3xl" />

      {/* Connection Ring */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-green-200" />

      {/* Center */}
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-green-700 to-lime-500 shadow-2xl">
        <Image
          src="/logo/logo.png"
          alt="TeamSufix"
          width={80}
          height={80}
          className="rounded-full bg-white p-2"
        />
      </div>

      <OrbitNode
        title="Digital"
        icon={Code2}
        className="left-1/2 top-0 -translate-x-1/2"
      />

      <OrbitNode
        title="Engineering"
        icon={Building2}
        className="right-0 top-1/2 -translate-y-1/2"
      />

      <OrbitNode
        title="Architecture"
        icon={Landmark}
        className="bottom-0 left-1/2 -translate-x-1/2"
      />

      <OrbitNode
        title="Construction"
        icon={Hammer}
        className="left-0 top-1/2 -translate-y-1/2"
      />

      <OrbitNode
        title="Consulting"
        icon={Briefcase}
        className="right-16 top-16"
      />
    </div>
  );
}
