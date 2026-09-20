"use client";

export function Identity() {
  const pillars = [
    {
      number: "01",
      title: "CLASSIC BRANDING",
      desc: "Brand positioning, profile building, conventional marketing, local business networks, and ground-level presence."
    },
    {
      number: "02",
      title: "MODERN MARKETING",
      desc: "Digital marketing, SEO, ASO (App Store Optimization), content, customer research, and review intelligence."
    },
    {
      number: "03",
      title: "DIGITAL DEVELOPMENT",
      desc: "UX research, UI/UX design, mobile applications, web platforms, and digital product strategy."
    }
  ];

  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            MULTIDISCIPLINARY PRACTICE
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            THREE CORE CAPABILITIES
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA]">
            Real-world business problems rarely fit into one single discipline. The disciplines overlap — that is where FOCUS operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-widest">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F4F6] tracking-tight mt-2 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed border-t border-[#27272A] pt-4">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
