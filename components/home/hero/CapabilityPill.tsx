interface CapabilityPillProps {
  text: string;
}

export default function CapabilityPill({ text }: CapabilityPillProps) {
  return (
    <div
      className="
        group
        inline-flex
        items-center
        rounded-full
        border
        border-green-100
        bg-white/90
        px-4
        py-2
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-green-500
        hover:shadow-lg
      "
    >
      <span className="mr-2 text-green-600">●</span>

      <span className="text-sm font-semibold text-gray-700">{text}</span>
    </div>
  );
}
