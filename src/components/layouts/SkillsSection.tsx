import React from "react";
import {
  Activity,
  Layers,
  Terminal,
  Cpu,
  Code2,
  Server,
  Database,
  Globe2,
  Wrench,
} from "lucide-react";
import { getTechnologies } from "@/actions/technology.action";
import { SKILL_GROUPS } from "@/constants/technology";

interface GroupVisualConfig {
  icon: React.ReactNode;
  accentClass: string;
}

const visualConfigMap: Record<string, GroupVisualConfig> = {
  "Core Languages": {
    icon: <Cpu className="w-5 h-5" />,
    accentClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  "Frontend Engineering": {
    icon: <Code2 className="w-5 h-5" />,
    accentClass: "text-primary bg-primary/10 border-primary/20",
  },
  "Backend & APIs": {
    icon: <Server className="w-5 h-5" />,
    accentClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  "Data & Systems": {
    icon: <Database className="w-5 h-5" />,
    accentClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  "DevOps & Cloud": {
    icon: <Globe2 className="w-5 h-5" />,
    accentClass: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  },
  "Tools & AI": {
    icon: <Wrench className="w-5 h-5" />,
    accentClass: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  },
};

export default async function SkillsSection() {
  const response = await getTechnologies();
  const technologies = response?.data || [];

  return (
    <section
      id="skills"
      className="container max-w-7xl mx-auto px-4 py-20 border-t border-border/50 relative overflow-hidden"
    >
      {/* Ambient background decoration glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="flex flex-col space-y-2 mb-16 text-left relative z-10">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-4 h-4" />
          <span>02. Expertise</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground flex items-center gap-2.5">
          <Layers className="w-7 h-7 text-primary/80" /> Technology Stack
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          My technical ecosystem structured by core architectural
          responsibilities and active project integration metrics.
        </p>
      </div>

      {/* CORE SKILLS MATRIX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {SKILL_GROUPS.map((group) => {
          const items =
            technologies?.filter((tech) =>
              group.types.includes(tech.type as any),
            ) || [];

          if (items.length === 0) return null;

          const visual = visualConfigMap[group.title] || {
            icon: <Layers className="w-5 h-5" />,
            accentClass: "text-foreground bg-muted border-border",
          };

          return (
            <div
              key={group.title}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md dark:hover:bg-muted/10"
            >
              <div className="space-y-5">
                {/* Header Category Identity Wrap */}
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-xl border shrink-0 ${visual.accentClass}`}
                  >
                    {visual.icon}
                  </div>
                  <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                    {group.title}
                  </h3>
                </div>

                {/* Badges Layout Wrap Flow Row */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {items.map((skill) => (
                    <div
                      key={skill.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border border-border/80 bg-muted/30 text-muted-foreground/90 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground cursor-default group/skill"
                    >
                      <span>{skill.name}</span>

                      {/* Relational project tracking active metrics counter */}
                      {(skill._count?.projectsTechnologies ?? 0) > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-primary bg-primary/10 border border-primary/20 px-1 rounded-sm group-hover/skill:bg-primary group-hover/skill:text-primary-foreground transition-colors duration-150">
                          <Activity className="w-2.5 h-2.5" />
                          {skill._count?.projectsTechnologies}
                        </span>
                      )}
                    </div>
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
