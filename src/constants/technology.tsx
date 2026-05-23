import {
  Layers,
  Code2,
  Database,
  Settings,
  Cpu,
  ShieldCheck,
  Globe,
  GitBranch,
  Bot,
  Wrench,
} from "lucide-react";
import { TechnologyType } from "@/types/enums";

interface CategoryMeta {
  title: string;
  icon: React.ReactNode;
  accentClass: string;
}

export const metaConfig: Record<string, CategoryMeta> = {
  [TechnologyType.LANGUAGE]: {
    title: "Languages",
    icon: <Cpu className="w-5 h-5" />,
    accentClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  },
  [TechnologyType.FRONTEND]: {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    accentClass: "text-primary bg-primary/10 border-primary/20",
  },
  [TechnologyType.BACKEND]: {
    title: "Backend",
    icon: <Settings className="w-5 h-5" />,
    accentClass: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  [TechnologyType.DATABASE]: {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    accentClass: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  [TechnologyType.ORM]: {
    title: "ORM Layer",
    icon: <Layers className="w-5 h-5" />,
    accentClass: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  [TechnologyType.DEVOPS]: {
    title: "DevOps & Cloud",
    icon: <Globe className="w-5 h-5" />,
    accentClass: "text-orange-500 bg-orange-500/10 border-orange-500/20",
  },
  [TechnologyType.TOOL]: {
    title: "Workflow Tools",
    icon: <Wrench className="w-5 h-5" />,
    accentClass: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
  },
  [TechnologyType.AUTH]: {
    title: "Authentication",
    icon: <ShieldCheck className="w-5 h-5" />,
    accentClass: "text-red-500 bg-red-500/10 border-red-500/20",
  },
  [TechnologyType.API]: {
    title: "API Architecture",
    icon: <GitBranch className="w-5 h-5" />,
    accentClass: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  [TechnologyType.AI]: {
    title: "AI & Automation",
    icon: <Bot className="w-5 h-5" />,
    accentClass: "text-fuchsia-500 bg-fuchsia-500/10 border-fuchsia-500/20",
  },
};
