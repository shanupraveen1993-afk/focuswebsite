"use client";

import { Compass, TrendingUp, Code2 } from "lucide-react";

export function Identity() {
  const pillars = [
    {
      number: "STEP 01",
      stepColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      accentBg: "bg-amber-400",
      title: "CLASSIC BRANDING",
      icon: Compass,
      desc: "Brand positioning, profile building, conventional marketing, local business networks, and ground-level presence."
    },
    {
      number: "STEP 02",
      stepColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      accentBg: "bg-emerald-400",
      title: "MODERN MARKETING",
      icon: TrendingUp,
      desc: "Digital marketing, SEO, ASO (App Store Optimization), content, customer research, and review intelligence."
    },
    {
      number: "STEP 03",
      stepColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
      accentBg: "bg-indigo-400",
      title: "DIGITAL DEVELOPMENT",
      icon: Code2,
      desc: "UX research, UI/UX design, mobile applications, web platforms, and digital product strategy."
    }
  ];

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        <div className="space-y-3 max-w-3xl border border-[#27272A] bg-[#121215] p-6 sm:p-8 rounded-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase block">
            MULTIDISCIPLINARY PRACTICE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-[#F4F4F6] tracking-tight">
            THREE CORE CAPABILITIES
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Real-world business problems rarely fit into one single discipline. The disciplines overlap — that is where weFOCUS operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="editorial-card p-8 rounded-3xl flex flex-col justify-between space-y-6 border border-[#27272A] bg-[#121215] hover:border-[#52525B] transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${pillar.stepColor}`}>
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#18181C] border border-[#27272A] flex items-center justify-center text-[#F4F4F6]">
                      <Icon className="w-5 h-5 text-[#F4F4F6]" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display text-[#F4F4F6] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed border-t border-[#27272A] pt-4">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
