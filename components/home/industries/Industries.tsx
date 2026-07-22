import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import IndustryCard from "./IndustryCard";
import { industries } from "./industries.data";

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-green-50 py-32">
      {/* Background Grid */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-40
        [background-image:linear-gradient(rgba(22,163,74,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.04)_1px,transparent_1px)]
        [background-size:48px_48px]
        "
      />

      {/* Decorative Glow */}

      <div
        className="
        pointer-events-none
        absolute
        -left-40
        top-20
        h-[420px]
        w-[420px]
        rounded-full
        bg-green-200/30
        blur-[130px]
        "
      />

      <div
        className="
        pointer-events-none
        absolute
        -right-40
        bottom-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-lime-200/20
        blur-[150px]
        "
      />

      <Container>
        <div className="relative">
          <SectionHeading
            badge="Industries We Serve"
            title="Engineering Solutions For The Industries That Move The World."
            description="Our multidisciplinary expertise allows us to support organizations across different industries with practical, scalable and innovative solutions designed around real world needs."
          />

          <br />

          <div
            className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            "
          >
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} index={index} {...industry} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
