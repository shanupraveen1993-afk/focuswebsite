"use client";

import { Award, Layers, Search, TrendingUp, Briefcase, UserCheck } from "lucide-react";

export function AboutPraveen() {
  const evolution = [
    { num: "01", title: "UX Research", desc: "Field studies & user behavior analysis", icon: UserCheck },
    { num: "02", title: "Product", desc: "UI/UX design & app architecture", icon: Layers },
    { num: "03", title: "Search (SEO/ASO)", desc: "Organic search & App Store ranking", icon: Search },
    { num: "04", title: "Marketing", desc: "Brand positioning & acquisition", icon: TrendingUp },
    { num: "05", title: "Business Strategy", desc: "Cross-functional growth & execution", icon: Briefcase }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Founder Bio Boxed Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#121215] border border-[#27272A] p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase block">
                PRACTICE LEAD
              </span>
              <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
                PRAVEEN
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#F4F4F6] font-medium leading-relaxed">
              My foundation is in ground-level UX research and design. Over time, that foundation expanded into digital products, search architecture, marketing, and business strategy.
            </p>

            <p className="text-sm text-[#A1A1AA] leading-relaxed border-t border-[#27272A] pt-4">
              weFOCUS brings these disciplines together to solve complex business problems that cannot be answered by a single marketing or design channel alone.
            </p>
          </div>

          {/* Right Column: Key Credential Card */}
          <div className="lg:col-span-5 bg-[#121215] border border-[#27272A] p-8 sm:p-10 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#18181C] border border-[#27272A] flex items-center justify-center text-[#F4F4F6]">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider block">
                  FOUNDATIONAL ROLE
                </span>
                <h3 className="text-2xl font-bold font-display text-[#F4F4F6] mt-1">
                  UX Research Manager
                </h3>
                <p className="text-sm font-semibold text-[#A1A1AA]">
                  Multivariate
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed border-t border-[#27272A] pt-4">
              Behavioral analysis and customer research form the foundation of every strategy developed across branding, product, and market execution at weFOCUS.
            </p>
          </div>
        </div>

        {/* Progression Cards Grid */}
        <div className="space-y-6">
          <div className="border border-[#27272A] bg-[#121215] p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-wider block">
                EXPERIENCE PROGRESSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-[#F4F4F6] mt-1">
                THE EVOLUTION OF PRACTICE
              </h3>
            </div>
            <span className="text-xs font-mono text-[#A1A1AA] uppercase">
              5 STEP DISCIPLINARY STACK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {evolution.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#121215] border border-[#27272A] p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#52525B] transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#71717A]">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#18181C] border border-[#27272A] flex items-center justify-center text-[#F4F4F6]">
                      <Icon className="w-4 h-4 text-[#F4F4F6]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-[#F4F4F6]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#71717A] mt-1 leading-normal border-t border-[#27272A] pt-2">
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
