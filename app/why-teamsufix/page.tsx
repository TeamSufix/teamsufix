import WhyTeamSufixAdvantages from "@/components/why-teamsufix/WhyTeamSufixAdvantages";
import WhyTeamSufixCTA from "@/components/why-teamsufix/WhyTeamSufixCTA";
import WhyTeamSufixHero from "@/components/why-teamsufix/WhyTeamSufixHero";
import WhyTeamSufixPromise from "@/components/why-teamsufix/WhyTeamSufixPromise";
import WhyTeamSufixStandards from "@/components/why-teamsufix/WhyTeamSufixStandards";

export default function WhyTeamSufixPage() {
  return (
    <main>
      <WhyTeamSufixHero />

      <WhyTeamSufixAdvantages />

      <WhyTeamSufixPromise />

      <WhyTeamSufixStandards />

      <WhyTeamSufixCTA />
    </main>
  );
}
