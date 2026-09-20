export interface IndustryCategory {
  title: string;
  items: string[];
}

export const industries: IndustryCategory[] = [
  {
    title: "TECHNOLOGY & APPS",
    items: ["TripAI", "Namma Thanjai", "TML Vegetable", "Eatsy", "DoctPro"]
  },
  {
    title: "HOSPITALITY",
    items: ["Jainisinn Hotel", "Sri Krishna Inn"]
  },
  {
    title: "HEALTHCARE & HOME SERVICES",
    items: ["Prana Rehab Home Service", "DoctPro"]
  },
  {
    title: "LOCAL BUSINESSES",
    items: [
      "Abarna Saree Draping & Bridal Make-Up Artist",
      "Local business positioning & profile building"
    ]
  },
  {
    title: "INDUSTRIAL & BUSINESS",
    items: ["SKB Pumps", "Digital presence & corporate communication"]
  },
  {
    title: "COMMERCE & CONSUMER PRODUCTS",
    items: ["Handpicked Baby Care", "Tata Ace → Home delivery concept"]
  },
  {
    title: "CUSTOMER INTELLIGENCE",
    items: [
      "Review & Feedback business concept",
      "Ground-level customer research",
      "Product testing",
      "Review intelligence"
    ]
  },
  {
    title: "POLITICAL & PUBLIC CAMPAIGNS",
    items: [
      "Profile building",
      "Localized research",
      "Campaign planning",
      "Ground-level strategy",
      "Network development"
    ]
  }
];
