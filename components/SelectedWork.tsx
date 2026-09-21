"use client";

import { trackRecord } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#3F3F46] pb-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#A1A1AA] uppercase">
              PROVEN TRACK RECORD & WORK
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight mt-2">
              SELECTED IMPACT
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-[#E4E4E7] uppercase border border-[#3F3F46] px-3.5 py-1.5 rounded-full bg-[#121215]">
            6 CORE ACCOMPLISHMENTS
          </span>
        </div>

        {/* 6 Curated Track Record Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trackRecord.map((item) => (
            <article
              key={item.id}
              className="bg-[#121215] border border-[#3F3F46] p-7 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 group hover:border-zinc-400 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Badge Line */}
                <div className="flex items-center justify-between border-b border-[#3F3F46] pb-3.5">
                  <span className="text-xs font-mono font-extrabold text-white bg-[#18181C] px-3.5 py-1 rounded-full border border-[#3F3F46]">
                    {item.metric}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display tracking-tight text-white group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#A1A1AA] uppercase">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#E4E4E7] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-[#3F3F46] pt-3">
                <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-widest">
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
