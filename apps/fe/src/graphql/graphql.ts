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
};

export type Career = {
  __typename?: 'Career';
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']['output']>;
  /** 수행한 프로젝트 경력 */
  list: Array<CareerItem>;
};

export type CareerItem = {
  __typename?: 'CareerItem';
  /** 경력 ID */
  careerId: Scalars['String']['output'];
  /** 프로젝트 진행 중 여부 */
  completed: Scalars['Boolean']['output'];
  /** 프로젝트 설명 (성과/결과) */
  description: Scalars['String']['output'];
  /** 프로젝트 종료월 (진행중일 경우 null) */
  endDate?: Maybe<Scalars['String']['output']>;
  /** 프로젝트 이름 */
  name: Scalars['String']['output'];
  /** 프로젝트 시작월 */
  startDate: Scalars['String']['output'];
  /** 프로젝트에 쓰인 기술 태그 목록 */
  techList: Array<TechLogo>;
};

export type Company = {
  __typename?: 'Company';
  /** 회사 경력 */
  careers: Array<Career>;
  /** 회사 ID */
  companyId: Scalars['String']['output'];
  /** 회사 이름 */
  companyName: Scalars['String']['output'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['String']['output']>;
  /** 회사 로고 */
  logo?: Maybe<ImageMetadata>;
  /** 입사일 */
  startDate: Scalars['String']['output'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']['output']>;
};

export type ImageMetadata = {
  __typename?: 'ImageMetadata';
  /** 이미지 alt */
  alt: Scalars['String']['output'];
  /** 이미지 height */
  height: Scalars['Int']['output'];
  /** 로고 ID */
  logoId: Scalars['String']['output'];
  /** 이미지 src (url) */
  src: Scalars['String']['output'];
  /** 이미지 width */
  width: Scalars['Int']['output'];
};

export type ImageMetadataInput = {
  /** 이미지 alt */
  alt: Scalars['String']['input'];
  /** 이미지 height */
  height: Scalars['Int']['input'];
  /** 로고 ID */
  logoId: Scalars['String']['input'];
  /** 이미지 src (url) */
  src: Scalars['String']['input'];
  /** 이미지 width */
  width: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Set admin user (in local only) */
  Admin_update: Scalars['Boolean']['output'];
  /** 이력서 내 회사 정보 수정 */
  Resume_updateCompanyInfo: UpdateCompanyPayload;
  /** 이력서 내 회사 로고 메타데이터 수정 */
  Resume_updateCompanyLogo: ImageMetadata;
  /** 이력서 제목, Github 주소 수정 */
  Resume_updateInfo: UpdateInfoPayload;
  /** 로그인 */
  signIn: UserPayload;
  /** 로그아웃 */
  signOut: UserPayload;
};

export type MutationAdmin_UpdateArgs = {
  uid: Scalars['String']['input'];
};

export type MutationResume_UpdateCompanyInfoArgs = {
  input: UpdateCompanyInput;
};

export type MutationResume_UpdateCompanyLogoArgs = {
  input: ImageMetadataInput;
};

export type MutationResume_UpdateInfoArgs = {
  input: UpdateInfoInput;
};

export type MutationSignInArgs = {
  email: Scalars['String']['input'];
};

export type MutationSignOutArgs = {
  email: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** 이력서 */
  Resume_get: Resume;
};

export type Resume = {
  __typename?: 'Resume';
  /** Github 주소 */
  github?: Maybe<Scalars['String']['output']>;
  /** 총 경력 리스트 */
  history: Array<Company>;
  /** 이력서 제목 */
  title: Scalars['String']['output'];
};

/** 프레임워크, 라이브러리 로고 */
export enum TechLogo {
  /** Ant Design */
  AntDesign = 'AntDesign',
  /** Apache Tomcat */
  ApacheTomcat = 'ApacheTomcat',
  /** Apollo Client */
  ApolloClient = 'ApolloClient',
  /** Docker */
  Docker = 'Docker',
  /** Java */
  Java = 'Java',
  /** Material UI */
  MaterialUi = 'MaterialUI',
  /** MongoDB */
  MongoDb = 'MongoDB',
  /** MySQL Database */
  MySql = 'MySQL',
  /** Next.js */
  NextJs = 'NextJS',
  /** Nginx */
  Nginx = 'Nginx',
  /** Oracle Database */
  Oracle = 'Oracle',
  /** PostgreSQL Database */
  PostgreSql = 'PostgreSQL',
  /** Python */
  Python = 'Python',
  /** React */
  React = 'React',
  /** React Native */
  ReactNative = 'ReactNative',
  /** Redux */
  Redux = 'Redux',
  /** Sass (SCSS) */
  Sass = 'Sass',
  /** Spring MVC */
  Spring = 'Spring',
  /** Spring Boot */
  SpringBoot = 'SpringBoot',
  /** Storybook */
  Storybook = 'Storybook',
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
  companyId: Scalars['String']['input'];
  /** 회사 이름 */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** 회사에 대한 간단한 설명 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 퇴사일 */
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** 입사일 */
  startDate?: InputMaybe<Scalars['String']['input']>;
  /** 회사 홈페이지 주소 */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  /** 회사 ID */
  companyId: Scalars['String']['output'];
  /** 회사 이름 */
  companyName: Scalars['String']['output'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']['output']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['String']['output']>;
  /** 회사 로고 */
  logo?: Maybe<ImageMetadata>;
  /** 입사일 */
  startDate: Scalars['String']['output'];
  /** 퇴사일 */
  website?: Maybe<Scalars['String']['output']>;
};

export type UpdateInfoInput = {
  /** Github 주소 */
  github?: InputMaybe<Scalars['String']['input']>;
  /** 이력서 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInfoPayload = {
  __typename?: 'UpdateInfoPayload';
  /** Github 주소 */
  github?: Maybe<Scalars['String']['output']>;
  /** 이력서 제목 */
  title: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** 이메일 */
  email: Scalars['String']['output'];
  /** 로그인 상태 여부 */
  isLogged: Scalars['Boolean']['output'];
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type SignInMutation = { __typename?: 'Mutation'; signIn: { __typename?: 'UserPayload'; email: string; isLogged: boolean } };

export type SignOutMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type SignOutMutation = { __typename?: 'Mutation'; signOut: { __typename?: 'UserPayload'; email: string; isLogged: boolean } };

export type ResumeQueryVariables = Exact<{ [key: string]: never }>;

export type ResumeQuery = {
  __typename?: 'Query';
  resume: {
    __typename?: 'Resume';
    title: string;
    github?: string | null;
    history: Array<{
      __typename?: 'Company';
      companyName: string;
      startDate: string;
      endDate?: string | null;
      website?: string | null;
      description?: string | null;
      logo?: { __typename?: 'ImageMetadata'; src: string; alt: string; width: number; height: number } | null;
      careers: Array<{
        __typename?: 'Career';
        groupName?: string | null;
        list: Array<{ __typename?: 'CareerItem'; name: string; completed: boolean; startDate: string; endDate?: string | null; techList: Array<TechLogo>; description: string }>;
      }>;
    }>;
  };
};
