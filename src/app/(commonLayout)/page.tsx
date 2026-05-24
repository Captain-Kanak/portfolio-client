import Link from "next/link";
import ProjectSection from "@/components/layouts/ProjectSection";
import HeroSection from "@/components/layouts/HeroSection";
import AboutSection from "@/components/layouts/AboutSection";
import SkillsSection from "@/components/layouts/SkillsSection";
import ContactSection from "@/components/layouts/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* HERO SECTION */}
      <HeroSection />

      {/* FEATURED PROJECTS SECTION */}
      <ProjectSection />

      {/* SKILLS MATRIX SECTION */}
      <SkillsSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* CONTACT CTA SECTION */}
      <ContactSection />
    </div>
  );
}
