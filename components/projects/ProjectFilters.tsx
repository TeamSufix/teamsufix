"use client";

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  "All",
  "Digital",
  "Engineering",
  "Architecture",
  "Construction",
  "Consulting",
];

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                active
                  ? "border-green-700 bg-green-700 text-white shadow-lg shadow-green-700/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:text-green-700"
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
