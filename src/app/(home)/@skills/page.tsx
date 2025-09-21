'use client';

import { BarChart3, Code, Database, GitBranch, Globe, Server, TestTube, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import data from '@/assets/data/ko.json';

const skillIcons = {
  frontend: Globe,
  backend: Server,
  database: Database,
  devops: Code,
  testing: TestTube,
  monitoring: BarChart3,
  vcs: GitBranch,
  cowork: Users,
};

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 pb-8 pt-25 lg:px-8 lg:pt-[132px] lg:pb-16" id="skills" ref={ref}>
      <div className={`w-full max-w-[1440px] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
          {data.skills.map(({ key, title, skills }, i) => {
            const Icon = key in skillIcons ? skillIcons[key as keyof typeof skillIcons] : () => <></>;
            return (
              <div
                className={`bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-5 lg:p-8 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                key={title}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Icon />
                  <h2 className="text-2xl font-semibold text-black dark:text-white">{title}</h2>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIndex) => (
                    <span
                      className={`px-4 py-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-sm font-medium rounded-full border border-gray-200 dark:border-gray-800 transition-all duration-500 ${
                        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      key={skill.name}
                      style={{
                        transitionDelay: `${(i * 200) + (skillIndex * 50) + 300}ms`,
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
