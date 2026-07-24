import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Cookie Policy"
      description="This Cookie Policy explains how cookies and similar technologies may be used on the TeamSufix website."
      updated="August 2026"
    >
      <section>
        <h2>1. What Are Cookies?</h2>

        <p>
          Cookies are small text files stored on your device when you visit
          certain websites. They can help websites remember information about
          your visit and improve functionality.
        </p>
      </section>

      <section>
        <h2>2. How We May Use Cookies</h2>

        <p>Cookies may be used to:</p>

        <ul>
          <li>Support essential website functionality.</li>
          <li>Remember certain preferences.</li>
          <li>Understand how visitors use the website.</li>
          <li>Improve website performance and user experience.</li>
        </ul>
      </section>

      <section>
        <h2>3. Essential Cookies</h2>

        <p>
          Some cookies may be necessary for the website to operate properly.
          These cookies generally cannot be disabled through the website because
          they are required for essential functionality.
        </p>
      </section>

      <section>
        <h2>4. Analytics and Third-Party Services</h2>

        <p>
          We may use third-party tools in the future to understand website
          performance and visitor activity. These services may use cookies or
          similar technologies in accordance with their own privacy policies.
        </p>
      </section>

      <section>
        <h2>5. Managing Cookies</h2>

        <p>
          Most web browsers allow you to manage or disable cookies through
          browser settings. Disabling certain cookies may affect how some
          websites function.
        </p>
      </section>

      <section>
        <h2>6. Updates to This Policy</h2>

        <p>
          We may update this Cookie Policy as our website, services or
          technologies change. The updated version will be published on this
          page.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>

        <p>If you have questions about this Cookie Policy, please contact:</p>

        <p className="font-semibold text-green-700">teamsufix31@gmail.com</p>
      </section>
    </LegalPageLayout>
  );
}
