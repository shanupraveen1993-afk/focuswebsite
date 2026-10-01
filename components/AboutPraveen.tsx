"use client";

export function AboutPraveen() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Founder Bio Boxed Header */}
        <div className="bg-[#121215] border border-[#3F3F46] p-8 sm:p-10 rounded-3xl space-y-6 shadow-xl">
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#A1A1AA] uppercase block">
              PRACTICE LEAD
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight">
              PRAVEEN
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-white font-medium leading-relaxed max-w-4xl">
            My foundation is in ground-level UX research and design. Over time, that foundation expanded into digital products, search architecture, marketing, and business strategy.
          </p>

          <p className="text-base text-[#E4E4E7] leading-relaxed border-t border-[#3F3F46] pt-4 max-w-4xl">
            weFOCUS brings these disciplines together to solve complex business problems that cannot be answered by a single marketing or design channel alone.
          </p>
        </div>
      </div>
    </section>
  );
}

