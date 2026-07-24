import ServicesCTA from "@/components/services/ServicesCTA";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServiceDetails from "@/components/services/ServiceDetails";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServiceCategories />

      <ServiceDetails />

      <ServicesProcess />

      <ServicesCTA />
    </>
  );
}
