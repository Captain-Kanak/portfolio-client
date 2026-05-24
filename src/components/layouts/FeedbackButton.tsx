"use strict";

"use client";

import React from "react";
import { MessageSquarePlus } from "lucide-react";
import { Button } from "../ui/button";

interface FeedbackButtonProps {
  projectId: string;
  projectTitle: string;
}

export function FeedbackButton({
  projectId,
  projectTitle,
}: FeedbackButtonProps) {
  const handleOpenFeedbackModal = () => {
    // 1. Hook up your state manager or context dispatch mechanisms here
    // 2. Or pass it directly to an active shadcn <DialogTrigger /> element frame wrapper
    console.log(
      `Opening custom review modal payload target parameter context for: ${projectTitle} (${projectId})`,
    );
    alert(`Modal open trigger logic goes here for: "${projectTitle}"`);
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={handleOpenFeedbackModal}
      className="w-full h-8 text-xs font-mono font-medium tracking-wide text-muted-foreground/80 hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all gap-1.5 cursor-pointer"
    >
      <MessageSquarePlus className="w-3.5 h-3.5" />
      <span>Submit Peer Feedback</span>
    </Button>
  );
}
