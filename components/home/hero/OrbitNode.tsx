import { LucideIcon } from "lucide-react";

interface OrbitNodeProps {
  title: string;
  icon: LucideIcon;
  className?: string;
}

export default function OrbitNode({
  title,
  icon: Icon,
  className,
}: OrbitNodeProps) {
  return (
    <div className={`absolute ${className}`}>
      <div className="group flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-green-100 bg-white/90 shadow-xl backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-green-500 hover:shadow-green-200">
        <div className="mb-2 rounded-2xl bg-green-100 p-3 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
          <Icon size={24} />
        </div>

        <p className="text-center text-sm font-semibold">{title}</p>
      </div>
    </div>
  );
}
