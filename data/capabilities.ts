export interface CapabilityGroup {
  category: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    category: "RESEARCH",
    items: [
      "UX Research",
      "Customer Research",
      "Market Understanding",
      "Review Analysis",
      "Competitive Analysis",
      "Regional Research"
    ]
  },
  {
    category: "DESIGN",
    items: [
      "UX Design",
      "UI Design",
      "Interaction Design",
      "Design Systems",
      "Web Design",
      "Brand Communication"
    ]
  },
  {
    category: "PRODUCT",
    items: [
      "Product Concepts",
      "Product Architecture",
      "Mobile Applications",
      "Web Applications",
      "Digital Platforms",
      "Business-Model Thinking"
    ]
  },
  {
    category: "SEARCH",
    items: [
      "SEO",
      "Local SEO",
      "ASO (App Store Optimization)",
      "Keyword Research",
      "Search Positioning",
      "App-Store Growth"
    ]
  },
  {
    category: "MARKETING",
    items: [
      "Digital Marketing",
      "Conventional Marketing",
      "Content Strategy",
      "Advertising Campaigns",
      "Video & Media",
      "Profile Building"
    ]
  },
  {
    category: "BUSINESS",
    items: [
      "Business Concepts",
      "Market Positioning",
      "Business Development",
      "Networking & Growth",
      "Ground-Level Execution",
      "Strategic Alignment"
    ]
  }
];
