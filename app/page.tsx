import Hero from "@/components/home/hero/Hero";
import HeroStats from "@/components/home/hero/HeroStats";
import Divisions from "@/components/home/divisions/Divisions";
import WhyChooseUs from "@/components/home/why-us/WhyChooseUs";
import Projects from "@/components/home/projects/Projects";
import Industries from "@/components/home/industries/Industries";
import Process from "@/components/home/process/Process";
import Technologies from "@/components/home/technologies/Technologies";
import Testimonials from "@/components/home/testimonials/Testimonials";
import FinalCTA from "@/components/home/cta/FinalCTA";

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />

      <HeroStats />

      <Divisions />

      <WhyChooseUs />

      <Projects />

      <Industries />

      <Process />

      <Technologies />

      <Testimonials />

      <FinalCTA />
    </main>
  );
}
