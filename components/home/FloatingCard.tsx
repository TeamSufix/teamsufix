import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function FloatingCard({
  title,
  subtitle,
  icon: Icon,
}: FloatingCardProps) {
  return (
    <div className="group rounded-3xl border border-green-100 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-lime-500 text-white">
        <Icon size={28} />
      </div>

      <h3 className="text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{subtitle}</p>
    </div>
  );
}
