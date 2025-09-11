'use client';

import { Search, Target, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const principles = [
  {
    icon: Target,
    text: '일정도 중요하지만 정확성을 더 중요하게 생각해요.',
  },
  {
    icon: Search,
    text: '문제가 생기면 일단 나부터 점검하는 자세를 가지며, 책임을 따지기 보다는 일단 해결을 우선시 해요.',
  },
  {
    icon: Wrench,
    text: '검증된 일반적인 방법론을 주로 사용하며, 필요한 경우 새로운 방식도 검토해요.',
  },
];

const mainMessage = [
  '복잡한 구조를 단순하게 만들고',
  '반복되는 작업은 자동화하며',
  '유지보수 가능한 시스템을 만드는 데 집중합니다',
];

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [animationStep, setAnimationStep] = useState<number>(0);

  const visibleLines = Math.min(animationStep, mainMessage.length);
  const showCards = animationStep > mainMessage.length;

  useEffect(() => {
    if (inView) {
      let step = 0;
      const stepTimer = setInterval(() => {
        step++;
        setAnimationStep(step);

        if (step > mainMessage.length + 1) {
          clearInterval(stepTimer);
        }
      }, 300);

      return () => clearInterval(stepTimer);
    }
  }, [inView]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-8 py-16" id="about" ref={ref}>
      <div className={`w-full max-w-5xl text-center space-y-16 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      >
        {/* 메인 메시지 */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-3xl/13 font-medium text-black dark:text-white">
            {mainMessage.map((line, i) => (
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
          {principles.map(({ icon: Icon, text }, i) => (
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
                  <Icon className="w-8 h-8 text-black dark:text-white" />
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
