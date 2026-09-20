"use client";

export function HowIThink() {
  const principles = [
    {
      title: "PRECISION OVER PROJECTION",
      desc: "I look at numbers, people, markets and what is actually happening on the ground before forming a strategy."
    },
    {
      title: "DESIGN WITH A REASON",
      desc: "Design is not decoration. Every interface, asset, visiting card or interaction should have a clear purpose."
    },
    {
      title: "GROUND FIRST. DIGITAL NEXT.",
      desc: "Digital tools are powerful, but many problems still require people, conversations, networks and real-world observation."
    },
    {
      title: "BUILD TO LEARN",
      desc: "I prefer turning ideas into something tangible and learning directly from what happens next in the market."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            08 / METHODOLOGY
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            HOW I THINK
          </h2>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((pr, idx) => (
            <div
              key={pr.title}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
                <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-widest">
                  0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F4F4F6]"></span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-[#F4F4F6] tracking-tight mb-2">
                  {pr.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
