import type { LucideIcon } from "lucide-react";

interface OrbitNodeProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

export default function OrbitNode({
  title,
  icon: Icon,
  className = "",
}: OrbitNodeProps) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-green-100 bg-white/95 shadow-lg shadow-green-900/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl sm:h-24 sm:w-24 sm:rounded-3xl lg:h-28 lg:w-28">
        <div className="rounded-xl bg-green-100 p-2 text-green-700 sm:rounded-2xl sm:p-2.5 lg:p-3">
          <Icon
            size={18}
            strokeWidth={1.8}
            className="sm:h-5 sm:w-5 lg:h-6 lg:w-6"
          />
        </div>

        <p className="mt-2 text-center text-[10px] font-semibold text-slate-700 sm:text-xs lg:mt-3 lg:text-sm">
          {title}
        </p>
      </div>
    </div>
  );
}
