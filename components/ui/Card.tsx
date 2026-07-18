import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-green-300/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
