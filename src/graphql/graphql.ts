export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CareerItemVo = {
  __typename?: 'CareerItemVO';
  /** 프로젝트 진행 중 여부 */
  completed: Scalars['Boolean'];
  /** 프로젝트 설명 (성과/결과) */
  description: Scalars['String'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: Maybe<Scalars['String']>;
  /** 프로젝트 이름 */
  name: Scalars['String'];
  /** 프로젝트 시작월 */
  startDate: Scalars['String'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<Logo>;
};

export type CareerVo = {
  __typename?: 'CareerVO';
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']>;
  /** 수행한 프로젝트 경력 */
  list: Array<CareerItemVo>;
};

/** 프레임워크, 라이브러리 로고 */
export enum Logo {
  AntDesign = 'AntDesign',
  ApacheTomcat = 'ApacheTomcat',
  ApolloClient = 'ApolloClient',
  Docker = 'Docker',
  Java = 'Java',
  MaterialUi = 'MaterialUI',
  MongoDb = 'MongoDB',
  MySql = 'MySQL',
  NextJs = 'NextJS',
  Nginx = 'Nginx',
  Oracle = 'Oracle',
  PostgreSql = 'PostgreSQL',
  Python = 'Python',
  React = 'React',
  ReactNative = 'ReactNative',
  Redux = 'Redux',
  Sass = 'Sass',
  Spring = 'Spring',
  SpringBoot = 'SpringBoot',
  Storybook = 'Storybook',
  TypeScript = 'TypeScript',
  Vite = 'Vite',
  Vue = 'Vue',
  Yarn = 'Yarn',
}

export type Query = {
  __typename?: 'Query';
  Resume_get: ResumeVo;
};

export type ResumeItemVo = {
  __typename?: 'ResumeItemVO';
  /** 회사 경력 */
  careers: Array<CareerVo>;
  /** 회사 이름 */
  companyName: Scalars['String'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['String']>;
  /** 회사 로고 */
  logo?: Maybe<StaticImgDataVo>;
  /** 입사일 */
  startDate: Scalars['String'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']>;
};

export type ResumeVo = {
  __typename?: 'ResumeVO';
  /** Github 주소 */
  github?: Maybe<Scalars['String']>;
  /** 총 경력 리스트 */
  history?: Maybe<Array<ResumeItemVo>>;
  /** 이력서 제목 */
  title: Scalars['String'];
};

export type StaticImgDataVo = {
  __typename?: 'StaticImgDataVO';
  /** 이미지 alt */
  alt: Scalars['String'];
  /** 이미지 height */
  height: Scalars['Int'];
  /** 이미지 src (url) */
  src: Scalars['String'];
  /** 이미지 width */
  width: Scalars['Int'];
};

export type ResumeQueryVariables = Exact<{ [key: string]: never }>;

export type ResumeQuery = {
  __typename?: 'Query';
  resume: {
    __typename?: 'ResumeVO';
    title: string;
    github?: string | null;
    history?: Array<{
      __typename?: 'ResumeItemVO';
      companyName: string;
      startDate: string;
      endDate?: string | null;
      website?: string | null;
      description?: string | null;
      logo?: { __typename?: 'StaticImgDataVO'; src: string; alt: string; width: number; height: number } | null;
      careers: Array<{
        __typename?: 'CareerVO';
        groupName?: string | null;
        list: Array<{ __typename?: 'CareerItemVO'; name: string; completed: boolean; startDate: string; endDate?: string | null; techList: Array<Logo>; description: string }>;
      }>;
    }> | null;
  };
};
