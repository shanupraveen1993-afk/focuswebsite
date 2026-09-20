"use client";

import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";

import { SplineScene } from "@/components/ui/splite";

const contactActions = [
  { label: "Call", href: "#contact", icon: Phone },
  { label: "WhatsApp", href: "#contact", icon: MessageCircle },
  { label: "Email", href: "#contact", icon: Mail }
];

export function FocusHero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-copy">
        <p className="eyebrow">FOCUS by Praveen</p>
        <h1>Classic Branding. Modern Marketing. Digital Development.</h1>
        <p className="hero-lede">
          FOCUS is a founder-led portfolio for businesses that need clear research, practical brand thinking, useful digital products and marketing that connects with the ground.
        </p>
        <p className="hero-note">From ground-level understanding to digital execution.</p>
        <div className="hero-actions" aria-label="Contact options">
          {contactActions.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href}>
              <Icon size={18} aria-hidden="true" />
              {label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-robot" aria-label="Interactive robot visual">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="h-full w-full"
        />
        <div className="robot-fallback">
          <span>Brand</span>
          <span>Market</span>
          <span>Digital</span>
        </div>
      </div>
    </section>
  );
}
