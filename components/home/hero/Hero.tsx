import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroEcosystem from "./HeroEcosystem";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 sm:pb-20">
      <HeroBackground />

      <Container>
        <div className="grid min-h-[auto] items-center gap-8 py-14 sm:gap-12 sm:py-20 lg:min-h-[85vh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-14">
          <HeroContent />

          <HeroEcosystem />
        </div>
      </Container>
    </section>
  );
}
