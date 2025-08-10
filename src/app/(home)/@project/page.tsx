import { Grid, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import ReactMarkdown from 'react-markdown';

const data = [
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
];

export default function Project() {
  return (
    <Grid container justifyContent="center" height="calc(100vh - 60px)">
      <Grid container direction="column" justifyContent="center" alignItems="center" maxWidth={1440} paddingX={3}>
        <Typography variant="h1" fontSize={{ xs: 32, md: 48 }} color="common.white" marginBottom={5}>
          Project
        </Typography>
        <Stack maxWidth={800}>
          {data.map(({ title, from, to, description }, i) => (
            <Grid
              key={i}
              sx={{
                '& .markdown *:not(code)': {
                  color: 'common.white',
                },
              }}
            >
              <Typography color="common.white">{title}</Typography>
              <Typography variant="caption" color="common.white">
                {dayjs(from).format('YYYY년 M월')} ~ {to ? dayjs(to).format('YYYY년 M월') : '진행 중'}
              </Typography>
              <ReactMarkdown className="markdown">{description}</ReactMarkdown>
            </Grid>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
