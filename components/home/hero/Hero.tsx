import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-white to-green-100" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(22,163,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
