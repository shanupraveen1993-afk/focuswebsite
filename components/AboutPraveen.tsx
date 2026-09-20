"use client";

import { Award } from "lucide-react";

export function AboutPraveen() {
  const evolution = [
    "UX Research",
    "Product",
    "Search (SEO/ASO)",
    "Marketing",
    "Business Strategy"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Founder Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              FOUNDER & PRACTICE LEAD
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
              PRAVEEN
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-[#F4F4F6] font-medium leading-relaxed">
            My foundation is in ground-level UX research and design. Over time, that foundation expanded into products, search architecture, marketing, and business strategy.
          </p>

          <p className="text-base text-[#A1A1AA] leading-relaxed">
            FOCUS brings these disciplines together to solve complex business problems that cannot be answered by a single marketing or design channel alone.
          </p>

          {/* Progression Badges */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider block">
              EXPERIENCE PROGRESSION
            </span>
            <div className="flex flex-wrap gap-2">
              {evolution.map((step, idx) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="bg-[#121215] border border-[#27272A] text-[#F4F4F6] text-xs font-bold px-3 py-1.5 rounded-md">
                    {step}
                  </span>
                  {idx < evolution.length - 1 && <span className="text-[#71717A] text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Credential Card */}
        <div className="lg:col-span-5 bg-[#121215] border border-[#27272A] p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#18181C] border border-[#27272A] flex items-center justify-center text-[#F4F4F6]">
            <Award className="w-6 h-6 text-[#F4F4F6]" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider block">
              FOUNDATIONAL ROLE
            </span>
            <h3 className="text-xl font-bold font-display text-[#F4F4F6] mt-1">
              UX Research Manager
            </h3>
            <p className="text-sm font-semibold text-[#A1A1AA]">
              Multivariate
            </p>
          </div>
          <p className="text-xs text-[#71717A] leading-relaxed border-t border-[#27272A] pt-4">
            Behavioral analysis and customer research form the foundation of every strategy developed across branding, product, and market execution at FOCUS.
          </p>
        </div>
      </div>
    </section>
  );
}
