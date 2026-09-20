import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { FocusHero } from "@/components/focus-hero";

const disciplines = [
  {
    title: "Classic Branding",
    copy: "Positioning, profile building, offline presence, people networks and brand communication."
  },
  {
    title: "Modern Marketing",
    copy: "SEO, ASO, content, campaigns, customer research, reviews, feedback and market response."
  },
  {
    title: "Digital Development",
    copy: "UX research, UI/UX, websites, apps, product strategy and practical digital execution."
  }
];

const process = [
  "Understand the business from the ground.",
  "Find the actual customer, market and product problem.",
  "Design the right brand, product or marketing direction.",
  "Build, launch, listen and improve."
];

const contacts = [
  { label: "Call", href: "#contact", icon: Phone },
  { label: "WhatsApp", href: "#contact", icon: MessageCircle },
  { label: "Email", href: "#contact", icon: Mail }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand-mark" aria-label="FOCUS home">
          FOCUS
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#about">Praveen</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <FocusHero />

      <section id="services" className="page-section services-section">
        <div className="section-intro">
          <span>What FOCUS does</span>
          <h2>One founder-led portfolio for brand, market and digital work.</h2>
        </div>
        <div className="service-list">
          {disciplines.map((discipline) => (
            <article key={discipline.title}>
              <h3>{discipline.title}</h3>
              <p>{discipline.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="page-section approach-section">
        <div className="section-intro">
          <span>UX Pattern</span>
          <h2>Simple: understand first, then execute.</h2>
        </div>
        <div className="approach-grid">
          <p>
            FOCUS is for businesses that need more than a single-channel answer. The work can start with research, a brand problem, a website, an app idea, a campaign, or ground-level customer feedback.
          </p>
          <ol>
            {process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className="page-section about-section">
        <div className="about-card">
          <span>About Praveen</span>
          <h2>UX research foundation. Product thinking. Marketing execution. Ground understanding.</h2>
          <p>
            Praveen founded FOCUS from a progression through UX research, UI/UX, product, SEO, ASO, digital marketing, business, brand and ground marketing. The point is not to sell one service. The point is to understand the problem and choose the right mix of work.
          </p>
        </div>
      </section>

      <section id="contact" className="page-section contact-section">
        <div>
          <span>Contact</span>
          <h2>Let&apos;s discuss the business problem.</h2>
          <p>Use any one contact route. Replace these links with your phone, WhatsApp and email before final public use.</p>
        </div>
        <div className="contact-buttons">
          {contacts.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="contact-button">
              <Icon size={18} aria-hidden="true" />
              {label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
