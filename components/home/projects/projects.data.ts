import { Code2, Building2, Landmark, Hammer, Briefcase } from "lucide-react";

export const projects = [
  {
    title: "Enterprise Resource Planning Platform",

    category: "Digital",

    description:
      "A scalable ERP ecosystem integrating finance, inventory, HR, procurement and business intelligence for enterprise organizations.",

    icon: Code2,

    image: "/projects/erp.jpg",

    href: "/projects/erp-system",

    tags: ["ERP", "Cloud", "Finance", "Inventory"],
  },

  {
    title: "Commercial Office Development",

    category: "Construction",

    description:
      "End-to-end construction delivery including project planning, supervision, structural execution and finishing.",

    icon: Hammer,

    image: "/projects/construction.jpg",

    href: "/projects/commercial-office",

    tags: ["Commercial", "Project Delivery", "Civil", "Management"],
  },

  {
    title: "Smart Engineering Solutions",

    category: "Engineering",

    description:
      "Civil and structural engineering designs focused on sustainability, safety and cost efficiency.",

    icon: Building2,

    image: "/projects/engineering.jpg",

    href: "/projects/engineering-design",

    tags: ["Structural", "Civil", "Design", "Analysis"],
  },

  {
    title: "Architectural Innovation",

    category: "Architecture",

    description:
      "Modern architectural concepts combining BIM workflows, visualization and sustainable planning.",

    icon: Landmark,

    image: "/projects/architecture.jpg",

    href: "/projects/architecture-design",

    tags: ["Architecture", "BIM", "Interior", "Visualization"],
  },

  {
    title: "Business Transformation Strategy",

    category: "Consulting",

    description:
      "Technology and management consulting enabling organizations to modernize operations and accelerate growth.",

    icon: Briefcase,

    image: "/projects/consulting.png",

    href: "/projects/business-transformation",

    tags: ["Strategy", "Digital", "Training", "Transformation"],
  },
];
