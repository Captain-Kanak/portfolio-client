import React from "react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Terminal, CheckCircle2, FileText, Download } from "lucide-react";
import { TypingEffect } from "./TypingEffect";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function HeroSection() {
  const RESUME_VIEW_URL =
    "https://drive.google.com/file/d/1mrI8fDyX6nRfZDkieumQoKlPWMefxs5k/view";
  const RESUME_DOWNLOAD_PATH = "/resume.pdf";

  return (
    <section
      id="intro"
      className="container max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24 min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="space-y-6 md:col-span-7 order-2 md:order-1">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase w-fit bg-muted/40 text-foreground border border-border/60 backdrop-blur-md shadow-xs overflow-hidden group select-none transition-all duration-300 hover:border-primary/30"
            >
              {/* Subtle sliding light shimmer across the badge frame on hover */}
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-primary/5 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />

              {/* Glowing Radar Status Dot Indicator */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>

              <span className="tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Open for Opportunities
              </span>
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
                      "Programmer",
                      "Full Stack Developer",
                      "Backend Architect",
                      "Systems Engineer",
                      "Problem Solver",
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
              <span>const passion = "Programming";</span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl pt-2">
              Specializing in building robust, secure backends with Node.js,
              Express.js, TypeScript, PostgreSQL and Prisma, paired with clean
              and highly responsive frontend interfaces.
            </p>
          </div>

          {/* Contact Details & Actions Container */}
          <div className="space-y-4">
            {/* Direct Contact Metrics */}
            <div className="space-y-2 font-mono text-sm text-muted-foreground/90 bg-muted/20 border border-border/40 p-3.5 rounded-xl w-fit backdrop-blur-xs">
              <div className="flex items-center gap-2.5">
                <CiMail className="w-4 h-4 text-primary shrink-0" />
                <span>Email:</span>
                <a
                  href="mailto:kanakroy835@gmail.com"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  kanakroy835@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <FaWhatsapp className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp:</span>
                <a
                  href="https://wa.me/8801704210835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-emerald-500 transition-colors duration-200 font-medium"
                >
                  +880 17042 10835
                </a>
              </div>
              <div>
                {/* GitHub Icon Button */}
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted/80 rounded-xl"
                >
                  <Link
                    href="https://github.com/Captain-Kanak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-5 h-5 text-foreground/80 hover:text-foreground transition-colors" />
                  </Link>
                </Button>

                {/* LinkedIn Icon Button */}
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500/10 rounded-xl group/ln"
                >
                  <Link
                    href="https://www.linkedin.com/in/captain-kanak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-5 h-5 text-muted-foreground transition-colors group-hover/ln:text-[#0A66C2]" />
                  </Link>
                </Button>

                {/* Facebook Icon Button */}
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600/10 rounded-xl group/fb"
                >
                  <Link
                    href="https://www.facebook.com/captainkanak"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                  >
                    <FaFacebook className="w-5 h-5 text-muted-foreground transition-colors group-hover/fb:text-[#1877F2]" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary Call to Action: View Resume */}
              <Button
                asChild
                variant="default"
                className="cursor-pointer font-medium tracking-tight shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 group h-10 px-4 rounded-xl"
              >
                <Link
                  href={RESUME_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>View Resume</span>
                </Link>
              </Button>

              {/* Secondary Call to Action: Download Resume */}
              <Button
                asChild
                variant="outline"
                className="cursor-pointer font-medium tracking-tight h-10 px-4 rounded-xl border-border/80 bg-background/50 backdrop-blur-xs hover:bg-muted/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Link
                  href={RESUME_DOWNLOAD_PATH}
                  download="Kanak_Ray_Resume.pdf"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  <span>Download PDF</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CODE TERMINAL WITH CONTINUOUS TYPING */}
        <div className="hidden md:col-span-5 order-1 md:order-2 lg:flex justify-center relative w-full">
          {/* Accent Glow behind Terminal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-tr from-primary/20 via-blue-500/10 to-cyan-400/20 rounded-2xl blur-2xl pointer-events-none" />

          {/* IDE Window Frame */}
          <div className="w-full max-w-md rounded-xl border border-border/60 bg-card/70 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-left">
            {/* Window Header / Window controls */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/40 select-none">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                terminal_output.sh
              </span>
              <div className="w-12" />
            </div>

            {/* Editor Screen Code Content */}
            <div className="p-5 space-y-4 text-muted-foreground selection:bg-primary/20 min-h-65 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Terminal Prompt Command */}
                <div className="flex items-center gap-2 text-primary/70 select-none">
                  <span>kanak-portfolio %</span>
                  <span className="text-foreground">neofetch --stack</span>
                </div>

                {/* Dynamic Continuous Typing Process Line */}
                <div className="text-sm font-bold text-foreground tracking-wide pt-1 min-h-12">
                  <span className="text-blue-400">Current Process:</span>{" "}
                  <span className="text-emerald-400">
                    <TypingEffect
                      words={[
                        "Initializing Node.js runtime environments...",
                        "Configuring PostgreSQL connection pools...",
                        "Compiling safe TypeScript structural schemas...",
                        "Mapping relational tables via Prisma ORM...",
                        "Spawning Express.js server instances...",
                      ]}
                      typingSpeed={50}
                      deletingSpeed={25}
                      pauseDuration={1500}
                    />
                  </span>
                </div>

                {/* Clean Static System Specs Block */}
                <div className="space-y-1 text-xs text-muted-foreground/90 border-t border-border/20 pt-3">
                  <div>
                    <span className="text-cyan-400">OS:</span> Ubuntu 24.04 LTS
                    x86_64
                  </div>
                  <div>
                    <span className="text-cyan-400">Shell:</span> zsh 5.9
                    (x86_64-ubuntu)
                  </div>
                  <div>
                    <span className="text-cyan-400">Stack:</span> Node &bull;
                    Express &bull; TS &bull; Postgres &bull; Prisma
                  </div>
                </div>
              </div>

              {/* Immutable Status Sub-block */}
              <div className="space-y-1.5 pt-3 border-t border-border/40 text-xs">
                <div>
                  <span className="text-purple-400">Host:</span> Localhost:5000
                </div>
                <div>
                  <span className="text-purple-400">Environment:</span>{" "}
                  Production (Type-Safe)
                </div>
                <div className="pt-2 flex items-center justify-between text-emerald-500/90 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                    <span>System Online</span>
                  </div>
                  <span className="text-muted-foreground/40 select-none">
                    v2.1.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
