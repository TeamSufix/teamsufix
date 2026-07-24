import DivisionCTA from "@/components/divisions/digital/DivisionCTA";
import DivisionExpertise from "@/components/divisions/digital/DivisionExpertise";
import DivisionHero from "@/components/divisions/digital/DivisionHero";
import DivisionIndustries from "@/components/divisions/digital/DivisionIndustries";
import DivisionOverview from "@/components/divisions/digital/DivisionOverview";
import DivisionServices from "@/components/divisions/digital/DivisionServices";

import { divisionData } from "@/lib/divisions";

export default function EngineeringPage() {
  const division = divisionData.engineering;

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
        title="Have an engineering challenge to solve?"
        description="Let's discuss your project and explore the technical expertise required to move it forward with confidence."
      />
    </>
  );
}
