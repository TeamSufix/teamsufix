import { Clock3, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import { COMPANY } from "@/lib/constants";

const details = [
  {
    icon: Mail,
    title: "Email Us",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Spintex Road, near Kwafio Road, Accra, Ghana",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    value: "Monday – Friday · 8:00 AM – 5:00 PM",
  },
];

export default function ContactDetails() {
  return (
    <section
      id="contact-details"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Contact TeamSufix
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
              Let&apos;s move your
              <span className="block text-green-700">ideas forward.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Speak with our team about your project, business challenge,
              technical needs or potential partnership.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {details.map((item) => {
                const Icon = item.icon;

                const content = (
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-green-100 bg-green-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:shadow-[0_20px_50px_rgba(22,163,74,0.1)]">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-white shadow-lg shadow-green-700/20 transition group-hover:scale-105">
                        <Icon size={21} />
                      </div>

                      {item.href && (
                        <ArrowUpRight
                          size={18}
                          className="text-green-700 opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        />
                      )}
                    </div>

                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-green-700">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">
                      {item.value}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a key={item.title} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[40px] bg-green-100/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border-8 border-white bg-green-50 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <iframe
                title="TeamSufix office location"
                src="https://www.google.com/maps?q=Baatsona%20Spintex%20Accra%20Ghana&output=embed"
                className="h-[480px] w-full border-0 grayscale-[0.2] transition duration-700 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
