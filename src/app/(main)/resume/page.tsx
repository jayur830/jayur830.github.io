'use client';

import { useEffect, useRef, useState } from 'react';

import careerRawData from './_assets/data.json';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
};

const calculateDuration = (from: string, to: string) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const diffTime = Math.abs(toDate.getTime() - fromDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const months = Math.round(diffDays / 30);
  return `${months}개월`;
};

const careerData = careerRawData.map((company) => ({
  company: company.title,
  url: company.url,
  position: company.position,
  period: `${formatDate(company.from)} ~ ${formatDate(company.to)}`,
  duration: calculateDuration(company.from, company.to),
  description: company.description,
  projects: company.projects.map((project) => ({
    name: project.title,
    period: `${formatDate(project.from)} ~ ${formatDate(project.to)}`,
    duration: calculateDuration(project.from, project.to),
    techStack: project.skills,
    summary: project.summary,
    achievements: project.achievements,
  })),
}));

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 한 번 나타나면 observer 해제
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible] as const;
};

interface ProjectProps {
  project: typeof careerData[0]['projects'][0];
  projectIndex: number;
  isCompanyVisible: boolean;
}

const Project = ({ project, projectIndex, isCompanyVisible }: ProjectProps) => {
  const [projectRef, isProjectVisible] = useIntersectionObserver();

  return (
    <div
      className={`relative pl-12 group transition-all duration-500 transform ${
        isProjectVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
      }`}
      ref={projectRef}
      style={{
        transitionDelay: isCompanyVisible ? `${projectIndex * 150}ms` : '0ms',
      }}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[10.5px] w-3 h-3 bg-white dark:bg-black rounded-full border-3 border-black dark:border-white group-hover:border-gray-700 dark:group-hover:border-gray-300 transition-colors" />

      {/* Project Content */}
      <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-200">
        {/* Project Title & Period */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-black dark:text-white">{project.name}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">{project.period} ({project.duration})</span>
        </div>

        {/* Project Summary */}
        <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">{project.summary}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, techIndex) => (
            <span
              className="px-3 py-1 bg-white dark:bg-black text-black dark:text-white text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
              key={techIndex}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-2">
          {project.achievements.map((
            achievement,
            achievementIndex,
          ) => (
            <div className="flex items-start gap-3" key={achievementIndex}>
              <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CareerProps {
  career: typeof careerData[0];
  isLastCompany: boolean;
}

const Career = ({ career, isLastCompany }: CareerProps) => {
  const [companyRef, isCompanyVisible] = useIntersectionObserver();

  return (
    <div>
      {/* Company Card */}
      <div
        className={`bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg hover:border-black dark:hover:border-white transition-all duration-700 overflow-hidden transform ${
          isCompanyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        ref={companyRef}
      >
        {/* Company Header */}
        <div className="bg-black dark:bg-white px-8 py-6 border-b border-gray-300 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white dark:text-black">{career.company}</h2>
                <span className="px-3 py-1 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 text-sm rounded-md">
                  {career.position}
                </span>
              </div>
              <div className="text-gray-300 dark:text-gray-600 text-sm mb-3 font-mono">
                {career.period} ({career.duration})
              </div>
              <p className="text-gray-200 dark:text-gray-700 text-sm leading-relaxed">
                {career.description}
              </p>
            </div>
            {career.url && (
              <a
                className="p-2 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-600 transition-colors flex-shrink-0 ml-4"
                href={career.url}
                rel="noopener noreferrer"
                target="_blank"
                title="회사 홈페이지 방문"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Projects Timeline */}
        <div className="p-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-400 dark:bg-gray-600" />

            <div className="space-y-8">
              {career.projects.map((project, projectIndex) => (
                <Project
                  isCompanyVisible={isCompanyVisible}
                  key={projectIndex}
                  project={project}
                  projectIndex={projectIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider between companies */}
      {!isLastCompany && (
        <div className="flex items-center justify-center my-12">
          <div className="flex-grow border-t border-gray-400 dark:border-gray-600" />
          <div className="mx-4">
            <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
          </div>
          <div className="flex-grow border-t border-gray-400 dark:border-gray-600" />
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">
      {/* Career Cards */}
      <div className="space-y-12">
        {careerData.map((career, companyIndex) => (
          <Career
            career={career}
            isLastCompany={companyIndex === careerData.length - 1}
            key={companyIndex}
          />
        ))}
      </div>
    </div>
  );
}
