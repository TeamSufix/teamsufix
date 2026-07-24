import DivisionCTA from "@/components/divisions/digital/DivisionCTA";
import DivisionExpertise from "@/components/divisions/digital/DivisionExpertise";
import DivisionHero from "@/components/divisions/digital/DivisionHero";
import DivisionIndustries from "@/components/divisions/digital/DivisionIndustries";
import DivisionOverview from "@/components/divisions/digital/DivisionOverview";
import DivisionServices from "@/components/divisions/digital/DivisionServices";

import { divisionData } from "@/lib/divisions";

export default function ConstructionPage() {
  const division = divisionData.construction;

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
        title="Ready to turn plans into reality?"
        description="From project coordination to construction execution, let's build something dependable together."
      />
    </>
  );
}
