import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Career = {
  __typename?: 'Career';
  /** 팀 또는 소속 서비스 이름 (없을 경우 null) */
  groupName?: Maybe<Scalars['String']>;
  /** 수행한 프로젝트 경력 */
  list: Array<CareerItem>;
};

export type CareerItem = {
  __typename?: 'CareerItem';
  /** 경력 ID */
  careerId: Scalars['String'];
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

export type Company = {
  __typename?: 'Company';
  /** 회사 경력 */
  careers: Array<Career>;
  /** 회사 ID */
  companyId: Scalars['String'];
  /** 회사 이름 */
  companyName: Scalars['String'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['String']>;
  /** 회사 로고 */
  logo?: Maybe<ImageMetadata>;
  /** 입사일 */
  startDate: Scalars['String'];
  /** 회사 홈페이지 주소 */
  website?: Maybe<Scalars['String']>;
};

export type ImageMetadata = {
  __typename?: 'ImageMetadata';
  /** 이미지 alt */
  alt: Scalars['String'];
  /** 이미지 height */
  height: Scalars['Int'];
  /** 로고 ID */
  logoId: Scalars['String'];
  /** 이미지 src (url) */
  src: Scalars['String'];
  /** 이미지 width */
  width: Scalars['Int'];
};

export type ImageMetadataInput = {
  /** 이미지 alt */
  alt: Scalars['String'];
  /** 이미지 height */
  height: Scalars['Int'];
  /** 로고 ID */
  logoId: Scalars['String'];
  /** 이미지 src (url) */
  src: Scalars['String'];
  /** 이미지 width */
  width: Scalars['Int'];
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

export type Mutation = {
  __typename?: 'Mutation';
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
  email: Scalars['String'];
};

export type MutationSignOutArgs = {
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** 이력서 */
  Resume_get: Resume;
};

export type Resume = {
  __typename?: 'Resume';
  /** Github 주소 */
  github?: Maybe<Scalars['String']>;
  /** 총 경력 리스트 */
  history: Array<Company>;
  /** 이력서 제목 */
  title: Scalars['String'];
};

export type UpdateCompanyInput = {
  /** 회사 ID */
  companyId: Scalars['String'];
  /** 회사 이름 */
  companyName?: InputMaybe<Scalars['String']>;
  /** 회사에 대한 간단한 설명 */
  description?: InputMaybe<Scalars['String']>;
  /** 퇴사일 */
  endDate?: InputMaybe<Scalars['String']>;
  /** 입사일 */
  startDate?: InputMaybe<Scalars['String']>;
  /** 회사 홈페이지 주소 */
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  /** 회사 ID */
  companyId: Scalars['String'];
  /** 회사 이름 */
  companyName: Scalars['String'];
  /** 회사에 대한 간단한 설명 */
  description?: Maybe<Scalars['String']>;
  /** 퇴사일 */
  endDate?: Maybe<Scalars['String']>;
  /** 회사 로고 */
  logo?: Maybe<ImageMetadata>;
  /** 입사일 */
  startDate: Scalars['String'];
  /** 퇴사일 */
  website?: Maybe<Scalars['String']>;
};

export type UpdateInfoInput = {
  /** Github 주소 */
  github?: InputMaybe<Scalars['String']>;
  /** 이력서 제목 */
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateInfoPayload = {
  __typename?: 'UpdateInfoPayload';
  /** Github 주소 */
  github?: Maybe<Scalars['String']>;
  /** 이력서 제목 */
  title: Scalars['String'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** 이메일 */
  email: Scalars['String'];
  /** 로그인 상태 여부 */
  isLogged: Scalars['Boolean'];
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
}>;

export type SignInMutation = { __typename?: 'Mutation'; signIn: { __typename?: 'UserPayload'; email: string; isLogged: boolean } };

export type SignOutMutationVariables = Exact<{
  email: Scalars['String'];
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
        list: Array<{ __typename?: 'CareerItem'; name: string; completed: boolean; startDate: string; endDate?: string | null; techList: Array<Logo>; description: string }>;
      }>;
    }>;
  };
};

export const SignInDocument = gql`
  mutation SignIn($email: String!) {
    signIn(email: $email) {
      email
      isLogged
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
  mutation SignOut($email: String!) {
    signOut(email: $email) {
      email
      isLogged
    }
  }
`;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
}
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const ResumeDocument = gql`
  query Resume {
    resume: Resume_get {
      title
      github
      history {
        companyName
        logo {
          src
          alt
          width
          height
        }
        startDate
        endDate
        website
        description
        careers {
          groupName
          list {
            name
            completed
            startDate
            endDate
            techList
            description
          }
        }
      }
    }
  }
`;

/**
 * __useResumeQuery__
 *
 * To run a query within a React component, call `useResumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useResumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResumeQuery({
 *   variables: {
 *   },
 * });
 */
export function useResumeQuery(baseOptions?: Apollo.QueryHookOptions<ResumeQuery, ResumeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ResumeQuery, ResumeQueryVariables>(ResumeDocument, options);
}
export function useResumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResumeQuery, ResumeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ResumeQuery, ResumeQueryVariables>(ResumeDocument, options);
}
export type ResumeQueryHookResult = ReturnType<typeof useResumeQuery>;
export type ResumeLazyQueryHookResult = ReturnType<typeof useResumeLazyQuery>;
export type ResumeQueryResult = Apollo.QueryResult<ResumeQuery, ResumeQueryVariables>;
