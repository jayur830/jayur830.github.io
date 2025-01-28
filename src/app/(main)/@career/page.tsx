import { Divider, Grid, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import ReactMarkdown from 'react-markdown';

const data = [
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
];

export default function Career() {
  return (
    <Grid container justifyContent="center" height="calc(100vh - 60px)">
      <Grid container direction="column" justifyContent="center" alignItems="center" maxWidth={1440} paddingX={3}>
        <Typography variant="h1" fontSize={{ xs: 32, md: 48 }} color="common.white" marginBottom={5}>
          Career
        </Typography>
        <Stack divider={<Divider sx={{ opacity: 0.5, borderColor: 'common.white', marginY: 3 }} />} maxWidth={800}>
          {data.map(({ companyName, position, from, to, description }, i) => (
            <Grid
              key={i}
              sx={{
                '& .markdown *:not(code)': {
                  color: 'common.white',
                },
              }}
            >
              <Typography variant="subtitle1" color="common.white">
                {companyName}
              </Typography>
              <Typography variant="caption" color="common.white">
                {position} ({dayjs(from).format('YYYY년 M월')} ~ {to ? dayjs(to).format('YYYY년 M월') : '현재'})
              </Typography>
              <ReactMarkdown className="markdown">{description}</ReactMarkdown>
            </Grid>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}
