"use client";

import { Award, Layers, Search, TrendingUp } from "lucide-react";

export function AboutPraveen() {
  const steps = [
    "UX Research",
    "Design",
    "Product",
    "Search",
    "Marketing",
    "Business"
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#27272A] pb-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              02 / WHO I AM
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight mt-2">
              PRAVEEN
            </h2>
          </div>
          <span className="text-sm font-semibold tracking-wider text-[#A1A1AA] uppercase">
            FOUNDER — FOCUS
          </span>
        </div>

        {/* Progression Timeline / Pills */}
        <div className="bg-[#121215] border border-[#27272A] p-6 sm:p-8 rounded-2xl space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#71717A] uppercase block">
            PROFESSIONAL EVOLUTION
          </span>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {steps.map((step, idx) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="bg-[#18181C] border border-[#27272A] text-[#F4F4F6] text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg">
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <span className="text-[#71717A] text-sm font-bold">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Story Narrative & Multivariate Credential */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            <p className="text-[#F4F4F6] font-medium text-lg sm:text-xl">
              My professional foundation is in UX research and design. My work gradually expanded beyond interfaces into products, search, marketing and business.
            </p>
            <p>
              I&apos;ve worked across digital products, local businesses, hospitality, healthcare, industrial businesses, customer research, commerce concepts and political/public strategy.
            </p>
            <p className="text-[#F4F4F6] font-bold text-lg pt-2 border-l-2 border-[#F4F4F6] pl-4">
              FOCUS is where these experiences come together.
            </p>
          </div>

          {/* Key Credential Badge */}
          <div className="lg:col-span-4 bg-[#121215] border border-[#27272A] p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#18181C] border border-[#27272A] flex items-center justify-center text-[#F4F4F6]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider block">
                FOUNDATIONAL ROLE
              </span>
              <h3 className="text-lg font-bold font-display text-[#F4F4F6] mt-1">
                UX Research Manager
              </h3>
              <p className="text-sm text-[#A1A1AA] mt-0.5">
                Multivariate
              </p>
            </div>
            <p className="text-xs text-[#71717A] leading-normal border-t border-[#27272A] pt-3">
              Ground-level user research and behavioral analysis form the core foundation of every strategy developed at FOCUS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
