"use client";

import { ideasExplored } from "@/data/ideas";
import { Lightbulb } from "lucide-react";

export function IdeasExplored() {
  return (
    <section id="ideas" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            07 / STRATEGIC EXPLORATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            IDEAS I&apos;VE EXPLORED
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            I don&apos;t just execute assigned client work. I actively explore real-world problems and develop business, material, and product possibilities.
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideasExplored.map((idea, idx) => (
            <div
              key={idea.title}
              className="bg-[#121215] border border-[#27272A] p-6 rounded-2xl flex items-start gap-4 hover:border-[#3F3F46] transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-[#18181C] border border-[#27272A] flex items-center justify-center text-[#F4F4F6] shrink-0 mt-0.5">
                <Lightbulb className="w-4 h-4 text-[#A1A1AA]" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-widest block">
                  {idea.category}
                </span>
                <h3 className="text-sm font-bold font-display text-[#F4F4F6] mt-1">
                  {idea.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
