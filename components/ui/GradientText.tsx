import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-green-800 via-green-600 to-lime-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}
