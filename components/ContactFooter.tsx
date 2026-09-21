"use client";

import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function ContactFooter() {
  const contactOptions = [
    {
      label: "Call Direct",
      value: "9994837342",
      href: "tel:+919994837342",
      icon: Phone
    },
    {
      label: "WhatsApp",
      value: "+91 9994837342",
      href: "https://wa.me/919994837342",
      icon: MessageCircle
    }
  ];

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-16">
        {/* Main CTA Block */}
        <div className="bg-[#121215] border border-[#27272A] p-8 sm:p-16 rounded-3xl space-y-8 relative overflow-hidden">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              11 / CONTACT & ENGAGEMENT
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-[#F4F4F6] tracking-tight leading-none">
              HAVE A PROBLEM WORTH SOLVING?
            </h2>
            <p className="text-base sm:text-xl text-[#A1A1AA] pt-2">
              Let&apos;s discuss the business, brand, marketing, or digital challenge.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <a
                  key={opt.label}
                  href={opt.href}
                  target={opt.href.startsWith("http") ? "_blank" : undefined}
                  rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="pill-button pill-button-primary group"
                >
                  <Icon className="w-4 h-4" />
                  <span>{opt.label}: {opt.value}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer Brand Line & Copyright */}
        <div className="border-t border-[#27272A] pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-2xl tracking-tight text-[#F4F4F6]">
                weFOCUS
              </span>
              <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-widest border-l border-[#27272A] pl-3">
                wefocus.in
              </span>
            </div>
            <p className="text-xs text-[#71717A] font-mono">
              Classic Branding. Modern Marketing. Digital Development.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#A1A1AA] font-mono">
            <a href="https://wefocus.in" className="hover:text-white transition-colors">
              wefocus.in
            </a>
            <span className="text-[#27272A]">|</span>
            <span>TAMIL NADU, INDIA</span>
            <span className="text-[#27272A]">|</span>
            <span>&copy; {new Date().getFullYear()} weFOCUS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
