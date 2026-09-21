"use client";

import { Compass, TrendingUp, Code2 } from "lucide-react";

export function Identity() {
  const pillars = [
    {
      number: "01",
      title: "CLASSIC BRANDING",
      icon: Compass,
      desc: "Brand positioning, profile building, conventional marketing, local business networks, and ground-level presence."
    },
    {
      number: "02",
      title: "MODERN MARKETING",
      icon: TrendingUp,
      desc: "Digital marketing, SEO, ASO (App Store Optimization), content, customer research, and review intelligence."
    },
    {
      number: "03",
      title: "DIGITAL DEVELOPMENT",
      icon: Code2,
      desc: "UX research, UI/UX design, mobile applications, web platforms, and digital product strategy."
    }
  ];

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Boxed Header Container */}
        <div className="space-y-3 max-w-3xl border border-[#3F3F46] bg-[#121215] p-8 sm:p-10 rounded-3xl shadow-xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#A1A1AA] uppercase block">
            MULTIDISCIPLINARY PRACTICE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            THREE CORE CAPABILITIES
          </h2>
          <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed">
            Real-world business problems rarely fit into one single discipline. The disciplines overlap — that is where weFOCUS operates.
          </p>
        </div>

        {/* 3 High-Contrast White Background Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white text-[#0A0A0C] p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-8 shadow-2xl border border-zinc-200 hover:scale-[1.015] transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3.5 py-1 rounded-full bg-[#0A0A0C] text-white tracking-wider">
                      CAPABILITY {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F4F5] border border-zinc-200 flex items-center justify-center text-[#0A0A0C] group-hover:bg-[#0A0A0C] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black font-display text-[#0A0A0C] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-base text-[#3F3F46] leading-relaxed font-medium border-t border-zinc-200 pt-5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="border-t border-zinc-200 pt-4 flex items-center justify-between text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  <span>weFOCUS Core Practice</span>
                  <span className="text-[#0A0A0C]">0{pillar.number}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
