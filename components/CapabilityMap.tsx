"use client";

import { capabilities } from "@/data/capabilities";

export function CapabilityMap() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            04 / WHAT I AM CAPABLE OF
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            CAPABILITY
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA]">
            A complete skill and capability mapping across the entire spectrum of research, design, execution, and growth.
          </p>
        </div>

        {/* Capability Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((group) => (
            <div
              key={group.category}
              className="bg-[#121215] border border-[#27272A] p-6 rounded-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                <h3 className="text-sm font-mono font-bold tracking-widest text-[#F4F4F6] uppercase">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-[#71717A]">
                  {group.items.length} SKILLS
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#18181C] border border-[#27272A] text-[#A1A1AA] hover:text-[#F4F4F6] hover:border-[#3F3F46] text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
