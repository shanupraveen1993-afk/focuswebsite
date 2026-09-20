"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between relative bg-grid-texture"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: 3D Robot Visual Scene */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative">
          <div className="editorial-card rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center relative border border-[#27272A] bg-[#121215]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full absolute inset-0"
            />
            {/* Fallback badges */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#71717A] bg-[#0A0A0C]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#27272A] pointer-events-none">
              <span>INTERACTIVE 3D</span>
              <span className="text-[#F4F4F6] font-bold">ROBO VISUAL</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Brand Copy & Slogans */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 border border-[#27272A] bg-[#121215] px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F4F4F6] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-[#A1A1AA] uppercase">
              FOUNDED BY PRAVEEN — wefocus.in
            </span>
          </div>

          {/* Main Title & Slogan */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-[#F4F4F6] leading-none flex items-baseline gap-2">
              <span className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#A1A1AA]">(we)</span>
              <span>FOCUS</span>
            </h1>

            <div className="space-y-1.5 pt-1">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-[#F4F4F6] tracking-tight">
                Classic Branding.
              </h2>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-[#A1A1AA] tracking-tight">
                Modern Marketing.
              </h2>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-[#71717A] tracking-tight">
                Digital Development.
              </h2>
            </div>
          </div>

          {/* Narrative & Secondary Philosophy */}
          <div className="space-y-3 border-t border-[#27272A] pt-4 max-w-2xl">
            <p className="text-base sm:text-xl font-serif italic text-[#F4F4F6] leading-snug">
              &ldquo;From ground-level understanding to digital execution.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-sans">
              I work across UX research, design, digital products, SEO, ASO, marketing, branding and business development — connecting disciplines when the problem requires it.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="pill-button pill-button-primary group"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#about"
              className="pill-button pill-button-secondary group"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="pt-10 flex items-center justify-between border-b border-[#27272A] pb-4 mt-8">
        <div className="flex items-center gap-4 text-xs font-mono text-[#71717A]">
          <span>ROBO SCENE ON LEFT</span>
          <span>•</span>
          <span>LOW COGNITIVE LOAD</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-xs text-[#71717A] font-mono">
          <span>01 / INTRODUCTION</span>
          <span>wefocus.in</span>
        </div>
      </div>
    </section>
  );
}
