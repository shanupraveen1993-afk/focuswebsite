"use client";

import { Compass, TrendingUp, Code2, Layers, Search, Briefcase, UserCheck } from "lucide-react";

export function AboutPraveen() {
  const evolution = [
    { num: "01", title: "UX Research", desc: "Field studies & user behavior analysis", icon: UserCheck },
    { num: "02", title: "Product", desc: "UI/UX design & app architecture", icon: Layers },
    { num: "03", title: "Search (SEO/ASO)", desc: "Organic search & App Store ranking", icon: Search },
    { num: "04", title: "Marketing", desc: "Brand positioning & acquisition", icon: TrendingUp },
    { num: "05", title: "Business Strategy", desc: "Cross-functional growth & execution", icon: Briefcase }
  ];

  const coreSet = [
    { num: "01", title: "Classic Branding", desc: "Brand positioning & ground-level presence", icon: Compass },
    { num: "02", title: "Modern Marketing", desc: "Digital acquisition, SEO/ASO & intelligence", icon: TrendingUp },
    { num: "03", title: "Digital Development", desc: "UX research, UI architecture & apps", icon: Code2 }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Founder Bio Boxed Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#121215] border border-[#3F3F46] p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#A1A1AA] uppercase block">
                PRACTICE LEAD
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight">
                PRAVEEN
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
              My foundation is in ground-level UX research and design. Over time, that foundation expanded into digital products, search architecture, marketing, and business strategy.
            </p>

            <p className="text-base text-[#E4E4E7] leading-relaxed border-t border-[#3F3F46] pt-4">
              weFOCUS brings these disciplines together to solve complex business problems that cannot be answered by a single marketing or design channel alone.
            </p>
          </div>

          {/* Right Column: Three Core Set Card */}
          <div className="lg:col-span-5 bg-[#121215] border border-[#3F3F46] p-8 sm:p-10 rounded-3xl space-y-4 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider block">
                  CORE SET
                </span>
                <span className="text-xs font-mono font-bold text-[#E4E4E7] uppercase border border-[#3F3F46] px-3 py-1 rounded-full bg-[#18181C]">
                  3 PILLARS
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-white">
                  THREE CORE CAPABILITIES
                </h3>
              </div>

              <div className="space-y-2.5 pt-1">
                {coreSet.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className="p-3.5 rounded-2xl bg-[#18181C] border border-[#3F3F46] flex items-center justify-between hover:border-zinc-400 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-[#27272A] border border-[#3F3F46] flex items-center justify-center text-white shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold font-display text-white">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-[#A1A1AA]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#A1A1AA] shrink-0 ml-2">
                        {item.num}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-[#E4E4E7] leading-relaxed border-t border-[#3F3F46] pt-3 font-medium">
              Integrating traditional positioning, digital growth engines, and product architecture under unified execution.
            </p>
          </div>
        </div>

        {/* Progression Cards Grid */}
        <div className="space-y-6">
          <div className="border border-[#3F3F46] bg-[#121215] p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider block">
                EXPERIENCE PROGRESSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
                THE EVOLUTION OF PRACTICE
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#E4E4E7] uppercase border border-[#3F3F46] px-3.5 py-1.5 rounded-full bg-[#18181C]">
              5 STEP DISCIPLINARY STACK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {evolution.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#121215] border border-[#3F3F46] p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-zinc-400 transition-all duration-200 shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#A1A1AA]">
                      STEP {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#18181C] border border-[#3F3F46] flex items-center justify-center text-white">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-display text-white">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#E4E4E7] mt-1 leading-normal border-t border-[#3F3F46] pt-2 font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
