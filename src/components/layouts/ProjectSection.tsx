import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export default async function ProjectSection() {
  const featuredProjects: Project[] = [
    {
      title: "EcoSpark-Hub",
      description:
        "A comprehensive sustainability platform designed to crowdsource and manage eco-friendly ideas with integrated payment logic and dynamic admin tracking.",
      technologies: ["TypeScript", "Node.js", "Prisma", "PostgreSQL"],
      liveUrl: "https://ecospark-hub.vercel.app",
      githubUrl: "https://github.com",
    },
    {
      title: "Medistore Dashboard",
      description:
        "An optimized inventory and sales management system featuring a responsive administration interface and robust product validation pipelines.",
      technologies: ["React", "Express.js", "Zod", "Tailwind CSS"],
      liveUrl: "https://medistore-dev.vercel.app",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <section
      id="projects"
      className="container max-w-7xl mx-auto py-16 px-4 border-t border-border/40"
    >
      <div className="flex flex-col space-y-2 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Featured Production Builds
        </h2>
        <p className="text-muted-foreground">
          Architected with performance, relational integrity, and clean design
          patterns in mind.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col justify-between overflow-hidden border-border/60 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl font-bold flex items-center justify-between">
                {project.title}
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-muted/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-3 border-t bg-muted/10 px-6 py-4">
              <Button size="sm" variant="default" className="w-full" asChild>
                <Link href={project.liveUrl} target="_blank">
                  Live Application
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="w-full" asChild>
                <Link href={project.githubUrl} target="_blank">
                  Source Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
