export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "TeamSufix.System Consulting & Engineering",

    url: "https://teamsufix.com",

    description:
      "A multidisciplinary consulting, engineering and technology company delivering digital, engineering, architecture, construction and consulting solutions.",

    email: "teamsufix31@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },

    slogan: "Imagine. Design. Develop. Deliver.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
