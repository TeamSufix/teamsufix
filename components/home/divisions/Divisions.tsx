import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import DivisionShowcase from "./DivisionShowcase";

export default function Divisions() {
  return (
    <section
      className="
          relative
          bg-white
          py-20
          sm:py-24
          lg:py-32
        "
    >
      <div className="pointer-events-none absolute left-0 top-40 h-96 w-96 rounded-full bg-green-200/30 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-20 right-0 h-[420px] w-[420px] rounded-full bg-lime-200/20 blur-[140px]" />

      <Container>
        <div className="relative">
          <SectionHeading
            badge="Business Ecosystem"
            title="One Integrated Team."
            description="Every TeamSufix division brings deep expertise to its field while working together to deliver seamless, end-to-end solutions for clients across technology, engineering, architecture, construction and consulting."
          />

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <DivisionShowcase />
          </div>
        </div>
      </Container>
    </section>
  );
}
