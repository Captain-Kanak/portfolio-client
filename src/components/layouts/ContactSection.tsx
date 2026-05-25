import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="container max-w-7xl mx-auto py-20 px-4 border-t border-border/40 text-center"
    >
      <div className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Let's Build Something Together
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Whether you are looking to hire a full-stack developer, discuss a
          robust system design architecture, or just share a virtual cup of tea,
          drop me a message.
        </p>
        <div className="pt-4">
          <Button size="lg" asChild className="gap-2">
            <Link href="mailto:kanakroy835@gmail.com">
              <Mail className="w-4 h-4" /> Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
