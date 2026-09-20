export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  category: "BRAND" | "MARKET" | "DIGITAL";
}

export const selectedProjects: ProjectItem[] = [
  {
    id: "tripai",
    title: "TRIPAI",
    subtitle: "Review-Intelligence Hotel Discovery",
    description: "Product concept analyzing hotel mentions across reviewer data instead of static amenity filters.",
    role: "Product Strategy & UX Architecture",
    category: "DIGITAL"
  },
  {
    id: "namma-thanjai",
    title: "NAMMA THANJAI",
    subtitle: "Regional Digital Marketplace",
    description: "Local digital ecosystem connecting residents with services, stores, offers, and regional commerce.",
    role: "Product Architecture & Growth Strategy",
    category: "DIGITAL"
  },
  {
    id: "review-feedback",
    title: "REVIEW & FEEDBACK",
    subtitle: "Ground-Level Customer Intelligence",
    description: "In-person retail feedback system collecting real customer insights at physical touchpoints.",
    role: "Ground Research & Service Design",
    category: "MARKET"
  },
  {
    id: "tata-ace-home",
    title: "TATA ACE → HOME",
    subtitle: "Showroom-to-Home Logistics",
    description: "Local delivery business model bridging showroom purchases with last-mile home delivery.",
    role: "Business Concept & Service Design",
    category: "BRAND"
  },
  {
    id: "skb-pumps",
    title: "SKB PUMPS",
    subtitle: "Industrial Corporate Identity",
    description: "Digital presence and communication strategy tailored for an industrial engineering enterprise.",
    role: "Web Architecture & Brand Communication",
    category: "BRAND"
  },
  {
    id: "hospitality",
    title: "HOSPITALITY PORTFOLIO",
    subtitle: "Jainisinn Hotel + Sri Krishna Inn",
    description: "Profile building, offline presence, and digital marketing for premier hospitality properties.",
    role: "Brand Positioning & Marketing Strategy",
    category: "MARKET"
  }
];
