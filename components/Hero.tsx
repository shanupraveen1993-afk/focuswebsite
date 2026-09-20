"use client";

import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between relative bg-grid-texture"
    >
      <div className="space-y-8 sm:space-y-12 max-w-5xl">
        {/* Eyebrow / Founder Label */}
        <div className="inline-flex items-center gap-3 border border-[#27272A] bg-[#121215] px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#F4F4F6] animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest text-[#A1A1AA] uppercase">
            FOCUS BY PRAVEEN — wefocus.in
          </span>
        </div>

        {/* Hero Title & Official Slogan */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#F4F4F6] leading-none">
            FOCUS
          </h1>

          <div className="space-y-2 sm:space-y-3 pt-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-[#F4F4F6] tracking-tight">
              Classic Branding.
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-[#A1A1AA] tracking-tight">
              Modern Marketing.
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-[#71717A] tracking-tight">
              Digital Development.
            </h2>
          </div>
        </div>

        {/* Secondary Philosophy & Narrative Lede */}
        <div className="max-w-3xl space-y-4 pt-4 border-t border-[#27272A]">
          <p className="text-lg sm:text-2xl font-serif italic text-[#F4F4F6] leading-snug">
            &ldquo;From ground-level understanding to digital execution.&rdquo;
          </p>
          <p className="text-base sm:text-xl text-[#A1A1AA] leading-relaxed font-sans font-normal">
            I work across UX research, design, digital products, SEO, ASO, marketing, branding and business development — connecting disciplines when the problem requires it.
          </p>
        </div>
      </div>

      {/* Explore Work Trigger */}
      <div className="pt-12 sm:pt-16 flex items-center justify-between border-b border-[#27272A] pb-6">
        <a
          href="#about"
          className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F4F4F6] hover:text-[#A1A1AA] transition-colors duration-200 group"
        >
          <span>EXPLORE THE WORK</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
        </a>

        <div className="hidden sm:flex items-center gap-6 text-xs text-[#71717A] font-mono">
          <span>01 / INTRODUCTION</span>
          <span>EST. TAMIL NADU</span>
        </div>
      </div>
    </section>
  );
}
