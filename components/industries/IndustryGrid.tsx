import {
  Building2,
  Church,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Rocket,
  Store,
  Users,
  Wrench,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const industries = [
  {
    icon: HandHeart,
    title: "NGOs & Nonprofits",
    description:
      "Digital systems and strategic solutions that help organizations maximize their social impact.",
    href: "/industries/ngos",
  },
  {
    icon: Landmark,
    title: "Financial Institutions",
    description:
      "Secure and scalable technology solutions for financial operations, member services and growth.",
    href: "/industries/financial-institutions",
  },
  {
    icon: GraduationCap,
    title: "Schools & Education",
    description:
      "Technology and infrastructure solutions that support better learning and institutional management.",
    href: "/industries/schools",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Practical digital and infrastructure solutions designed around better healthcare delivery.",
    href: "/industries/hospitals",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Systems, engineering and consulting solutions that improve efficiency and operational performance.",
    href: "/industries/manufacturing",
  },
  {
    icon: Wrench,
    title: "Construction",
    description:
      "Integrated design, engineering and construction expertise for successful project delivery.",
    href: "/industries/construction",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Technology, design and construction solutions for property development and real estate growth.",
    href: "/industries/real-estate",
  },
  {
    icon: Store,
    title: "SMEs",
    description:
      "Practical and scalable solutions that help growing businesses operate, compete and expand.",
    href: "/industries/smes",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Technology and strategic support that helps ambitious ideas move from concept to growth.",
    href: "/industries/startups",
  },
  {
    icon: Church,
    title: "Churches & Faith Organizations",
    description:
      "Digital and operational solutions that help organizations connect with and serve their communities.",
    href: "/industries/churches",
  },
  {
    icon: Users,
    title: "Individuals",
    description:
      "Professional technology, design and construction solutions for personal projects and ambitions.",
    href: "/industries/individuals",
  },
];

export default function IndustryGrid() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-green-100/70 blur-[130px]" />

        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-emerald-100/50 blur-[130px]" />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#15803d_1px,transparent_1px),linear-gradient(90deg,#15803d_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />
      </div>

      <Container>
        <div className="relative">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-bold text-green-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Our Industry Expertise
            </div>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Built for the way
              <span className="block text-green-700">your world works.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work across sectors, bringing the right combination of
              expertise to solve unique challenges and create measurable value.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <a
                  key={industry.title}
                  href={industry.href}
                  className="
                    group
                    relative
                    flex
                    min-h-[300px]
                    flex-col
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-7
                    shadow-sm
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-300
                    hover:shadow-[0_25px_70px_rgba(22,163,74,0.14)]
                  "
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-100/70 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <div className="relative flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.2em] text-green-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-green-600"
                    />
                  </div>

                  {/* Icon */}
                  <div className="relative mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition-all duration-500 group-hover:bg-green-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-700/20">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <h3 className="relative mt-6 text-xl font-bold tracking-tight text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  {/* Bottom */}
                  {/* <div className="relative mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-green-700">
                    Explore Industry
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </div> */}

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-950 via-green-700 to-green-400 transition-all duration-500 group-hover:w-full" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
