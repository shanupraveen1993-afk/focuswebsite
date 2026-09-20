export interface TrackRecordItem {
  id: string;
  metric: string;
  title: string;
  subtitle: string;
  description: string;
  category: "POLITICAL" | "BRAND" | "MARKET" | "DIGITAL";
}

export const trackRecord: TrackRecordItem[] = [
  {
    id: "political-strategy",
    metric: "8 CONSTITUENCIES",
    title: "POLITICAL ELECTION STRATEGY",
    subtitle: "Campaign & Ground Strategy",
    description: "Served as political strategist across 8 constituencies — conducting localized research, voter sentiment analysis, ground-level network development, and campaign strategy.",
    category: "POLITICAL"
  },
  {
    id: "skb-industries",
    metric: "SKB PUMPS",
    title: "INDUSTRIAL BRAND CONSULTING",
    subtitle: "SKB Industries & Engineering",
    description: "Brand consultant driving brand positioning, web architecture, and corporate identity for industrial pump manufacturing.",
    category: "BRAND"
  },
  {
    id: "hospitality-digital",
    metric: "2 HOTELS",
    title: "HOSPITALITY DIGITAL MARKETING",
    subtitle: "Jainisinn Hotel & Sri Krishna Inn",
    description: "Executed digital marketing, local profile positioning, guest review management, and online acquisition strategies.",
    category: "MARKET"
  },
  {
    id: "google-business",
    metric: "8+ ENTERPRISES",
    title: "GOOGLE BUSINESS & LOCAL SEO",
    subtitle: "Local Business Optimization",
    description: "Optimized Google Business Profiles, local search ranking, review intelligence, and digital presence for 8+ regional businesses.",
    category: "MARKET"
  },
  {
    id: "app-growth",
    metric: "4+ APPS",
    title: "APP BRAND & GROWTH MARKETING",
    subtitle: "Digital Applications (TripAI, Namma Thanjai, etc.)",
    description: "Brand marketer and growth strategist across 4+ digital applications — managing ASO (App Store Optimization), UI/UX positioning, and acquisition.",
    category: "DIGITAL"
  },
  {
    id: "business-branding",
    metric: "4+ BUSINESSES",
    title: "COMMERCIAL BRAND MARKETING",
    subtitle: "Business & Growth Strategy",
    description: "Brand marketer for 4+ commercial businesses — bridging conventional offline presence with digital growth systems.",
    category: "BRAND"
  }
];
