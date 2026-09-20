"use client";

import { ArrowRight } from "lucide-react";

export function FocusMethod() {
  const methodSteps = [
    { title: "GROUND", desc: "Understand business, people, networks, and reality." },
    { title: "UNDERSTAND", desc: "Research users, customers, competitors, and core problems." },
    { title: "DESIGN", desc: "Structure brand, product, UX, or communication." },
    { title: "BUILD", desc: "Create website, app, campaign, or business asset." },
    { title: "MARKET", desc: "Connect conventional networks with digital distribution." },
    { title: "MEASURE", desc: "Analyze actual response, feedback, reach, and performance." },
    { title: "IMPROVE", desc: "Refine and evolve based on ground-level learning." }
  ];

  return (
    <section id="how" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            09 / THE FOCUS METHOD
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            GROUND-UP FRAMEWORK
          </h2>
        </div>

        {/* Operating Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {methodSteps.map((step, idx) => (
            <div
              key={step.title}
              className="bg-[#121215] border border-[#27272A] p-5 rounded-xl flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#71717A] block">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-bold font-display text-[#F4F4F6] tracking-tight mt-1">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-normal border-t border-[#27272A] pt-3">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ground-Level Advantage Callout Banner */}
        <div className="bg-[#121215] border border-[#27272A] p-8 sm:p-12 rounded-2xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-black font-display text-[#F4F4F6] tracking-tight">
              ONLINE TELLS YOU WHAT PEOPLE DO.
            </h3>
            <h3 className="text-2xl sm:text-4xl font-black font-display text-[#A1A1AA] tracking-tight">
              THE GROUND TELLS YOU WHY.
            </h3>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-3xl leading-relaxed border-t border-[#27272A] pt-6">
            FOCUS combines digital intelligence with real-world observation, customer conversations, physical retail feedback, product testing and practical execution.
          </p>
        </div>
      </div>
    </section>
  );
}
