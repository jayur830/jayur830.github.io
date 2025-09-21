'use client';

import dayjs from 'dayjs';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const careers = [
  {
    id: 1,
    company: '엔라이튼',
    from: '2022-03-14',
    to: '2025-08-29',
    position: '프론트엔드 개발자',
    achievements: [
      '레거시 프론트엔드 시스템을 최신 기술로 전환, 서비스 성능 및 안정성 개선',
      '애자일 환경에서 신규 기능 개발 및 사용자 경험 최적화 업무 수행',
    ],
  },
  {
    id: 2,
    company: '위즈아이 (구 환경과학기술)',
    from: '2020-07-13',
    to: '2022-03-04',
    position: '풀스택 개발자',
    achievements: [
      '프론트엔드부터 백엔드, 서버 배포, DB 관리까지 웹 개발 전반 담당',
      '외부 접근이 제한된 공공기관 폐쇄망에서 직접 시스템에 접근해 개발 및 운영하는 프로젝트 다수 수행',
    ],
  },
];

function calculateDuration(from: string, to: string) {
  const start = dayjs(from);
  const end = dayjs(to);
  const months = end.diff(start, 'month');
  return `${months}개월`;
}

function formatPeriod(from: string, to: string) {
  const start = dayjs(from);
  const end = dayjs(to);
  return `${start.format('YYYY.MM.DD')} ~ ${end.format('YYYY.MM.DD')}`;
}

export default function Careers() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [visibleItems, setVisibleItems] = useState<number>(0);

  useEffect(() => {
    if (inView) {
      let count = 0;
      const timer = setInterval(() => {
        count++;
        setVisibleItems(count);
        if (count >= careers.length) {
          clearInterval(timer);
        }
      }, 300);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 pb-8 pt-25 lg:px-8 lg:pt-[132px] lg:pb-16" id="careers" ref={ref}>
      <div className={`w-full max-w-4xl transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      >
        <h1 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Careers</h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {careers.map(({
              id,
              company,
              from,
              to,
              position,
              achievements,
            }, i) => (
              <div
                className={`relative transition-all duration-700 ease-out ${
                  i < visibleItems ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                key={id}
                style={{
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[11px] lg:left-[27px] w-3 h-3 bg-white dark:bg-gray-900 rounded-full border-3 border-black dark:border-white" />

                {/* Content Card */}
                <div className="ml-10 lg:ml-20">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                    {/* Company Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center gap-3 mb-3 lg:mb-0">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-black dark:text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg lg:text-xl font-bold text-black dark:text-white">
                            {company}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{position}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{formatPeriod(from, to)}</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                          {calculateDuration(from, to)}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="space-y-3">
                        {achievements.map((achievement, j) => (
                          <p
                            className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                            key={j}
                          >
                            {achievement}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
