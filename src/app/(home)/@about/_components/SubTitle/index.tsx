'use client';

import { useEffect, useState } from 'react';

export interface SubTitleProps {
  className?: string;
  text: string;
}

export default function SubTitle({ className, text }: SubTitleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
        // 타이핑 완료 후 커서 깜빡임 중단
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 80);

    // 커서 깜빡임 효과
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [text]);

  return (
    <h2 className={className}>
      {displayedText}
      <span className={`inline-block transition-opacity duration-200 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </h2>
  );
}
