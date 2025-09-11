'use client';

import { useEffect, useState } from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

export default function Title({ text, className }: TitleProps) {
  const [visibleLetters, setVisibleLetters] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= text.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [text.length]);

  return (
    <h1 className={className}>
      {text.split('').map((char, index) => (
        <span
          className={`inline-block transition-all duration-700 ease-out ${
            index < visibleLetters ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-2.5'
          }`}
          key={index}
          style={{
            transitionDelay: `${index * 80}ms`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}
