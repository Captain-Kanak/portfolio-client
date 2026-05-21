"use client";

import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, typingSpeed);

      if (currentText === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, deletingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="relative">
      {currentText}
      {/* Animated blinking cursor block */}
      <span className="ml-1 inline-block w-0.75 h-[0.8em] bg-primary animate-pulse" />
    </span>
  );
}
