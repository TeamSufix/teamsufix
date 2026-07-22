import Container from "@/components/ui/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroEcosystem from "./HeroEcosystem";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-20">
        <HeroBackground />

        <Container>
          <div className="grid min-h-[85vh] items-center gap-16 py-14 lg:grid-cols-[1.1fr_0.9fr]">
            <HeroContent />

            <HeroEcosystem />
          </div>
        </Container>
      </section>

      
    </>
  );
}