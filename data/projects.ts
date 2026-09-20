export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tags: string[];
}

export const selectedProjects: ProjectItem[] = [
  {
    id: "tripai",
    title: "TRIPAI",
    subtitle: "Review-intelligence hotel discovery",
    description: "Product concept focused on understanding hotels through reviewer mentions rather than only standard amenity filters.",
    role: "Product / UX / concept development",
    tags: ["Product Strategy", "Review Intelligence", "UX Architecture"]
  },
  {
    id: "namma-thanjai",
    title: "NAMMA THANJAI",
    subtitle: "Local digital marketplace",
    description: "A Thanjavur-focused marketplace covering sales, wanted items, local services, stores and offers.",
    role: "Product / UX / architecture / growth thinking",
    tags: ["Marketplace Platform", "UI/UX", "Local Ecosystem"]
  },
  {
    id: "review-feedback",
    title: "REVIEW & FEEDBACK",
    subtitle: "Ground-level customer intelligence",
    description: "A business concept around collecting authentic customer feedback and reviews in physical retail environments.",
    role: "Business concept / product / customer research",
    tags: ["Ground Research", "Customer Insight", "Feedback Systems"]
  },
  {
    id: "tata-ace-home",
    title: "TATA ACE → HOME",
    subtitle: "Showroom-to-home delivery",
    description: "A local logistics and business concept connecting showroom purchases directly with home delivery.",
    role: "Business concept / service design",
    tags: ["Service Design", "Logistics Concept", "Local Business"]
  },
  {
    id: "handpicked",
    title: "HANDPICKED",
    subtitle: "Curated baby-care commerce",
    description: "A product and business concept focused on carefully curated baby-care products.",
    role: "Product / business concept",
    tags: ["E-Commerce Concept", "Brand Curation", "Product Strategy"]
  },
  {
    id: "skb-pumps",
    title: "SKB PUMPS",
    subtitle: "Industrial digital presence",
    description: "Website and digital communication work tailored for an industrial engineering business.",
    role: "Website / digital",
    tags: ["Industrial Brand", "Web Architecture", "Corporate Identity"]
  },
  {
    id: "hospitality",
    title: "HOSPITALITY",
    subtitle: "Jainisinn Hotel + Sri Krishna Inn",
    description: "Profile building, conventional marketing and digital marketing across hospitality properties.",
    role: "Brand / marketing / digital",
    tags: ["Hospitality Marketing", "Profile Building", "Digital Presence"]
  },
  {
    id: "prana-rehab",
    title: "PRANA REHAB HOME SERVICE",
    subtitle: "Home healthcare service",
    description: "UX, business development and network building for healthcare and rehabilitation service.",
    role: "UX / business / network",
    tags: ["Healthcare UX", "Business Development", "Network Growth"]
  },
  {
    id: "abarna-saree",
    title: "ABARNA SAREE DRAPING",
    subtitle: "Local service business",
    description: "Brand positioning, profile building and digital presence for a specialized bridal and local business service.",
    role: "Business / marketing / digital",
    tags: ["Local Business", "Positioning", "Digital Marketing"]
  }
];
