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
            6 KEY CASE PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map((project) => (
            <article
              key={project.id}
              className="editorial-card p-7 rounded-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                  <h3 className="text-lg font-bold font-display tracking-tight text-[#F4F4F6]">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#71717A] bg-[#18181C] px-2 py-0.5 rounded border border-[#27272A]">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs font-mono font-semibold text-[#A1A1AA] uppercase">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-[#27272A] pt-4">
                <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-widest block">
                  ROLE & SCOPE
                </span>
                <span className="text-xs font-medium text-[#F4F4F6]">
                  {project.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
