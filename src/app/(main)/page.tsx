import { Button, Divider, Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default async function Page() {
  // const data = await client.query<ResumeQuery, ResumeQueryVariables>({ query: GET_RESUME_QUERY, variables: { userId: process.env.UID } });

  /** @todo api로 fetch, 백엔드에 api, DB 설계해야 함 */
  const data = {
    email: 'jayur830@naver.com',
    githubUser: 'jayur830',
    blog: 'https://www.notion.so/Frontend-e558b19631644f8b94ff66983cf5b25b?pvs=4',
    resume: '/resume',
    careerList: [
      {
        companyName: '엔라이튼',
        position: '프론트엔드 개발자',
        from: '2022-03',
        to: null,
        description: `엔라이튼은 재생 에너지를 쉽게 생산/소비할 수 있도록 도와주는 IT 금융 자문 회사입니다. 저는 여기서 기존에 운영중이었던 서비스를 개발/리팩토링하거나 개발된 서비스의 프레임워크를 다른 프레임워크로 전환하는 일을 하였습니다. 필요에 따라 팀에 필요한 보일러플레이트, 모듈, 번들러 플러그인 등을 만들어 팀에 기여하였습니다.

- 태양광 발전소 통합 관리 서비스 프론트엔드 개발
- 프론트엔드 인원이 축소되어 서비스 내 모든 개발 업무를 혼자서 모두 소화
- UX 개선 및 지속적인 리팩토링/유지보수, 버그 및 사용성 문의 매월 10%씩 감소
- 고객의 Needs에 맞는 신규 페이지 및 기능 개발, MAU 평균 3%씩 증가
- 레거시 제거, 개발 프레임워크 마이그레이션
- 수동적이고 반복적인 작업 주도적으로 자동화 체계 구축 - 배포 자동화, 릴리즈, 코드 스니펫 등`,
      },
      {
        companyName: '위즈아이 (구 환경과학기술)',
        position: '웹 개발자',
        from: '2020-07',
        to: '2022-03',
        description: `일정 주기로 수집된 데이터를 차트, 지도 등을 통해 시각화하는 웹 개발 업무를 주로 진행하였습니다.

- Vue 기반 프론트엔드, Spring Boot, JPA 기반 백엔드 개발
- 통계 쿼리셋 배치 스케줄링
- 레거시 JSP 웹 개발/유지보수, 성능 개선
- 배포 자동화, 무중단 배포 파이프라인 구축을 통한 팀 내 개발 생산성 향상`,
      },
    ],
    contributionList: [
      {
        category: 'Open Source',
        list: [
          {
            title: 'Re-Rendering을 막는 React Context API 라이브러리',
            description: `  - Github: [https://github.com/jayur830/react-constate](https://github.com/jayur830/react-constate)
  - NPM: [https://www.npmjs.com/package/react-constate](https://www.npmjs.com/package/react-constate)`,
          },
        ],
      },
      {
        category: 'Bug Report',
        list: [
          {
            title: 'iOS에서 `expo-datadog` Expo Config Plugin 추가한 후 빌드 시 에러 발생',
            description: `  - Issue: https://github.com/DataDog/expo-datadog/issues/31
  - PR: https://github.com/DataDog/datadog-ci/pull/1246`,
          },
        ],
      },
    ],
    projects: [
      {
        title: 'OAuth 인증 서버 애플리케이션',
        from: '2023-12',
        to: '2023-12',
        description: `토이 프로젝트 진행 시 OAuth 인증을 Firebase 기반으로 주로 진행하는데, Firebase에서 제공하지 않는 업체(카카오, 네이버 등)에 대해 인증을 처리하기 위한 기능들을 모아놓은 API입니다.

- 개발 인원: 1명
- 사용 기술
  - Backend: Nest.js 10
  - Cloud: Google Cloud Platform, Firebase
- 주요 개발 기능
  - 카카오, 네이버 로그인에 대해 Firebase Custom Token 생성
  - 유저의 Custom Claims 조회/수정
- Github: [https://github.com/jayur830/backend-monorepo-lerna/tree/develop/apps/auth-api](https://github.com/jayur830/backend-monorepo-lerna/tree/develop/apps/auth-api)`,
      },
      {
        title: 'Github 페이지',
        from: '2023-01',
        to: null,
        description: `저를 나타내는 Github 페이지입니다. 저의 이력서 페이지와 이력서를 수정할 수 있는 Admin 페이지, CRUD API로 구성했습니다.

- 개발 인원: 1명
- 사용 기술
  - Frontend: TypeScript, Next.js, Apollo Client, Material UI, React Hook Form, Zustand
  - Backend: Nest.js 10, MySQL 8
  - Deployment: Github Actions
  - Cloud: Google Cloud Platform, Firebase
- 주요 개발 기능
  - Frontend
    - 사용자의 눈의 피로도를 위해 다크모드 기능 추가
    - 개발 경력을 나타내는 이력서 페이지 개발
    - Admin 페이지 진입을 위한 Github, Google 로그인 페이지 개발
  - Backend
    - 프론트엔드에서의 API 재사용을 위해 GraphQL API로 개발
    - Firebase 인증을 이용하여 \`accessToken\`을 체크하고 로그인한 유저가 유효한지 체크하는 가드(Guard) 구현
    - Google Cloud Run과 Cloud Build을 통한 CI 자동화
- URL: [https://jayur830.github.io/resume](https://jayur830.github.io/resume)
- Github
  - Frontend: [https://github.com/jayur830/jayur830.github.io](https://github.com/jayur830/jayur830.github.io)
  - Backend: [https://github.com/jayur830/backend-monorepo-lerna/tree/develop/apps/resume-api](https://github.com/jayur830/backend-monorepo-lerna/tree/develop/apps/resume-api)`,
      },
    ],
    techList: [
      {
        title: 'Language',
        list: ['Java', 'JavaScript', 'TypeScript'],
      },
      {
        title: 'Frontend',
        list: ['Next.js', 'Sass', 'Material UI', 'Ant Design', 'Redux', 'Apollo Client'],
      },
      {
        title: 'Backend',
        list: ['Spring Boot', 'JPA', 'Nest.js', 'TypeORM'],
      },
      {
        title: 'Database',
        list: ['MySQL'],
      },
      {
        title: 'Cross Platform',
        list: ['React Native', 'Expo'],
      },
      {
        title: 'Deployment',
        list: ['Docker', 'Google Cloud Platform', 'Firebase'],
      },
      {
        title: 'VCS',
        list: ['Git'],
      },
      {
        title: 'Co-work',
        list: ['Jira', 'Figma'],
      },
    ],
  };

  /** @todo 디자인 다시 해야 함 */
  return (
    <Grid maxWidth={1440} marginX="auto" paddingX={3}>
      <Grid paddingY={2}>
        <Typography variant="h5" fontWeight={600} marginBottom={2}>
          About
        </Typography>
        <ReactMarkdown className="markdown">
          {`Email: [${data.email}](mailto:${data.email})

Github: [github.com/${data.githubUser}](https://github.com/${data.githubUser})

Blog: [${data.blog}](${data.blog})`}
        </ReactMarkdown>
        <Grid marginTop={2}>
          <Link href="/resume">
            <Button variant="outlined">이력서</Button>
          </Link>
        </Grid>
      </Grid>
      <Divider />
      <Grid container direction="column" gap={2} paddingY={2}>
        <Typography variant="h5" fontWeight={600} marginBottom={2}>
          Career
        </Typography>
        {data.careerList.map(({ companyName, position, from, to, description }, i) => (
          <Grid key={i}>
            <Typography variant="subtitle1">{companyName}</Typography>
            <Typography variant="caption" color="grey.500">
              {position} ({dayjs(from).format('YYYY년 M월')} ~ {to ? dayjs(to).format('YYYY년 M월') : '현재'})
            </Typography>
            <ReactMarkdown className="markdown">{description}</ReactMarkdown>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container direction="column" gap={1} paddingY={2}>
        <Typography variant="h5" fontWeight={600} marginBottom={2}>
          Contribution
        </Typography>
        {data.contributionList.map(({ category, list }, i) => (
          <Grid key={i}>
            <Typography>{category}</Typography>
            {list.map(({ title, description }, j) => (
              <ReactMarkdown key={j} className="markdown">
                {`- ${title}\n${description}`}
              </ReactMarkdown>
            ))}
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid container direction="column" gap={1} paddingY={2}>
        <Typography variant="h5" fontWeight={600} marginBottom={2}>
          Projects
        </Typography>
        {data.projects.map(({ title, from, to, description }, i) => (
          <Grid key={i}>
            <Typography>{title}</Typography>
            <Typography variant="caption" color="grey.500">
              {dayjs(from).format('YYYY년 M월')} ~ {to ? dayjs(to).format('YYYY년 M월') : '진행 중'}
            </Typography>
            <ReactMarkdown className="markdown">{description}</ReactMarkdown>
          </Grid>
        ))}
      </Grid>
      <Divider />
      <Grid paddingY={2}>
        <Typography variant="h5" fontWeight={600} marginBottom={2}>
          Tech
        </Typography>
        {data.techList.map(({ title, list }, i) => (
          <Grid key={i} marginTop={i > 0 ? 1 : 0}>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography>{list.join(', ')}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
