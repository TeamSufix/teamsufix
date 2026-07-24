export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    children: [
      {
        title: "About TeamSufix",
        href: "/about",
      },
      {
        title: "Projects",
        href: "/projects",
      },
      {
        title: "Why TeamSufix",
        href: "/why-teamsufix",
      },
      {
        title: "Process",
        href: "/process",
      },
    ],
  },
  {
    title: "Business Divisions",
    href: "/divisions",
    children: [
      {
        title: "TeamSufix Digital",
        href: "/divisions/digital",
        description: "Software, AI, Cloud, Websites & Mobile Apps",
      },
      {
        title: "Engineering",
        href: "/divisions/engineering",
        description: "Civil, Structural & Electrical Engineering",
      },
      {
        title: "Architecture",
        href: "/divisions/architecture",
        description: "Building Design, BIM & Interior Design",
      },
      {
        title: "Construction",
        href: "/divisions/construction",
        description: "Residential, Commercial & Industrial Projects",
      },
      {
        title: "Consulting",
        href: "/divisions/consulting",
        description: "Business Strategy & Digital Transformation",
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
