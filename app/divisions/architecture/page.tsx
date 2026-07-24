import DivisionCTA from "@/components/divisions/digital/DivisionCTA";
import DivisionExpertise from "@/components/divisions/digital/DivisionExpertise";
import DivisionHero from "@/components/divisions/digital/DivisionHero";
import DivisionIndustries from "@/components/divisions/digital/DivisionIndustries";
import DivisionOverview from "@/components/divisions/digital/DivisionOverview";
import DivisionServices from "@/components/divisions/digital/DivisionServices";

import { divisionData } from "@/lib/divisions";

export default function ArchitecturePage() {
  const division = divisionData.architecture;

  return (
    <>
      <DivisionHero
        title={division.title}
        tagline={division.tagline}
        description={division.description}
        icon={division.icon}
      />

      <DivisionOverview
        title={division.title}
        description={division.description}
        benefits={division.benefits}
      />

      <DivisionServices services={division.services} />

      <DivisionIndustries industries={division.industries} />

      <DivisionExpertise expertise={division.expertise} />

      <DivisionCTA
        title="Have a space or design idea in mind?"
        description="Let's transform your vision into a thoughtful, functional and purposeful design."
      />
    </>
  );
}
