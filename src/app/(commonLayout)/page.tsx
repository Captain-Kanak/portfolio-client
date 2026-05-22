import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Server, Code, Database, Terminal } from "lucide-react";
import ProjectSection from "@/components/layouts/ProjectSection";
import HeroSection from "@/components/layouts/HeroSection";
import AboutSection from "@/components/layouts/AboutSection";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

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

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    skills: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5 text-primary" />,
    skills: ["Next.js", "React", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-primary" />,
    skills: ["Node.js", "Express.js", "Prisma"],
  },
  {
    title: "Databases & Tools",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: ["PostgreSQL", "MongoDB", "Docker", "Git"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* FEATURED PROJECTS SECTION */}
      <ProjectSection featuredProjects={featuredProjects} />

      {/* SKILLS MATRIX SECTION */}
      <section className="container mx-auto py-16 px-4 border-t border-border/40">
        <div className="flex flex-col space-y-2 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Technical Ecosystem
          </h2>
          <p className="text-muted-foreground">
            The languages, frameworks, and structural infrastructure tools I
            work with daily.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="container mx-auto py-20 px-4 border-t border-border/40 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you are looking to hire a full-stack developer, discuss a
            robust system design architecture, or just share a virtual cup of
            tea, drop me a message.
          </p>
          <div className="pt-4">
            <Button size="lg" asChild className="gap-2">
              <Link href="mailto:your.email@example.com">
                <Mail className="w-4 h-4" /> Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* <HeroSection /> */
/* <AboutSection />  */
// {/* <ProjectSection /> */
// {/* <SkillsSection /> */}
// {/* <ContactSection /> */}
