'use client';

import type { IconName } from 'lucide-react/dynamic';
import { DynamicIcon } from 'lucide-react/dynamic';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import data from '@/assets/data/ko.json';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [animationStep, setAnimationStep] = useState<number>(0);

  const visibleLines = Math.min(animationStep, data.descriptions.length);
  const showCards = animationStep > data.descriptions.length;

  useEffect(() => {
    if (inView) {
      let step = 0;
      const stepTimer = setInterval(() => {
        step++;
        setAnimationStep(step);

        if (step > data.descriptions.length + 1) {
          clearInterval(stepTimer);
        }
      }, 300);

      return () => clearInterval(stepTimer);
    }
  }, [inView]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 pb-8 pt-25 lg:px-8 lg:pt-[132px] lg:pb-16" id="about" ref={ref}>
      <div className={`w-full max-w-5xl text-center space-y-16 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      >
        {/* 메인 메시지 */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-2xl/8 lg:text-3xl/13 font-medium text-black dark:text-white">
            {data.descriptions.map((line, i) => (
              <div
                className={`transition-all duration-700 ease-out ${
                  i < visibleLines ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-2.5'
                }`}
                key={i}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* 개발 원칙 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.principles.map(({ key, text }, i) => (
            <div
              className={`bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center space-y-4 transition-all duration-700 hover:shadow-lg hover:scale-105 hover:duration-700 ${
                showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              key={i}
              style={{
                transitionDelay: `${i * 200}ms`,
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <DynamicIcon className="w-8 h-8 text-black dark:text-white" name={key as IconName} />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
