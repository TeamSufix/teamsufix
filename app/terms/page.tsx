import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      description="These terms govern your use of the TeamSufix website and your interactions with our services."
      updated="August 2026"
    >
      <section>
        <h2>1. Acceptance of These Terms</h2>

        <p>
          By accessing or using this website, you agree to be bound by these
          Terms & Conditions. If you do not agree with these terms, please do
          not use the website.
        </p>
      </section>

      <section>
        <h2>2. About TeamSufix</h2>

        <p>
          TeamSufix.System Consulting & Engineering provides services across
          Technology, Engineering, Architecture, Construction and Consulting.
        </p>

        <p>
          Information displayed on this website is provided for general
          informational purposes and does not automatically constitute a binding
          service agreement or professional engagement.
        </p>
      </section>

      <section>
        <h2>3. Use of the Website</h2>

        <p>You agree to use this website lawfully and responsibly.</p>

        <p>You must not:</p>

        <ul>
          <li>Use the website for unlawful purposes.</li>
          <li>
            Attempt to gain unauthorized access to systems or information.
          </li>
          <li>Interfere with the operation or security of the website.</li>
          <li>Submit false, misleading or fraudulent information.</li>
          <li>Copy or misuse website content without permission.</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>

        <p>
          Unless otherwise stated, the content of this website, including text,
          branding, graphics, logos and other materials, belongs to TeamSufix or
          its respective owners.
        </p>

        <p>
          Content may not be reproduced, modified, distributed or commercially
          exploited without appropriate permission.
        </p>
      </section>

      <section>
        <h2>5. Project Enquiries and Quotations</h2>

        <p>
          Information submitted through our contact or quote request forms is
          used to understand project requirements and respond to enquiries.
        </p>

        <p>
          A quotation, proposal or discussion does not create a binding
          contractual relationship unless a formal agreement is accepted by the
          relevant parties.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>

        <p>
          The website may use or link to third-party services. TeamSufix is not
          responsible for the availability, content, security or policies of
          third-party websites and services.
        </p>
      </section>

      <section>
        <h2>7. Disclaimer</h2>

        <p>
          We aim to keep the information on this website accurate and current.
          However, we do not guarantee that all information is complete,
          error-free or continuously up to date.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>

        <p>
          To the extent permitted by applicable law, TeamSufix shall not be
          liable for losses arising from reliance on general information
          presented on this website or from temporary unavailability of the
          website.
        </p>
      </section>

      <section>
        <h2>9. Changes to These Terms</h2>

        <p>
          We may update these Terms & Conditions from time to time. Updated
          versions will be published on this page with a revised update date.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>

        <p>Questions regarding these Terms & Conditions may be sent to:</p>

        <p className="font-semibold text-green-700">teamsufix31@gmail.com</p>
      </section>
    </LegalPageLayout>
  );
}
