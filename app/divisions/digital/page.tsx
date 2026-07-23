import DivisionHero from "@/components/divisions/digital/DivisionHero";
import DivisionOverview from "@/components/divisions/digital/DivisionOverview";
import DivisionServices from "@/components/divisions/digital/DivisionServices";
import { divisionData } from "@/lib/divisions";

export default function DigitalPage() {
  const division = divisionData.digital;

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
    </>
  );
}
