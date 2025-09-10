'use client';

import { useEffect, useState } from 'react';

export interface SubTitleProps {
  className?: string;
  text: string;
}

export default function SubTitle({ className, text }: SubTitleProps) {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 80);

    return () => {
      clearInterval(typingTimer);
    };
  }, [text]);

  return (
    <h2 className={className}>
      {displayedText}
      <span
        className="inline-block"
        style={{
          animation: 'blink 1s infinite',
        }}
      >
        |
      </span>
    </h2>
  );
}
