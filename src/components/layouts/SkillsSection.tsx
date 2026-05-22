import React from "react";
import { Terminal, Code2, Database, Settings, Layers } from "lucide-react";
import { Technology } from "@/types";

interface SkillItem {
  name: string;
  level?: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  accentClass: string;
}

export default function SkillsSection() {
  const skillGroups: SkillCategory[] = [
    {
      title: "Backend Development",
      description:
        "Building fast, secure server logic and core business systems architecture.",
      icon: <Database className="w-5 h-5" />,
      accentClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "PostgreSQL" },
        { name: "Prisma ORM" },
        { name: "RESTful APIs" },
      ],
    },
    {
      title: "Frontend Engineering",
      description:
        "Crafting highly responsive, responsive components and web layouts.",
      icon: <Code2 className="w-5 h-5" />,
      accentClass: "text-primary bg-primary/10 border-primary/20",
      skills: [
        { name: "React 18" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Vite" },
        { name: "TanStack Query" },
        { name: "Axios" },
      ],
    },
    {
      title: "Tools & Ecosystems",
      description:
        "Managing deployment pipelines, version tracking, and development configurations.",
      icon: <Settings className="w-5 h-5" />,
      accentClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      skills: [
        { name: "Git & GitHub" },
        { name: "Postman" },
        { name: "Shadcn/UI" },
        { name: "Zod Validation" },
        { name: "JWT Auth" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="container max-w-7xl mx-auto px-4 py-20 border-t border-border/50 relative overflow-hidden"
    >
      {/* Background Decorative Accent Glow */}
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
          My primary technical ecosystem categorized by layer, architecture
          role, and runtime tools.
        </p>
      </div>

      {/* SKILLS CORE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-xs shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg dark:hover:bg-muted/10"
          >
            <div className="space-y-4">
              {/* Category Header Title */}
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-xl border ${group.accentClass} shrink-0`}
                >
                  {group.icon}
                </div>
                <h3 className="font-bold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {group.description}
              </p>

              {/* Badges Layout Wrap Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium border border-border/80 bg-muted/30 text-muted-foreground/90 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual bottom subtle card accent bar anchor */}
            <div className="w-full h-0.5 bg-border/30 rounded-full mt-6 group-hover:bg-primary/30 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
