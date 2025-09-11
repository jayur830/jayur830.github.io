'use client';

import dayjs from 'dayjs';
import { Briefcase, Calendar, MapPin, Trophy } from 'lucide-react';
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
      '성능 최적화: 데이터 가공 로직을 Map 기반으로 개선해 처리 성능 70% 향상 (O(n²) → O(n))',
      '번들 최적화: 번들 크기 30% 감소, 페이지 로드 시간 평균 2초 단축',
      '모니터링 시스템: Datadog RUM 도입으로 에러율 60% 감소, 사용자 오류 문의 월평균 7% 감소',
      '상태 관리 개선: Apollo Client로 Redux를 대체해 개발 속도 35% 향상',
      '개발 환경 구축: MSW로 API 모킹해 백엔드 서버 없이도 프론트엔드 개발할 수 있는 환경 구성',
      '하이브리드 앱 전환: React Native CLI 앱을 Expo + 하이브리드 웹앱으로 전환',
      '아키텍처 설계: 싱글톤/옵저버 패턴으로 공통 컴포넌트 전역 제어 시스템 구축',
      '배포 프로세스 단순화: CodePush와 앱스토어 두 곳 배포를 웹 배포 하나로 단순화',
      '디자인 시스템: 디자이너와 협업해 디자인 토큰 체계 정립, 여러 서비스에서 재사용 가능한 컴포넌트 패키지 개발',
      '보안 강화: 사용자 권한 기반 메타데이터 처리 및 Route Guard로 무단 접근 차단',
      '운영 비용 절감: Next.js Route Handler로 레거시 서버 API를 대체해 백엔드 서버 운영 비용 절감',
      '사용자 경험: ErrorBoundary와 Fallback UI로 앱 크래시 방지, URL 쿼리스트링으로 검색 결과 공유 기능 개발',
    ],
  },
  {
    id: 2,
    company: '위즈아이 (구 환경과학기술)',
    from: '2020-07-13',
    to: '2022-03-04',
    position: '풀스택 개발자',
    achievements: [
      'API 최적화: GraphQL API로 필요한 데이터만 선택적으로 요청해 API 응답 시간 40% 단축',
      '데이터 이관 자동화: Python 기반 ETL 파이프라인과 Cron 스케줄링으로 폐쇄망 환경 데이터 이관 자동화',
      '배포 자동화: Github Actions로 CI/CD 워크플로우 구축해 배포 자동화',
      '폐쇄망 솔루션: 폐쇄망 환경에서 인터넷 연결 없이 동작하는 커스텀 지도 발행 시스템 구축',
      'DB 성능 튜닝: 데이터베이스 인덱싱, 쿼리 튜닝, 페이지네이션으로 데이터 처리 성능 최적화',
      '풀스택 개발: 프론트엔드부터 백엔드, 서버 배포, DB 관리까지 웹 개발 전반 담당',
      '공공기관 프로젝트: 미세먼지 모니터링, 날씨 데이터 시각화 등 공공기관 프로젝트 다수 수행',
      '제한 환경 개발: 외부 접근이 제한된 폐쇄망에서 직접 시스템에 접근해 개발 및 운영',
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
    <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 py-8 lg:px-8 lg:py-16" id="careers" ref={ref}>
      <div className={`w-full max-w-4xl transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      >
        <h1 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Careers</h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-12">
            {careers.map((career, i) => (
              <div
                className={`relative transition-all duration-700 ease-out ${
                  i < visibleItems ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                key={career.id}
                style={{
                  transitionDelay: `${i * 200}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 lg:left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />

                {/* Content Card */}
                <div className="ml-12 lg:ml-20">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                    {/* Company Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center gap-3 mb-3 lg:mb-0">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-lg lg:text-xl font-bold text-black dark:text-white">
                            {career.company}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{career.position}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{formatPeriod(career.from, career.to)}</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                          {calculateDuration(career.from, career.to)}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <h4 className="font-semibold text-black dark:text-white">주요 성과</h4>
                      </div>

                      <div className="space-y-3">
                        {career.achievements.map((achievement, j) => (
                          <div
                            className="flex items-start gap-3"
                            key={j}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
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
