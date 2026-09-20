"use client";

export function FocusMethod() {
  const steps = [
    { number: "01", title: "GROUND", desc: "Understand the business, people, networks, and physical reality." },
    { number: "02", title: "UNDERSTAND", desc: "Research users, customers, market data, and core problems." },
    { number: "03", title: "BUILD", desc: "Structure and execute the brand, product, UX, or digital system." },
    { number: "04", title: "MEASURE", desc: "Analyze actual response, feedback, engagement, and performance." }
  ];

  return (
    <section id="method" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
            OPERATING PHILOSOPHY
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight">
            THE FOCUS METHOD
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.title}
              className="bg-[#121215] border border-[#27272A] p-6 rounded-2xl flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#71717A]">
                  {st.number}
                </span>
                <h3 className="text-lg font-bold font-display text-[#F4F4F6] mt-1">
                  {st.title}
                </h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed border-t border-[#27272A] pt-4">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#121215] border border-[#27272A] p-8 sm:p-12 rounded-2xl space-y-4 text-center">
          <h3 className="text-2xl sm:text-4xl font-black font-display text-[#F4F4F6]">
            ONLINE TELLS YOU WHAT PEOPLE DO.
          </h3>
          <h3 className="text-2xl sm:text-4xl font-black font-display text-[#A1A1AA]">
            THE GROUND TELLS YOU WHY.
          </h3>
          <p className="text-sm text-[#A1A1AA] max-w-2xl mx-auto pt-2">
            FOCUS combines digital intelligence with real-world observation, customer feedback, and practical execution.
          </p>
        </div>
      </div>
    </section>
  );
}
