'use client';

import type { LucideProps } from 'lucide-react';
import { BarChart3, Code, Database, GitBranch, Globe, Server, TestTube, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: ComponentType<LucideProps>;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'Redux' },
      { name: 'Redux Toolkit' },
      { name: 'Zustand' },
      { name: 'CSS Modules' },
      { name: 'Styled Components' },
      { name: 'Emotion' },
      { name: 'TailwindCSS' },
      { name: 'Material UI' },
      { name: 'Ant Design' },
      { name: 'Webpack' },
      { name: 'Rollup' },
      { name: 'Storybook' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js' },
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Python' },
      { name: 'REST' },
      { name: 'GraphQL' },
      { name: 'Apollo Server' },
      { name: 'JWT' },
      { name: 'OAuth2.0' },
      { name: 'Keycloak' },
      { name: 'NextAuth' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL' },
      { name: 'MariaDB' },
      { name: 'PostgreSQL' },
      { name: 'Oracle' },
      { name: 'MS SQL Server' },
      { name: 'MongoDB' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Code,
    skills: [
      { name: 'GitHub Actions' },
      { name: 'Jenkins' },
      { name: 'CircleCI' },
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Testing',
    icon: TestTube,
    skills: [
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Cypress' },
      { name: 'Selenium' },
    ],
  },
  {
    title: 'Monitoring',
    icon: BarChart3,
    skills: [
      { name: 'Datadog' },
      { name: 'Sentry' },
    ],
  },
  {
    title: 'VCS',
    icon: GitBranch,
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Co-work',
    icon: Users,
    skills: [
      { name: 'Figma' },
      { name: 'Jira' },
      { name: 'Notion' },
      { name: 'Slack' },
      { name: 'Google Meet' },
      { name: 'Confluence' },
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-8 py-16" id="skills">
      <div className={`w-full max-w-[1440px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">Skills & Technologies</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map(({ title, icon: Icon, skills }, i) => (
            <div
              className={`bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              key={title}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Icon className="w-6 h-6 text-black dark:text-white" />
                <h2 className="text-2xl font-semibold text-black dark:text-white">{title}</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <span
                    className={`px-4 py-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white text-sm font-medium rounded-full border border-gray-200 dark:border-gray-800 transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
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
          ))}
        </div>
      </div>
    </div>
  );
}
