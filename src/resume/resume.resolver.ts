// import package modules
import { Query, Resolver } from '@nestjs/graphql';

// Import global modules
import { Logo } from '@/enum/logo.enum';
import { ResumeVO } from '@/vo/resume.vo';

// Import local modules

@Resolver()
export class ResumeResolver {
  @Query(() => ResumeVO)
  async Resume_get(): Promise<ResumeVO> {
    return {
      title: '이력서 제목',
      github: 'https://github.com/jayur830',
      resumeList: [
        {
          name: '엔라이튼',
          logo: {
            src: 'https://drive.google.com/uc?export=view&id=1TaPXXe9xAZPrnWSPVIYRYXsMpZnP__ai',
            alt: 'ENlighten',
            width: 494,
            height: 82,
          },
          startDate: '2022-03',
          website: 'https://enlighten.kr',
          description:
            '엔라이튼은 에너지를 쉽게 생산/소비할 수 있도록 도와주는 IT 금융 자문 회사입니다. 저는 여기서 기존에 운영중이었던 서비스를 개발 및 리뉴얼하거나 개발된 서비스의 프레임워크를 다른 프레임워크로 마이그레이션하는 일을 하였습니다.',
          carrierList: [
            {
              groupName: '발전왕 SQUAD',
              list: [
                {
                  name: "'발전왕' 서비스 앱 전환",
                  completed: false,
                  startDate: '2022-10',
                  endDate: '2023-01',
                  techList: [Logo.Yarn, Logo.TypeScript, Logo.ReactNative, Logo.Redux, Logo.ApolloClient],
                  description: '- React Native 개발',
                },
              ],
            },
            {
              groupName: '공통',
              list: [
                {
                  name: '사내 백오피스 개발',
                  completed: true,
                  startDate: '2022-08',
                  endDate: '2022-11',
                  techList: [Logo.Yarn, Logo.TypeScript, Logo.Vite, Logo.AntDesign, Logo.Sass, Logo.ApolloClient],
                  description: `- 모노레포 + 마이크로 프론트엔드 환경 세팅
- 각 서비스의 대부분의 정보를 한 곳에서 관리함으로써 운영업무를 맡는 분들의 시간 단축`,
                },
                {
                  name: '모노레포 통합',
                  completed: true,
                  startDate: '2022-07',
                  endDate: '2022-08',
                  techList: [Logo.Yarn],
                  description: `- Yarn Workspace 이용
- 모듈과 서비스 코드를 한꺼번에 관리하여 각 서비스에서 공통 모듈 사용`,
                },
              ],
            },
            {
              groupName: 'EiMS SQUAD',
              list: [
                {
                  name: '수요사업자관리 시스템 리뉴얼',
                  completed: true,
                  startDate: '2022-03',
                  endDate: '2022-07',
                  techList: [Logo.Yarn, Logo.TypeScript, Logo.Vite, Logo.AntDesign, Logo.Sass, Logo.ApolloClient],
                  description: `- Context API 기반 패턴 적용
- Apollo Cache를 통한 네트워크 통신 효율화
- 향후 수월한 유지보수를 위해 코드 전반 리팩토링
- CRA → Yarn Berry + Vite 마이그레이션`,
                },
              ],
            },
          ],
        },
        {
          name: '위즈아이, 구 환경과학기술',
          logo: {
            src: 'https://drive.google.com/uc?export=view&id=1Z458ShBcBqJmXB8XzCNQ_iehf2XGNtbP',
            alt: 'WIZAI',
            width: 174,
            height: 76,
          },
          startDate: '2020-07',
          endDate: '2022-03',
          description: '일정 주기로 수집되어 DB에 적재된 데이터를 차트, 지도 등을 통해 시각화하는 웹 서비스 개발 업무를 진행하였습니다.',
          carrierList: [
            {
              list: [
                {
                  name: '대용량 DB 실시간 통계',
                  completed: true,
                  startDate: '2021-08',
                  endDate: '2021-11',
                  techList: [Logo.PostgreSQL, Logo.Python],
                  description: '- 대용량 DB 통계 실시간 스케줄링으로 업무처리 자동화',
                },
                {
                  name: 'Business Intelligence 기반 데이터 시각화',
                  completed: true,
                  startDate: '2021-05',
                  endDate: '2021-12',
                  techList: [Logo.Vue, Logo.SpringBoot, Logo.Docker],
                  description: `- 반응형 UX/UI 개발
- 배포 자동화 및 무중단 배포를 통한 업무 생산성 기여
- 운영 서버 배포 및 관리`,
                },
                {
                  name: '웹 서비스 최적화',
                  completed: true,
                  startDate: '2021-02',
                  endDate: '2021-11',
                  techList: [Logo.Spring, Logo.MySQL, Logo.ApacheTomcat],
                  description: `- 웹 페이지 렌더링 성능 개선
- 데이터베이스 쿼리 성능 개선
                    `,
                },
                {
                  name: '홍보용 웹 사이트 개발',
                  completed: true,
                  startDate: '2021-01',
                  endDate: '2021-04',
                  techList: [Logo.React, Logo.Redux, Logo.Nginx],
                  description: `- 소개 페이지 개발
- 전역 상태 관리
- 운영 서버 배포`,
                },
                {
                  name: '대시보드 기반 데이터 시각화',
                  completed: true,
                  startDate: '2020-09',
                  endDate: '2021-02',
                  techList: [Logo.TypeScript, Logo.Vue, Logo.SpringBoot, Logo.Oracle, Logo.ApacheTomcat],
                  description: `- 대용량 데이터 지연 로딩
- 통계 테이블 생성 및 여러 렌더링 성능 개선 기법을 통한 애플리케이션 성능 개선
- 운영 서버 배포`,
                },
                {
                  name: '데이터 마이그레이션',
                  completed: true,
                  startDate: '2020-07',
                  endDate: '2020-09',
                  techList: [Logo.Python],
                  description: `- 서버 간 데이터 이관 프로그램 실시간 자동화 처리`,
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
