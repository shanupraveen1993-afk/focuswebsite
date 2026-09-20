"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "WHERE", href: "#where" },
    { label: "HOW", href: "#how" },
    { label: "WORK", href: "#work" },
    { label: "IDEAS", href: "#ideas" },
    { label: "ABOUT", href: "#about" },
    { label: "LET'S TALK", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Mark: (we)FOCUS */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="wefocus.in homepage"
        >
          <span className="font-display font-black text-xl tracking-tighter text-[#F4F4F6] border border-[#F4F4F6] px-3.5 py-1 bg-[#0A0A0C] group-hover:bg-[#F4F4F6] group-hover:text-[#0A0A0C] transition-colors duration-200 flex items-baseline gap-1">
            <span className="text-xs font-medium text-[#A1A1AA] group-hover:text-[#0A0A0C]">(we)</span>
            <span>FOCUS</span>
          </span>
          <span className="text-xs font-semibold text-[#A1A1AA] hidden sm:inline-block tracking-widest uppercase border-l border-[#27272A] pl-3">
            wefocus.in
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                link.label === "LET'S TALK"
                  ? "bg-[#F4F4F6] text-[#0A0A0C] px-4 py-2 rounded-full hover:bg-white flex items-center gap-1 shadow-sm"
                  : "text-[#A1A1AA] hover:text-[#F4F4F6]"
              }`}
            >
              {link.label}
              {link.label === "LET'S TALK" && <ArrowUpRight className="w-3.5 h-3.5" />}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F4F4F6] p-2 rounded-lg border border-[#27272A] hover:bg-[#18181C]"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0C] border-b border-[#27272A] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold tracking-widest text-[#F4F4F6] hover:text-[#A1A1AA] py-2 border-b border-[#18181C]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
