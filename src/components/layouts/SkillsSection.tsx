import React from "react";
import { Activity, Layers, Terminal } from "lucide-react";
import { getTechnologies } from "@/actions/technology.action";
import { TechnologyType } from "@/types/enums";
import { metaConfig } from "@/constants/technology";

export default async function SkillsSection() {
  const targetTypes = Object.keys(metaConfig) as TechnologyType[];

  const queryResponses = await Promise.all(
    targetTypes.map((type) => getTechnologies({ type })),
  );

  const groupedData = targetTypes.reduce(
    (acc, type, index) => {
      const rawItems = queryResponses[index]?.data || [];

      if (rawItems.length === 0) return acc;

      acc[type] = rawItems.map((tech: any) => ({
        name: tech.name,
        count: tech._count?.projectsTechnologies ?? 0,
      }));

      return acc;
    },
    {} as Record<string, Array<{ name: string; count: number }>>,
  );

  return (
    <section
      id="skills"
      className="container max-w-7xl mx-auto px-4 py-20 border-t border-border/50 relative overflow-hidden"
    >
      {/* Background Decorative Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-2 mb-16 text-left">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-4 h-4" />
          <span>02. Expertise</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground flex items-center gap-2.5">
          <Layers className="w-7 h-7 text-primary/80" /> Skills Matrix
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          My primary technical ecosystem categorized dynamically from system
          architecture layers down to runtime parameters.
        </p>
      </div>

      {/* SKILLS CORE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {Object.entries(groupedData).map(([type, items]) => {
          const config = metaConfig[type];

          return (
            <div
              key={type}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xs shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md dark:hover:bg-muted/10"
            >
              <div className="space-y-4">
                {/* Category Header Layout */}
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 ${config?.accentClass || "text-foreground bg-muted border-border"}`}
                  >
                    {config?.icon || <Layers className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                    {config?.title || type}
                  </h3>
                </div>

                {/* Badges Flow Layout Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border border-border/80 bg-muted/30 text-muted-foreground/90 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground cursor-default group/skill"
                    >
                      {skill.name}

                      {/* Projects usage marker pill indicator */}
                      {skill.count > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-primary bg-primary/10 border border-primary/20 px-1 rounded-sm group-hover/skill:bg-primary group-hover/skill:text-primary-foreground transition-colors duration-150">
                          <Activity className="w-2.5 h-2.5" />
                          {skill.count}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Accent Bottom Anchor Line */}
              <div className="w-full h-0.5 bg-border/30 rounded-full mt-6 group-hover:bg-primary/30 transition-colors duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
