import React from "react";
import Image from "next/image";
import { User, Code2, Database, Terminal, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container max-w-5xl mx-auto px-4 py-20 border-t border-border/50 relative overflow-hidden"
    >
      {/* Subtle Background Mesh Glow */}
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col space-y-2 mb-16 text-left">
        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
          <Terminal className="w-4 h-4" />
          <span>03. Biography</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground flex items-center gap-2.5">
          <User className="w-7 h-7 text-primary/80" /> About Me
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          A glimpse into my background, engineering philosophy, and what drives
          my code.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN: IMAGE WITH TECH ACCENT FRAME */}
        <div className="md:col-span-5 flex justify-center relative group">
          {/* Decorative Backing Frame */}
          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5 pointer-events-none" />

          {/* Main Image Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-full md:h-96 rounded-2xl overflow-hidden border border-border/80 bg-muted/40 shadow-xl backdrop-blur-xs z-10">
            <Image
              src="/kanak.png"
              alt="Kanak Ray - Full Stack Developer"
              fill
              priority
              className="object-cover transition-all duration-500 group-hover:scale-103 filter grayscale hover:grayscale-0"
              sizes="(max-w-768px) 100vw, 33vw"
            />
            {/* Ambient Vignette Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT NARRATIVE & CORE PILLARS */}
        <div className="md:col-span-7 space-y-6 text-muted-foreground text-base leading-relaxed">
          <p className="text-lg text-foreground font-medium tracking-tight">
            My journey into programming began in 2020, driven by a profound
            curiosity to understand how software brings ideas to life.
          </p>

          <p>
            What started as late nights of self-study and experimentation has
            evolved into a robust skill set in both front-end and back-end
            development. I specialize in crafting elegant solutions, from
            intuitive user interfaces with modern JavaScript frameworks to
            robust server-side logic and database management.
          </p>

          <p>
            I thrive on overcoming technical challenges and continuously
            refining my craft to deliver high-quality, maintainable code. Beyond
            the code, I believe in continuous learning and the power of
            strategic thinking.
          </p>

          <p>
            My hobbies like chess and cricket not only offer a mental reset but
            also hone my problem-solving skills, patience, and team
            collaboration—qualities I integrate into every project.
          </p>

          {/* TECH PILLARS COMPONENT MATRIX */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/40">
            {/* Pillar 1: Full-Stack Solutions */}
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
              <div className="p-2 bg-primary/10 rounded-lg text-primary mt-0.5 shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-semibold text-foreground text-sm tracking-tight">
                  Elegant Interfaces
                </h4>
                <p className="text-xs text-muted-foreground/90">
                  Crafting clean, reactive front-end layers using modern
                  frameworks.
                </p>
              </div>
            </div>

            {/* Pillar 2: Core Data & Logic */}
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mt-0.5 shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-semibold text-foreground text-sm tracking-tight">
                  Server-Side Logic
                </h4>
                <p className="text-xs text-muted-foreground/90">
                  Designing robust systems architectures and database management
                  schemas.
                </p>
              </div>
            </div>

            {/* Pillar 3: Tactical Strategy */}
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-200 sm:col-span-2">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500 mt-0.5 shrink-0">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-semibold text-foreground text-sm tracking-tight">
                  Strategic Execution
                </h4>
                <p className="text-xs text-muted-foreground/90">
                  Applying problem-solving analytics, absolute patience, and
                  calculated collaboration into delivery lifecycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
