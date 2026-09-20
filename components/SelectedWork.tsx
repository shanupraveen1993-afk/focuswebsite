"use client";

import { selectedProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#27272A] pb-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              SELECTED IMPACT
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight mt-2">
              CURATED WORK
            </h2>
          </div>
          <span className="text-xs font-mono text-[#A1A1AA] uppercase">
            {selectedProjects.length} KEY CASE PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProjects.map((project) => (
            <article
              key={project.id}
              className="editorial-card p-8 rounded-3xl flex flex-col justify-between space-y-6 group hover:border-[#52525B] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
                  <h3 className="text-xl font-bold font-display tracking-tight text-[#F4F4F6] group-hover:text-white">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-[#A1A1AA] bg-[#18181C] px-3 py-1 rounded-full border border-[#27272A]">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs font-mono font-semibold text-[#A1A1AA] uppercase tracking-wider">
                  {project.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-[#27272A] pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-widest block">
                    ROLE & SCOPE
                  </span>
                  <span className="text-xs font-medium text-[#F4F4F6]">
                    {project.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
