import { useMemo } from 'react';

import ENlightenLogo from '@/assets/images/enlighten-logo.png';
import { createProvider } from '@/utils';

function useResume() {
  const data = useMemo(
    () => ({
      title: '이력서 제목',
      github: 'https://github.com/jayur830',
      resumeList: [
        {
          name: '엔라이튼',
          logo: {
            src: ENlightenLogo,
            alt: 'ENlighten',
          },
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
                  techList: ['Yarn', 'ReactNative', 'ApolloClient'],
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
                  techList: ['React', 'Vite', 'Yarn', 'AntDesign', 'Sass'],
                  description: `- 모노레포 + 마이크로 프론트엔드 환경 기반
- 각 서비스의 대부분의 정보를 한 곳에서 관리함으로써 운영업무를 맡는 분들의 시간 단축`,
                },
                {
                  name: '모노레포 통합',
                  completed: true,
                  startDate: '2022-07',
                  endDate: '2022-08',
                  techList: ['Yarn'],
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
                  techList: ['React', 'Sass', 'ApolloClient'],
                  description: `- Context API 기반 패턴 적용
- Apollo Cache를 통한 네트워크 통신 효율화
- 향후 수월한 유지보수를 위해 코드 전반 리팩토링
- CRA → Yarn Berry + Vite 마이그레이션`,
                },
              ],
            },
          ],
        },
      ],
    }),
    []
  );

  return { data };
}

export const { Provider, useContext } = createProvider(useResume);
