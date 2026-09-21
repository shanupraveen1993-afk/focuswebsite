"use client";

import { ArrowUpRight } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between relative bg-grid-texture overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto">
        {/* LEFT COLUMN: Executive Copy & Slogans */}
        <div className="lg:col-span-7 order-1 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 border border-[#3F3F46] bg-[#121215] px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#E4E4E7] uppercase">
              wefocus.in — Multidisciplinary Practice
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display tracking-tight text-white leading-none">
              weFOCUS
            </h1>

            <div className="space-y-2 pt-1 font-hero">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Classic Branding.
              </h2>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E4E4E7] leading-tight">
                Modern Marketing.
              </h2>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#A1A1AA] leading-tight">
                Digital Development.
              </h2>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-[#3F3F46] bg-[#121215] max-w-xl shadow-lg">
            <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed font-medium">
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

        {/* RIGHT COLUMN: Seamless Unboxed Interactive 3D Robot */}
        <div className="lg:col-span-5 order-2 relative min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] w-full flex items-center justify-center">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0 pointer-events-auto"
          />
        </div>
      </div>
    </section>
  );
}
