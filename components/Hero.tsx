"use client";

import { ArrowUpRight } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between relative bg-grid-texture"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* LEFT COLUMN: Executive Copy & Slogans */}
        <div className="lg:col-span-7 order-1 space-y-6">
          <div className="inline-flex items-center gap-2 border border-[#27272A] bg-[#121215] px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#A1A1AA] uppercase">
              wefocus.in — Multidisciplinary Practice
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display tracking-tight text-[#F4F4F6] leading-none">
              weFOCUS
            </h1>

            <div className="space-y-2 pt-1 font-display">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0"></span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F4F6]">
                  Classic <span className="text-amber-400 font-black">Branding.</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F4F6]">
                  Modern <span className="text-emerald-400 font-black">Marketing.</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shrink-0"></span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F4F6]">
                  Digital <span className="text-indigo-400 font-black">Development.</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="editorial-card p-5 rounded-2xl border border-[#27272A] bg-[#121215] max-w-xl">
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Connecting UX research, digital products, search architecture, branding, and ground-level execution into one unified strategy.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              className="pill-button pill-button-primary group"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean 3D Robot Canvas */}
        <div className="lg:col-span-5 order-2 relative">
          <div className="editorial-card rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] flex items-center justify-center relative border border-[#27272A] bg-[#121215]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
