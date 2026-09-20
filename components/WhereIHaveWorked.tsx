"use client";

import { industries } from "@/data/industries";

export function WhereIHaveWorked() {
  return (
    <section id="where" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            05 / WHERE I&apos;VE WORKED
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            WHERE I&apos;VE WORKED
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Different industries. Different problems. One unified approach: understand first, then execute.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="editorial-card p-6 rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="text-xs font-mono font-bold tracking-wider text-[#F4F4F6] uppercase border-b border-[#27272A] pb-3">
                  {ind.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {ind.items.map((item) => (
                    <li key={item} className="text-xs sm:text-sm text-[#A1A1AA] leading-snug flex items-start gap-2">
                      <span className="text-[#71717A] font-bold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
