import React from "react";
import Link from "next/link";
import { Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background relative overflow-hidden">
      {/* Subtle bottom decorative accent glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container max-w-7xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        {/* LOGO / BRAND MARK */}
        <div className="flex items-center gap-2 font-mono text-sm tracking-tight text-foreground/90 group">
          <Terminal className="w-4 h-4 text-primary transition-transform duration-300 group-hover:rotate-6" />
          <span className="font-bold">Dev</span>
          <span className="text-muted-foreground">.portfolio</span>
        </div>

        {/* COPYRIGHT & METRICS */}
        <p className="text-xs font-mono text-muted-foreground text-center sm:text-left order-last sm:order-0">
          &copy; {currentYear} &bull; Built with Next.js & Tailwind CSS. All
          rights reserved.
        </p>

        {/* SOCIAL LINKS ARCHITECTURE */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Captain-Kanak"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/50 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/captain-kanak"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-border/60 bg-muted/20 text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:kanakroy835@gmail.com"
            className="p-2 rounded-md border border-border/60 bg-muted/20 text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-200"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
