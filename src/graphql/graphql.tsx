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

export type Carrier = {
  __typename?: 'Carrier';
  groupName?: Maybe<Scalars['String']>;
  list: Array<CarrierItem>;
};

export type CarrierItem = {
  __typename?: 'CarrierItem';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  endDate: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['String'];
  techList: Array<Logo>;
};

export enum Logo {
  AntDesign = 'AntDesign',
  ApacheTomcat = 'ApacheTomcat',
  ApolloClient = 'ApolloClient',
  Docker = 'Docker',
  Java = 'Java',
  MUi = 'MUi',
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
  getResume: Resume;
};

export type Resume = {
  __typename?: 'Resume';
  github?: Maybe<Scalars['String']>;
  resumeList: Array<ResumeItem>;
  title: Scalars['String'];
};

export type ResumeItem = {
  __typename?: 'ResumeItem';
  carrierList: Array<Carrier>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  logo?: Maybe<StaticImageData>;
  name: Scalars['String'];
  startDate: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type StaticImageData = {
  __typename?: 'StaticImageData';
  alt: Scalars['String'];
  height: Scalars['Int'];
  src: Scalars['String'];
  width: Scalars['Int'];
};

export type ResumeQueryVariables = Exact<{ [key: string]: never }>;

export type ResumeQuery = {
  __typename?: 'Query';
  resume: {
    __typename?: 'Resume';
    title: string;
    github?: string | null;
    resumeList: Array<{
      __typename?: 'ResumeItem';
      name: string;
      startDate: string;
      endDate?: string | null;
      website?: string | null;
      description?: string | null;
      logo?: { __typename?: 'StaticImageData'; src: string; alt: string; width: number; height: number } | null;
      carrierList: Array<{
        __typename?: 'Carrier';
        groupName?: string | null;
        list: Array<{ __typename?: 'CarrierItem'; name: string; completed: boolean; startDate: string; endDate: string; techList: Array<Logo>; description: string }>;
      }>;
    }>;
  };
};
