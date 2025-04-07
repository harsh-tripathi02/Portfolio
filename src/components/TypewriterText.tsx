
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterPhrase?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterPhrase = 1500,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [pauseBeforeDeleting, setPauseBeforeDeleting] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    if (pauseBeforeDeleting) {
      // Pause before starting to delete
      pauseTimeoutRef.current = setTimeout(() => {
        setPauseBeforeDeleting(false);
        setIsDeleting(true);
      }, delayAfterPhrase);
      return;
    }

    if (isDeleting) {
      // Deleting text
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      // Typing text
      if (displayText === currentPhrase) {
        setPauseBeforeDeleting(true);
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [
    displayText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayAfterPhrase,
    pauseBeforeDeleting,
  ]);

  return (
    <span className={`relative inline-block ${className}`}>
      {displayText}
      <span className="absolute right-[-8px] top-0 h-full w-[2px] bg-current animate-blink">
        |
      </span>
    </span>
  );
};

export default TypewriterText;
