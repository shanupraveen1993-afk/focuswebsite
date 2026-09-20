"use client";

import { selectedProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#27272A]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#27272A] pb-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-[#71717A] uppercase">
              06 / WHAT I&apos;VE BUILT & DEVELOPED
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display text-[#F4F4F6] tracking-tight mt-2">
              SELECTED WORK
            </h2>
          </div>
          <span className="text-xs font-mono text-[#A1A1AA] uppercase">
            {selectedProjects.length} CURATED PROJECTS
          </span>
        </div>

        {/* Project Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedProjects.map((project) => (
            <article
              key={project.id}
              className="editorial-card p-8 rounded-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#27272A] pb-3">
                  <h3 className="text-xl font-bold font-display tracking-tight text-[#F4F4F6] group-hover:text-white">
                    {project.title}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#27272A] group-hover:bg-[#F4F4F6] transition-colors"></span>
                </div>

                <p className="text-xs font-mono font-semibold text-[#F4F4F6] uppercase tracking-wider">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#27272A]">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#71717A] uppercase tracking-widest block">
                    ROLE & RESPONSIBILITY
                  </span>
                  <span className="text-xs font-medium text-[#F4F4F6]">
                    {project.role}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#18181C] text-[#71717A] text-[10px] font-mono px-2 py-0.5 rounded border border-[#27272A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
