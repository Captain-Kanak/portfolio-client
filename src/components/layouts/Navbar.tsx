import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href={"/"}>
          <span className="font-bold text-lg">portfolio.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#intro" className="hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
}
