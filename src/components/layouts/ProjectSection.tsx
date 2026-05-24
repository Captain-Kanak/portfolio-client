import { Terminal } from "lucide-react";
import { getProjects } from "@/actions/project.action";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

export default async function ProjectSection() {
  const response = await getProjects({
    page: "1",
    limit: "6",
  });

  const liveProjects: Project[] = (response?.data || []).filter(
    (project: Project) => !project.isDeleted,
  );

  return (
    <section
      id="projects"
      className="container max-w-7xl mx-auto py-25 px-4 border-t border-border/40 relative overflow-hidden"
    >
      {/* Premium background decorative blur constraints */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-2 mb-16 text-left relative z-10">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-4 h-4" />
          <span>01. My_Works</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-2.5">
          Featured Production Builds
        </h2>
        <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
          Architected with client performance scaling, strict relational
          database integrity, and crisp engineering interfaces.
        </p>
      </div>

      {/* CARDS MATRIX GRID */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {liveProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
