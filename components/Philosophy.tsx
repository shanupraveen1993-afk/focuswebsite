"use client";

export function Philosophy() {
  const statements = [
    { highlight: "WE DON'T JUST DESIGN.", body: "WE UNDERSTAND." },
    { highlight: "WE DON'T JUST MARKET.", body: "WE CONNECT." },
    { highlight: "WE DON'T JUST BUILD.", body: "WE SOLVE." },
    { highlight: "WE DON'T JUST LAUNCH.", body: "WE LEARN." }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            10 / FOCUS PHILOSOPHY
          </span>
        </div>

        {/* Large Editorial Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {statements.map((st) => (
            <div
              key={st.highlight}
              className="border-l-2 border-[#F4F4F6] pl-6 space-y-2 py-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#71717A] uppercase tracking-wider">
                {st.highlight}
              </h3>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#F4F4F6] tracking-tight">
                {st.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
