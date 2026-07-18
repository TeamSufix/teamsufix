import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", center && "text-center")}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h2 className="font-heading text-4xl font-extrabold text-gray-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
