import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import FAQ from "@/components/contact/FAQ";
// import CareersCTA from "@/components/contact/CareersCTA";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactDetails />

      <ContactForm />

      <FAQ />

      {/* <CareersCTA /> */}
    </main>
  );
}
