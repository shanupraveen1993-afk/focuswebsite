"use client";

import { trackRecord } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#27272A] pb-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              PROVEN TRACK RECORD & WORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight mt-2">
              SELECTED IMPACT
            </h2>
          </div>
          <span className="text-xs font-mono text-[#A1A1AA] uppercase">
            6 CORE ACCOMPLISHMENTS
          </span>
        </div>

        {/* 6 Curated Track Record Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trackRecord.map((item) => (
            <article
              key={item.id}
              className="editorial-card p-7 rounded-3xl flex flex-col justify-between space-y-6 group hover:border-[#52525B] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Top Badge Line */}
                <div className="flex items-center justify-between border-b border-[#27272A] pb-3.5">
                  <span className="text-xs font-mono font-extrabold text-[#F4F4F6] bg-[#18181C] px-3 py-1 rounded-full border border-[#27272A]">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display tracking-tight text-[#F4F4F6] group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#A1A1AA] uppercase">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-[#27272A] pt-3">
                <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-widest">
                  PROVEN EXECUTION
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
