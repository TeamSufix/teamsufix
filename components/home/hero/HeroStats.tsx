import Container from "@/components/ui/Container";

const stats = [
  {
    value: "5",
    label: "Business Divisions",
  },
  {
    value: "50+",
    label: "Professional Services",
  },
  {
    value: "10+",
    label: "Industries Served",
  },
  {
    value: "100%",
    label: "Commitment to Quality",
  },
];

export default function HeroStats() {
  return (
    <section className="relative pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-green-100
            bg-gradient-to-br
            from-white
            via-green-50
            to-green-100
            shadow-[0_20px_60px_rgba(22,163,74,.12)]
          "
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`
                  p-7
                  text-center
                  transition-colors
                  duration-300
                  hover:bg-green-50/70
                  sm:p-8
                  lg:p-10
                  ${
                    index !== stats.length - 1
                      ? "border-b border-green-100 sm:border-b-0 lg:border-r"
                      : ""
                  }
                  ${index === 1 ? "sm:border-r sm:border-green-100" : ""}
                `}
              >
                <h3
                  className="
                    bg-gradient-to-r
                    from-green-700
                    to-green-500
                    bg-clip-text
                    text-4xl
                    font-black
                    tracking-tight
                    text-transparent
                    sm:text-5xl
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-slate-600
                    sm:text-sm
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
