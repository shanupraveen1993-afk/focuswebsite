"use client";

export function FocusMethod() {
  const steps = [
    { number: "01", title: "GROUND", desc: "Understand the business, people, networks, and physical reality." },
    { number: "02", title: "UNDERSTAND", desc: "Research users, customers, market data, and core problems." },
    { number: "03", title: "BUILD", desc: "Structure and execute the brand, product, UX, or digital system." },
    { number: "04", title: "MEASURE", desc: "Analyze actual response, feedback, engagement, and performance." }
  ];

  return (
    <section id="method" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        <div className="space-y-3 max-w-3xl border border-[#3F3F46] bg-[#121215] p-8 sm:p-10 rounded-3xl shadow-xl">
          <span className="text-xs font-mono font-bold tracking-widest text-[#A1A1AA] uppercase block">
            OPERATING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            THE weFOCUS METHOD
          </h2>
          <p className="text-base sm:text-lg text-[#E4E4E7] leading-relaxed font-medium">
            A battle-tested 4-step framework bridging real-world observation with digital execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.title}
              className="bg-[#121215] border border-[#3F3F46] p-7 rounded-3xl flex flex-col justify-between space-y-6 shadow-xl hover:border-zinc-400 transition-all"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#A1A1AA] border border-[#3F3F46] px-3 py-1 rounded-full bg-[#18181C]">
                  STEP {st.number}
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-4">
                  {st.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#E4E4E7] leading-relaxed border-t border-[#3F3F46] pt-4 font-medium">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#121215] border border-[#3F3F46] p-8 sm:p-14 rounded-3xl space-y-4 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            ONLINE TELLS YOU WHAT PEOPLE DO.
          </h3>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-[#E4E4E7]">
            THE GROUND TELLS YOU WHY.
          </h3>
          <p className="text-base sm:text-lg text-[#E4E4E7] max-w-2xl mx-auto pt-2 font-medium">
            weFOCUS combines digital intelligence with real-world observation, customer feedback, and practical execution.
          </p>
        </div>
      </div>
    </section>
  );
}
