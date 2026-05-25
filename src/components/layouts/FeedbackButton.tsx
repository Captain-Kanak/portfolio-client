"use client";

import React from "react";
import { MessageSquarePlus } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface FeedbackButtonProps {
  projectId: string;
  projectTitle: string;
}

export function FeedbackButton({
  projectId,
  projectTitle,
}: FeedbackButtonProps) {
  const handleOpenFeedbackModal = () => {
    const toastId = toast.loading("Loading...");

    setTimeout(() => {
      toast.info("This feature is coming soon.", { id: toastId });
    }, 1000);
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
