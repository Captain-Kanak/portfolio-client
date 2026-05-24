import { Project } from "@/types";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Server,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { FeedbackButton } from "./FeedbackButton";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col justify-between overflow-hidden border-border/60 bg-card/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
      <div className="relative">
        {/* Top ambient hover accent line slide transition */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <CardHeader className="space-y-3">
          <CardTitle className="text-xl font-bold flex items-center justify-between tracking-tight group-hover:text-primary transition-colors duration-200">
            {project.title}
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
            >
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-10">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* DYNAMIC SYSTEM FEATURES SUB-SECTION */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-wider uppercase text-muted-foreground/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary/70" /> Core
                Capabilities
              </span>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-foreground/80 font-medium">
                {project.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="truncate flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TECHNOLOGY BADGES WRAP ROW */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-muted-foreground/80">
              <Layers className="w-3.5 h-3.5 text-primary/70" /> Integrated Tech
              Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies?.map((tech) => (
                <Badge
                  key={tech.id}
                  variant="outline"
                  className="bg-muted/30 font-mono text-[10px] font-medium tracking-wide border-border/80 px-2 py-0.5 text-muted-foreground/90 hover:border-primary/30 hover:text-foreground transition-all cursor-default"
                >
                  {tech.technology?.name}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </div>

      {/* DYNAMIC CARD BOTTOM ACTIONS MATRIX INTERFACE */}
      <div className="space-y-2 p-4 pt-0">
        {/* GITHUB INFO BANNER FOOTER INLAY */}
        <div className="rounded-xl border border-dashed border-border bg-muted/20 p-3 mt-4 flex items-start gap-2.5 transition-colors group-hover:bg-muted/40 group-hover:border-primary/20">
          <FaGithub className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
          <div className="space-y-0.5">
            <p className="text-[11px] font-semibold text-foreground tracking-tight">
              Detailed Technical Docs Available
            </p>
            <p className="text-[10px] text-muted-foreground leading-normal">
              Review systemic architectural blueprints, structural parameters,
              and ERD mockups natively inside the repos below.
            </p>
          </div>
        </div>

        {/* PRIMARY ARCHITECTURAL CONTROL ACTION ROW */}
        <div className="grid grid-cols-3 gap-2 border-t border-border/40 pt-3 text-xs">
          <Button
            size="sm"
            variant="default"
            className="w-full h-8 px-2 gap-1 shadow-xs shadow-primary/10 font-medium"
            asChild
          >
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live App</span>
            </Link>
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="w-full h-8 px-2 gap-1 bg-background/40 hover:bg-background/80 font-medium transition-all"
            asChild
          >
            <Link href={project.frontendUrl} target="_blank" rel="noreferrer">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>UI Code</span>
            </Link>
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="w-full h-8 px-2 gap-1 bg-background/40 hover:bg-background/80 font-medium transition-all"
            asChild
          >
            <Link href={project.backendUrl} target="_blank" rel="noreferrer">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>API Code</span>
            </Link>
          </Button>
        </div>

        {/* LIVE MODAL INTERACTIVE FEEDBACK TRIGGER ROW */}
        <FeedbackButton projectId={project.id} projectTitle={project.title} />
      </div>
    </Card>
  );
}
