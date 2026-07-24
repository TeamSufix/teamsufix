import {
  Building2,
  BriefcaseBusiness,
  Code2,
  Hammer,
  Landmark,
  LucideIcon,
} from "lucide-react";

export interface DivisionData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  services: string[];
  industries: string[];
  expertise: string[];
  benefits: string[];
}

export const divisionData: Record<string, DivisionData> = {
  digital: {
    slug: "digital",
    title: "TeamSufix.Digital",
    shortTitle: "Digital",
    icon: Code2,

    tagline: "Technology that moves ideas forward.",

    description:
      "We design and build digital solutions that help organizations operate smarter, serve their customers better and grow with confidence.",

    services: [
      "Web Application Development",
      "Mobile Application Development",
      "Enterprise Software",
      "ERP Systems",
      "CRM Systems",
      "POS & Inventory Systems",
      "Cloud Solutions",
    //   "API Development",
      "Digital Transformation",
    //   "Cybersecurity Solutions",
    ],

    industries: [
      "Financial Institutions",
      "NGOs",
      "Schools",
      "Healthcare",
      "Manufacturing",
      "SMEs",
      "Startups",
    ],

    expertise: [
      "Web Technologies",
      "Mobile Technologies",
      "Cloud Platforms",
      "Enterprise Systems",
      "Data & Automation",
      "Digital Strategy",
    ],

    benefits: [
      "Scalable technology solutions",
      "Improved operational efficiency",
      "Better customer experiences",
      "Connected business systems",
      "Reliable long-term support",
    ],
  },

  engineering: {
    slug: "engineering",
    title: "TeamSufix.Engineering",
    shortTitle: "Engineering",
    icon: Building2,

    tagline: "Engineering solutions built for real world performance.",

    description:
      "We provide technical engineering expertise that supports safe, efficient and sustainable projects from concept through delivery.",

    services: [
      "Civil Engineering",
      "Structural Engineering",
      "Electrical Engineering",
      "Mechanical Engineering",
      "Engineering Consultancy",
      "Technical Reports",
      "Site Assessments",
      "Surveying Services",
    ],

    industries: [
      "Construction",
      "Real Estate",
      "Manufacturing",
      "Infrastructure",
      "Government",
      "Commercial Development",
    ],

    expertise: [
      "Technical Design",
      "Structural Analysis",
      "Project Assessment",
      "Engineering Consultancy",
      "Construction Support",
      "Technical Documentation",
    ],

    benefits: [
      "Technical confidence",
      "Practical engineering solutions",
      "Improved project performance",
      "Professional project support",
      "Long-term reliability",
    ],
  },

  architecture: {
    slug: "architecture",
    title: "TeamSufix.Architecture",
    shortTitle: "Architecture",
    icon: Landmark,

    tagline: "Designing spaces that serve people and purpose.",

    description:
      "We create thoughtful architectural solutions that balance function, beauty, sustainability and the realities of the environment.",

    services: [
      "Residential Architecture",
      "Commercial Architecture",
      "Apartment Design",
      "Office Design",
      "School Design",
      "Hospital Design",
      "2D & 3D Visualization",
      "Interior Design",
      "Exterior Design",
      "BIM Services",
    ],

    industries: [
      "Real Estate",
      "Construction",
      "Education",
      "Healthcare",
      "Commercial Development",
      "Residential Development",
    ],

    expertise: [
      "Architectural Design",
      "3D Visualization",
      "Interior Design",
      "BIM",
      "Space Planning",
      "Sustainable Design",
    ],

    benefits: [
      "Purpose-driven design",
      "Clear visual communication",
      "Better project planning",
      "Functional spaces",
      "Strong design identity",
    ],
  },

  construction: {
    slug: "construction",
    title: "TeamSufix.Construction",
    shortTitle: "Construction",
    icon: Hammer,

    tagline: "From plans to places people can rely on.",

    description:
      "We deliver construction solutions with a focus on quality, coordination, safety and dependable project execution.",

    services: [
      "Residential Construction",
      "Commercial Construction",
      "Industrial Construction",
      "Renovation",
      "Project Management",
      "Facility Management",
    ],

    industries: [
      "Residential",
      "Commercial",
      "Industrial",
      "Real Estate",
      "Institutions",
      "Infrastructure",
    ],

    expertise: [
      "Project Coordination",
      "Construction Management",
      "Site Execution",
      "Quality Control",
      "Renovation",
      "Facility Management",
    ],

    benefits: [
      "Reliable project delivery",
      "Better coordination",
      "Quality-focused execution",
      "Professional oversight",
      "Long-term project value",
    ],
  },

  consulting: {
    slug: "consulting",
    title: "TeamSufix.Consulting",
    shortTitle: "Consulting",
    icon: BriefcaseBusiness,

    tagline: "Clarity for better decisions and stronger growth.",

    description:
      "We help organizations understand challenges, identify opportunities and make better strategic and operational decisions.",

    services: [
      "Business Consulting",
      "IT Consulting",
      "Digital Transformation",
      "Business Strategy",
      "Procurement Consulting",
      "Risk Advisory",
      "Training & Capacity Building",
      "Business Automation",
    ],

    industries: [
      "NGOs",
      "Financial Institutions",
      "Schools",
      "Healthcare",
      "Manufacturing",
      "SMEs",
      "Startups",
    ],

    expertise: [
      "Business Strategy",
      "Technology Strategy",
      "Process Improvement",
      "Digital Transformation",
      "Organizational Development",
      "Training",
    ],

    benefits: [
      "Clearer strategic direction",
      "Improved decision-making",
      "Better business processes",
      "Technology alignment",
      "Sustainable organizational growth",
    ],
  },
};
