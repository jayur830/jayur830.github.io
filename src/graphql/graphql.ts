export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
  Month: { input: any; output: any };
  Year: { input: any; output: any };
};

export type Company = {
  __typename?: 'Company';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 회사 이름 */
  companyName: Scalars['String']['output'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 회사 로고 */
  logo?: Maybe<Image>;
  /** 프로젝트 이력 리스트 */
  projectList: Array<ProjectGroup>;
  /** 입사일 */
  startDate: Scalars['Month']['output'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']['output']>;
};

export type CreateCompanyInput = {
  /** 회사 이름 */
  companyName: Scalars['String']['input'];
  /** 회사에 대한 간단한 설명 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 퇴사일 */
  endDate?: InputMaybe<Scalars['Month']['input']>;
  /** 회사 로고 */
  logo?: InputMaybe<CreateImageInput>;
  /** 입사일 */
  startDate: Scalars['Month']['input'];
  /** 회사 홈페이지 주소 */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCompanyPayload = {
  __typename?: 'CreateCompanyPayload';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 회사 이름 */
  companyName: Scalars['String']['output'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 회사 로고 */
  logo?: Maybe<Image>;
  /** 입사일 */
  startDate: Scalars['Month']['output'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']['output']>;
};

export type CreateImageInput = {
  /** 이미지 alt */
  alt: Scalars['String']['input'];
  /** 이미지 height */
  height: Scalars['Int']['input'];
  /** 이미지 src (url) */
  src: Scalars['String']['input'];
  /** 이미지 width */
  width: Scalars['Int']['input'];
};

export type CreateProjectInput = {
  /** 회사 ID */
  companyId: Scalars['Float']['input'];
  /** 프로젝트 설명 MARKDOWN (성과/결과) */
  description: Scalars['String']['input'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: InputMaybe<Scalars['Month']['input']>;
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: InputMaybe<Scalars['String']['input']>;
  /** 프로젝트 시작월 */
  startDate: Scalars['Month']['input'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<TechLogo>;
  /** 프로젝트 이름 */
  title: Scalars['String']['input'];
};

export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 프로젝트 설명 MARKDOWN (성과/결과) */
  description: Scalars['String']['output'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']['output']>;
  /** 프로젝트 ID */
  projectId: Scalars['Float']['output'];
  /** 프로젝트 시작월 */
  startDate: Scalars['Month']['output'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<TechLogo>;
  /** 프로젝트 이름 */
  title: Scalars['String']['output'];
};

export type CreateResumeInput = {
  /** 블로그 주소 */
  blog?: InputMaybe<Scalars['String']['input']>;
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Github 주소 */
  github?: InputMaybe<Scalars['String']['input']>;
  /** 이력서 제목 */
  title: Scalars['String']['input'];
};

export type CreateResumePayload = {
  __typename?: 'CreateResumePayload';
  /** 블로그 주소 */
  blog?: Maybe<Scalars['String']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** Github 주소 */
  github?: Maybe<Scalars['String']['output']>;
  /** 이력서 제목 */
  title: Scalars['String']['output'];
};

export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 회사 이름 */
  companyName: Scalars['String']['output'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 회사 로고 */
  logo?: Maybe<Image>;
  /** 입사일 */
  startDate: Scalars['Month']['output'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']['output']>;
};

export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 프로젝트 설명 MARKDOWN (성과/결과) */
  description: Scalars['String']['output'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']['output']>;
  /** 프로젝트 ID */
  projectId: Scalars['Float']['output'];
  /** 프로젝트 시작월 */
  startDate: Scalars['Month']['output'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<TechLogo>;
  /** 프로젝트 이름 */
  title: Scalars['String']['output'];
};

export type Image = {
  __typename?: 'Image';
  /** 이미지 alt */
  alt: Scalars['String']['output'];
  /** 이미지 height */
  height: Scalars['Int']['output'];
  /** 이미지 src (url) */
  src: Scalars['String']['output'];
  /** 이미지 width */
  width: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 이력서 회사 정보 추가 */
  Company_create: CreateCompanyPayload;
  /** 이력서 회사 정보 삭제 */
  Company_delete: DeleteCompanyPayload;
  /** 이력서 회사 정보 수정 */
  Company_update: UpdateCompanyPayload;
  /** 이력서 프로젝트 이력 추가 */
  Project_create: CreateProjectPayload;
  /** 이력서 프로젝트 이력 삭제 */
  Project_delete: DeleteProjectPayload;
  /** 이력서 프로젝트 이력 수정 */
  Project_update: UpdateProjectPayload;
  /** 이력서 요약 정보 추가 */
  Resume_create: CreateResumePayload;
  /** 이력서 요약 정보 수정 */
  Resume_update: UpdateResumePayload;
};

export type MutationCompany_CreateArgs = {
  input: CreateCompanyInput;
};

export type MutationCompany_DeleteArgs = {
  companyId: Scalars['Int']['input'];
};

export type MutationCompany_UpdateArgs = {
  input: UpdateCompanyInput;
};

export type MutationProject_CreateArgs = {
  input: CreateProjectInput;
};

export type MutationProject_DeleteArgs = {
  projectId: Scalars['Int']['input'];
};

export type MutationProject_UpdateArgs = {
  input: UpdateProjectInput;
};

export type MutationResume_CreateArgs = {
  input: CreateResumeInput;
};

export type MutationResume_UpdateArgs = {
  input: UpdateResumeInput;
};

export type Project = {
  __typename?: 'Project';
  /** 프로젝트 설명 MARKDOWN (성과/결과) */
  description: Scalars['String']['output'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 프로젝트 ID */
  projectId: Scalars['Float']['output'];
  /** 프로젝트 시작월 */
  startDate: Scalars['Month']['output'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<TechLogo>;
  /** 프로젝트 이름 */
  title: Scalars['String']['output'];
};

export type ProjectGroup = {
  __typename?: 'ProjectGroup';
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']['output']>;
  /** 수행한 프로젝트 이력 */
  list: Array<Project>;
};

export type Query = {
  __typename?: 'Query';
  /** 이력서 */
  resume: Resume;
  /** 기술 스택 */
  skillList: Array<Skill>;
  /** 모든 기술 목록 조회 */
  techList: Array<TechLogo>;
};

export type QueryResumeArgs = {
  userId: Scalars['String']['input'];
};

export type QuerySkillListArgs = {
  userId: Scalars['String']['input'];
};

export type QueryTechListArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type Resume = {
  __typename?: 'Resume';
  /** 블로그 주소 */
  blog?: Maybe<Scalars['String']['output']>;
  /** 회사 경력 리스트 */
  companyList: Array<Company>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** Github 주소 */
  github?: Maybe<Scalars['String']['output']>;
  /** 이력서 제목 */
  title: Scalars['String']['output'];
};

export type Skill = {
  __typename?: 'Skill';
  /** 기술 스택 목록 */
  list: Array<TechLogo>;
  /** 카테고리 (lang: 프로그래밍 언어, fe: 프론트엔드, be: 백엔드, tool: 툴, db: 데이터베이스, infra: 인프라, cloud: 클라우드 서비스, cowork: 협업 툴) */
  type: Scalars['String']['output'];
};

/** 프레임워크, 라이브러리 로고 */
export enum TechLogo {
  /** Angular */
  Angular = 'Angular',
  /** Ant Design */
  AntDesign = 'AntDesign',
  /** Apache Tomcat */
  ApacheTomcat = 'ApacheTomcat',
  /** Apollo Client */
  ApolloClient = 'ApolloClient',
  /** C Language */
  C = 'C',
  /** CSS3 */
  Css3 = 'CSS3',
  /** C++ Language */
  Cpp = 'Cpp',
  /** Django */
  Django = 'Django',
  /** Docker */
  Docker = 'Docker',
  /** ECharts.js */
  ECharts = 'ECharts',
  /** Expo */
  Expo = 'Expo',
  /** Figma */
  Figma = 'Figma',
  /** Firebase SDK */
  Firebase = 'Firebase',
  /** Flask */
  Flask = 'Flask',
  /** Github Actions */
  GithubActions = 'GithubActions',
  /** Grails */
  Grails = 'Grails',
  /** HTML5 */
  Html5 = 'HTML5',
  /** Hibernate */
  Hibernate = 'Hibernate',
  /** Java */
  Java = 'Java',
  /** JavaScript */
  JavaScript = 'JavaScript',
  /** Jira */
  Jira = 'Jira',
  /** Kubernetes */
  Kubernetes = 'Kubernetes',
  /** MariaDB Database */
  MariaDb = 'MariaDB',
  /** Material UI */
  MaterialUi = 'MaterialUI',
  /** MongoDB */
  MongoDb = 'MongoDB',
  /** MS-SQL Database */
  Mssql = 'Mssql',
  /** MySQL Database */
  MySql = 'MySQL',
  /** Nest.js */
  NestJs = 'NestJS',
  /** Next.js */
  NextJs = 'NextJS',
  /** Nginx */
  Nginx = 'Nginx',
  /** NPM */
  Npm = 'Npm',
  /** Oracle Database */
  Oracle = 'Oracle',
  /** PNPM */
  Pnpm = 'Pnpm',
  /** PostgreSQL Database */
  PostgreSql = 'PostgreSQL',
  /** Python */
  Python = 'Python',
  /** React */
  React = 'React',
  /** React Native */
  ReactNative = 'ReactNative',
  /** React Query */
  ReactQuery = 'ReactQuery',
  /** Recoil */
  Recoil = 'Recoil',
  /** Redux */
  Redux = 'Redux',
  /** React Relay */
  Relay = 'Relay',
  /** RTK Query */
  RtkQuery = 'RtkQuery',
  /** SWR */
  Swr = 'SWR',
  /** Sass (SCSS) */
  Sass = 'Sass',
  /** Spring MVC */
  Spring = 'Spring',
  /** Spring Boot */
  SpringBoot = 'SpringBoot',
  /** Storybook */
  Storybook = 'Storybook',
  /** TypeORM */
  TypeOrm = 'TypeORM',
  /** TypeScript */
  TypeScript = 'TypeScript',
  /** Vite */
  Vite = 'Vite',
  /** Vue.js */
  Vue = 'Vue',
  /** Yarn */
  Yarn = 'Yarn',
}

export type UpdateCompanyInput = {
  /** 회사 ID */
  companyId: Scalars['Float']['input'];
  /** 회사 이름 */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** 회사에 대한 간단한 설명 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 퇴사일 */
  endDate?: InputMaybe<Scalars['Month']['input']>;
  /** 회사 로고 */
  logo?: InputMaybe<UpdateImageInput>;
  /** 입사일 */
  startDate?: InputMaybe<Scalars['Month']['input']>;
  /** 회사 홈페이지 주소 */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 회사 이름 */
  companyName: Scalars['String']['output'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 회사 로고 */
  logo?: Maybe<Image>;
  /** 입사일 */
  startDate: Scalars['Month']['output'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']['output']>;
};

export type UpdateImageInput = {
  /** 이미지 alt */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** 이미지 height */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** 이미지 src (url) */
  src?: InputMaybe<Scalars['String']['input']>;
  /** 이미지 width */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProjectInput = {
  /** 회사 ID */
  companyId: Scalars['Float']['input'];
  /** 프로젝트 설명 MARKDOWN (성과/결과) */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: InputMaybe<Scalars['Month']['input']>;
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: InputMaybe<Scalars['String']['input']>;
  /** 프로젝트 ID */
  projectId: Scalars['Float']['input'];
  /** 프로젝트 시작월 */
  startDate?: InputMaybe<Scalars['Month']['input']>;
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList?: InputMaybe<Array<TechLogo>>;
  /** 프로젝트 이름 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  /** 회사 ID */
  companyId: Scalars['Float']['output'];
  /** 프로젝트 설명 MARKDOWN (성과/결과) */
  description: Scalars['String']['output'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: Maybe<Scalars['Month']['output']>;
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']['output']>;
  /** 프로젝트 ID */
  projectId: Scalars['Float']['output'];
  /** 프로젝트 시작월 */
  startDate: Scalars['Month']['output'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<TechLogo>;
  /** 프로젝트 이름 */
  title: Scalars['String']['output'];
};

export type UpdateResumeInput = {
  /** 블로그 주소 */
  blog?: InputMaybe<Scalars['String']['input']>;
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Github 주소 */
  github?: InputMaybe<Scalars['String']['input']>;
  /** 이력서 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateResumePayload = {
  __typename?: 'UpdateResumePayload';
  /** 블로그 주소 */
  blog?: Maybe<Scalars['String']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** Github 주소 */
  github?: Maybe<Scalars['String']['output']>;
  /** 이력서 제목 */
  title: Scalars['String']['output'];
};

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;

export type UpdateCompanyMutation = {
  __typename?: 'Mutation';
  updated: {
    __typename?: 'UpdateCompanyPayload';
    companyId: number;
    companyName: string;
    startDate: any;
    endDate?: any | null;
    website?: string | null;
    description?: string | null;
    logo?: { __typename?: 'Image'; src: string; alt: string; width: number; height: number } | null;
  };
};

export type UpdateResumeMutationVariables = Exact<{
  input: UpdateResumeInput;
}>;

export type UpdateResumeMutation = { __typename?: 'Mutation'; updated: { __typename?: 'UpdateResumePayload'; title: string; github?: string | null } };

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateProjectInput;
}>;

export type UpdateProjectMutation = {
  __typename?: 'Mutation';
  updated: {
    __typename?: 'UpdateProjectPayload';
    projectId: number;
    companyId: number;
    groupName?: string | null;
    title: string;
    startDate: any;
    endDate?: any | null;
    techList: Array<TechLogo>;
    description: string;
  };
};

export type ResumeQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;

export type ResumeQuery = {
  __typename?: 'Query';
  resume: {
    __typename?: 'Resume';
    title: string;
    github?: string | null;
    companyList: Array<{
      __typename?: 'Company';
      companyId: number;
      companyName: string;
      startDate: any;
      endDate?: any | null;
      website?: string | null;
      description?: string | null;
      logo?: { __typename?: 'Image'; src: string; alt: string; width: number; height: number } | null;
      projectList: Array<{
        __typename?: 'ProjectGroup';
        groupName?: string | null;
        list: Array<{ __typename?: 'Project'; projectId: number; title: string; startDate: any; endDate?: any | null; techList: Array<TechLogo>; description: string }>;
      }>;
    }>;
  };
};

export type GetTechListQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetTechListQuery = { __typename?: 'Query'; techList: Array<TechLogo> };
