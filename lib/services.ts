import {
  Building2,
  BriefcaseBusiness,
  Code2,
  Hammer,
  Landmark,
  LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "digital",
    title: "Digital Solutions",
    shortTitle: "Digital",
    description:
      "Technology solutions that help organizations operate smarter, connect better and grow with confidence.",
    icon: Code2,
    services: [
      {
        title: "Web Application Development",
        description:
          "Scalable web platforms designed around your business goals and users.",
      },
      {
        title: "Mobile Application Development",
        description:
          "Modern mobile experiences that connect organizations with their customers and teams.",
      },
      {
        title: "Enterprise Software",
        description:
          "Custom software systems built to streamline complex business operations.",
      },
      {
        title: "ERP & Business Systems",
        description:
          "Connected platforms that bring core business operations into one system.",
      },
      {
        title: "CRM Solutions",
        description:
          "Customer management systems that improve relationships and business visibility.",
      },
      {
        title: "POS & Inventory Systems",
        description:
          "Reliable tools for sales, inventory, reporting and operational control.",
      },
      {
        title: "Cloud Solutions",
        description:
          "Modern cloud infrastructure and solutions that support flexibility and scale.",
      },
      {
        title: "Digital Transformation",
        description:
          "Helping organizations modernize processes, systems and customer experiences.",
      },
    ],
  },

  {
    slug: "engineering",
    title: "Engineering Services",
    shortTitle: "Engineering",
    description:
      "Technical expertise that supports safe, efficient and sustainable built environments.",
    icon: Building2,
    services: [
      {
        title: "Civil Engineering",
        description:
          "Practical engineering solutions for infrastructure and development projects.",
      },
      {
        title: "Structural Engineering",
        description:
          "Technical design and analysis for safe and dependable structures.",
      },
      {
        title: "Engineering Consultancy",
        description:
          "Professional advice and technical guidance throughout the project lifecycle.",
      },
      {
        title: "Technical Reports",
        description:
          "Clear technical documentation to support informed project decisions.",
      },
      {
        title: "Site Assessments",
        description:
          "Technical evaluation of sites, conditions and project requirements.",
      },
      {
        title: "Construction Support",
        description:
          "Engineering expertise that helps projects move from design to execution.",
      },
    ],
  },

  {
    slug: "architecture",
    title: "Architecture & Design",
    shortTitle: "Architecture",
    description:
      "Purposeful spaces designed to balance functionality, identity, sustainability and human experience.",
    icon: Landmark,
    services: [
      {
        title: "Architectural Design",
        description:
          "Thoughtful designs created around people, purpose and context.",
      },
      {
        title: "Building Plans",
        description:
          "Professional plans that communicate design intent and construction requirements.",
      },
      {
        title: "3D Visualization",
        description:
          "Visual representations that bring ideas to life before construction begins.",
      },
      {
        title: "Interior Design",
        description:
          "Interior environments designed for comfort, function and identity.",
      },
      {
        title: "BIM Services",
        description:
          "Connected digital building information for better coordination and planning.",
      },
      {
        title: "Space Planning",
        description:
          "Efficient planning that helps spaces perform better for their users.",
      },
    ],
  },

  {
    slug: "construction",
    title: "Construction Services",
    shortTitle: "Construction",
    description:
      "Dependable construction delivery focused on quality, coordination and lasting value.",
    icon: Hammer,
    services: [
      {
        title: "Residential Construction",
        description:
          "Building homes and residential spaces designed for lasting value.",
      },
      {
        title: "Commercial Construction",
        description:
          "Professional construction delivery for business and commercial environments.",
      },
      {
        title: "Industrial Construction",
        description:
          "Construction solutions for industrial and operational environments.",
      },
      {
        title: "Renovation & Remodeling",
        description:
          "Transforming existing spaces to meet new needs and expectations.",
      },
      {
        title: "Project Management",
        description:
          "Coordinating people, resources and timelines to keep projects moving.",
      },
      {
        title: "Facility Management",
        description:
          "Supporting the performance and long-term value of built environments.",
      },
    ],
  },

  {
    slug: "consulting",
    title: "Business Consulting",
    shortTitle: "Consulting",
    description:
      "Strategic thinking and practical expertise for better decisions, stronger operations and sustainable growth.",
    icon: BriefcaseBusiness,
    services: [
      {
        title: "Business Strategy",
        description:
          "Helping organizations define direction and make confident strategic decisions.",
      },
      {
        title: "IT Consulting",
        description:
          "Aligning technology investments with organizational goals.",
      },
      {
        title: "Digital Transformation",
        description:
          "Helping organizations adopt better systems, processes and ways of working.",
      },
      {
        title: "Process Improvement",
        description:
          "Identifying inefficiencies and creating smarter operational processes.",
      },
      {
        title: "Training & Capacity Building",
        description:
          "Building knowledge and capabilities that support long-term performance.",
      },
      {
        title: "Business Automation",
        description:
          "Using technology to reduce repetitive work and improve efficiency.",
      },
    ],
  },
];
