import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import CoreValues from "@/components/about/CoreValues";
import Ecosystem from "@/components/about/Ecosystem";
import LeadershipPhilosophy from "@/components/about/LeadershipPhilosophy";
import Motto from "@/components/about/Motto";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import WhyWeExist from "@/components/about/WhyWeExist";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <CompanyOverview />

      <OurStory />

      <VisionMission />

      <Motto />

      <CoreValues />

      <LeadershipPhilosophy />

      <Ecosystem />

      <WhyWeExist />
    </main>
  );
}
