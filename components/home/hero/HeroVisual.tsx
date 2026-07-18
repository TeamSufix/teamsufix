import { Code2, Building2, Landmark, Hammer, Briefcase } from "lucide-react";

import FloatingCard from "../FloatingCard";

export default function HeroVisual() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative grid gap-6 md:grid-cols-2">
        <FloatingCard
          title="Digital"
          subtitle="Software • AI • Cloud"
          icon={Code2}
        />

        <FloatingCard
          title="Engineering"
          subtitle="Civil • Structural"
          icon={Building2}
        />

        <FloatingCard
          title="Architecture"
          subtitle="BIM • Interior"
          icon={Landmark}
        />

        <FloatingCard
          title="Construction"
          subtitle="Commercial • Residential"
          icon={Hammer}
        />

        <div className="md:col-span-2">
          <FloatingCard
            title="Consulting"
            subtitle="Business • Technology"
            icon={Briefcase}
          />
        </div>
      </div>
    </div>
  );
}
