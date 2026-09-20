"use client";

export function Identity() {
  const pillars = [
    {
      title: "CLASSIC BRANDING",
      items: [
        "Branding",
        "Profile building",
        "Conventional marketing",
        "People & business networks",
        "Local presence"
      ]
    },
    {
      title: "MODERN MARKETING",
      items: [
        "Digital marketing",
        "SEO & ASO",
        "Content & Advertising",
        "Customer research",
        "Reviews & feedback"
      ]
    },
    {
      title: "DIGITAL DEVELOPMENT",
      items: [
        "UX research",
        "UI/UX design",
        "Product strategy",
        "Mobile apps & Websites",
        "Digital products"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            03 / WHAT IS FOCUS?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            FOCUS IS MULTIDISCIPLINARY.
          </h2>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed">
            Not because we offer everything. Because real-world business problems rarely fit neatly into one single discipline.
          </p>
        </div>

        {/* 3 Core Capability Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#71717A] uppercase tracking-widest">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F4F6] tracking-tight mt-2 mb-4">
                  {pillar.title}
                </h3>
                <ul className="space-y-3 border-t border-[#27272A] pt-4">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4F4F6]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Overlap Manifesto Callout */}
        <div className="bg-[#121215] border border-[#27272A] p-8 rounded-2xl text-center max-w-3xl mx-auto space-y-2">
          <p className="text-xl sm:text-2xl font-display font-bold text-[#F4F4F6]">
            &ldquo;The disciplines overlap. That&apos;s where FOCUS operates.&rdquo;
          </p>
          <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest pt-2">
            WE START WITH THE PROBLEM, NOT THE CHANNEL.
          </p>
        </div>
      </div>
    </section>
  );
}
