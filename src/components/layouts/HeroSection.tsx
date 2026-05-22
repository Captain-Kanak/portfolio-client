import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import { TypingEffect } from "./TypingEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="container max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* TEXT CONTENT */}
        <div className="space-y-6 md:col-span-7 order-2 md:order-1">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-sm font-medium tracking-wide w-fit bg-primary/10 text-primary border border-primary/20 backdrop-blur-md animate-pulse"
            >
              Open for Opportunities
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-none">
                Hi, I'm{" "}
                <span className="text-transparent bg-linear-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text drop-shadow-sm">
                  Kanak
                </span>
              </h1>

              {/* Dynamic Animated Subtitle typing line */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground min-h-10">
                I am a{" "}
                <span className="text-primary">
                  <TypingEffect
                    words={[
                      "Full Stack Developer",
                      "Backend Architect",
                      "Systems Engineer",
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseDuration={2000}
                  />
                </span>
              </h2>
            </div>

            {/* Minimal Terminal Sub-badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/80 bg-muted/40 w-fit px-2.5 py-1 rounded-md border border-border/40">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>const dev = "Full Stack";</span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl pt-2">
              Specializing in building robust, secure backends with Node.js,
              Express.js, TypeScript, Prisma and PostgreSQL, paired with clean
              and highly responsive frontend interfaces.
            </p>
          </div>

          {/* Fancy Micro-Interactions on CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              asChild
              variant="default" // Changed to solid default variant for hierarchy
              size="lg"
              className="cursor-pointer font-medium tracking-tight shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <Link href="#projects" className="flex items-center gap-2">
                View My Work
                {/* Animated icon that shifts right on button hover */}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="cursor-pointer font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted/60"
            >
              <Link
                href="https://github.com/Captain-Kanak"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="cursor-pointer font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:bg-primary/5"
            >
              <Link
                href="https://www.linkedin.com/in/captain-kanak"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaLinkedin className="w-4 h-4 text-[#0A66C2] dark:text-[#0A66C2]" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:col-span-5 order-1 md:order-2 lg:flex justify-center relative w-full">
          {/* Accent Glow behind Terminal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-tr from-primary/20 via-blue-500/10 to-cyan-400/20 rounded-2xl blur-2xl pointer-events-none" />

          {/* IDE Window Frame */}
          <div className="w-full max-w-md rounded-xl border border-border/60 bg-card/70 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-left">
            {/* Window Header / Window controls */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/40">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground font-medium select-none">
                schema.ts
              </span>
              <div className="w-12" /> {/* Layout balancer spacer */}
            </div>

            {/* Editor Screen Code Content */}
            <div className="p-5 space-y-2.5 text-muted-foreground selection:bg-primary/20 overflow-x-auto">
              <div>
                <span className="text-blue-500">import</span>{" "}
                {"{ PrismaClient }"} <span className="text-blue-500">from</span>{" "}
                <span className="text-emerald-500">"@prisma/client"</span>;
              </div>
              <div>
                <span className="text-purple-500">const</span>{" "}
                <span className="text-yellow-600 dark:text-yellow-400">
                  stack
                </span>{" "}
                = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">runtime:</span>{" "}
                <span className="text-emerald-500">"Node.js"</span>,
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">framework:</span>{" "}
                <span className="text-emerald-500">"Express.js"</span>,
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">typeSafety:</span>{" "}
                <span className="text-emerald-500">"TypeScript"</span>,
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">orm:</span>{" "}
                <span className="text-emerald-500">"Prisma"</span>,
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">database:</span>{" "}
                <span className="text-emerald-500">"PostgreSQL"</span>
              </div>
              <div>{"};"}</div>

              <div className="pt-2 border-t border-border/40 text-xs flex items-center justify-between text-emerald-500/90 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Database Connected</span>
                </div>
                <span className="text-muted-foreground/50 select-none">
                  v1.0.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
