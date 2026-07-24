import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="This Privacy Policy explains how TeamSufix.System Consulting & Engineering collects, uses and protects information provided through our website."
      updated="August 2026"
    >
      <section>
        <h2>1. Introduction</h2>

        <p>
          TeamSufix.System Consulting & Engineering respects your privacy and is
          committed to protecting the personal information you provide when
          interacting with our website and services.
        </p>

        <p>
          This Privacy Policy explains what information we may collect, how we
          use it and the choices available to you.
        </p>
      </section>

      <section>
        <h2>2. Information We May Collect</h2>

        <p>Depending on how you interact with us, we may collect:</p>

        <ul>
          <li>
            Your name and contact information(email address and phone
            number).
          </li>
          <li>Company or organization information.</li>
          <li>Project or service requirements you submit to us.</li>
          <li>
            Information you provide when contacting us.
          </li>
          <li>
            Basic technical information about your interaction with our website.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>

        <p>We may use information provided to us to:</p>

        <ul>
          <li>Respond to enquiries and requests.</li>
          <li>Prepare quotations and proposals.</li>
          <li>Communicate with you about potential projects.</li>
          <li>Provide and improve our services.</li>
          <li>Process professional enquiries.</li>
          <li>Maintain the security and functionality of our website.</li>
        </ul>
      </section>

      <section>
        <h2>4. Information Sharing</h2>

        <p>
          We do not sell personal information to third parties. Information may
          be shared with trusted service providers where reasonably necessary to
          operate our business, provide requested services or comply with
          applicable legal obligations.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>

        <p>
          We take reasonable steps to protect information submitted to us from
          unauthorized access, misuse, alteration or disclosure. However, no
          method of transmitting or storing information can be guaranteed to be
          completely secure.
        </p>
      </section>

      <section>
        <h2>6. External Links</h2>

        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of external websites.
          We encourage you to review their privacy policies.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>

        <p>
          Depending on applicable law, you may have rights relating to your
          personal information, including the right to request access,
          correction or deletion of certain information.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>

        <p>For privacy-related questions or requests, please contact us at:</p>

        <p className="font-semibold text-green-700">teamsufix31@gmail.com</p>
      </section>
    </LegalPageLayout>
  );
}
