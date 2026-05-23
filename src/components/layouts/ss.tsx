import React from "react";
import { Activity, Layers, Terminal } from "lucide-react";

import { getTechnologies } from "@/actions/technology.action";
import {
  TECHNOLOGY_TYPE_META,
  TECHNOLOGY_COLOR_MAP,
} from "@/constants/technology";
import { Technology } from "@/types";
import { TechnologyType } from "@/types/enums";

export default async function SkillsSection() {
  const response = await getTechnologies();

  const technologies: Technology[] | null = response?.data;

  const groupedTechnologies =
    technologies?.reduce(
      (acc, technology) => {
        const type = technology.type as TechnologyType;

        if (!acc[type]) {
          acc[type] = [];
        }

        acc[type].push(technology);

        return acc;
      },
      {} as Record<TechnologyType, Technology[]>,
    ) ?? ({} as Record<TechnologyType, Technology[]>);

  const sections = (
    Object.entries(groupedTechnologies) as [TechnologyType, Technology[]][]
  )
    .map(([type, items]) => {
      const meta = TECHNOLOGY_TYPE_META[type];

      return {
        type,
        items,
        meta,
      };
    })
    .filter((section) => section.meta)
    .sort((a, b) => a.meta.order - b.meta.order);

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-border/50 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-16 space-y-3">
          <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-primary">
            <Terminal className="h-4 w-4" />
            <span>02. Skills</span>
          </div>

          <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <Layers className="h-7 w-7 text-primary/80" />
            Technology Stack
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Technologies, tools, and engineering domains I use to design, build,
            and scale software systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.meta.icon;
            const colors = TECHNOLOGY_COLOR_MAP[section.meta.color];

            return (
              <div
                key={section.type}
                className="group rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg"
              >
                {/* Card Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`
                      rounded-xl border p-3
                      ${TECHNOLOGY_COLOR_MAP[section.meta.color].bg}
                      ${TECHNOLOGY_COLOR_MAP[section.meta.color].border}
                    `}
                  >
                    <Icon
                      className={`h-5 w-5 ${TECHNOLOGY_COLOR_MAP[section.meta.color].text}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {section.meta.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {section.items.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {section.items.map((technology) => (
                    <div
                      key={technology.id}
                      className="group/skill inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                    >
                      <span>{technology.name}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 h-px w-full bg-border/50 transition-colors duration-300 group-hover:bg-primary/30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
