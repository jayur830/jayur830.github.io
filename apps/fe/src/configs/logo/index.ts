import { brown } from '@mui/material/colors';

import AngularIcon from '@/assets/images/badges/angular-icon.svg';
import AntDesignIcon from '@/assets/images/badges/antd-icon.svg';
import ApolloIcon from '@/assets/images/badges/apollo-icon.svg';
import CLangIcon from '@/assets/images/badges/c-icon.svg';
import CppIcon from '@/assets/images/badges/cpp-icon.svg';
import Css3Icon from '@/assets/images/badges/css3-icon.svg';
import DjangoIcon from '@/assets/images/badges/django-icon.svg';
import DockerIcon from '@/assets/images/badges/docker-icon.svg';
import EChartsIcon from '@/assets/images/badges/echarts-icon.svg';
import ExpoIcon from '@/assets/images/badges/expo-icon.svg';
import FigmaIcon from '@/assets/images/badges/figma-icon.svg';
import FirebaseIcon from '@/assets/images/badges/firebase-icon.svg';
import FlaskIcon from '@/assets/images/badges/flask-icon.svg';
import GithubActionsIcon from '@/assets/images/badges/github-actions-icon.svg';
import GrailsIcon from '@/assets/images/badges/grails-icon.svg';
import HibernateIcon from '@/assets/images/badges/hibernate-icon.svg';
import Html5Icon from '@/assets/images/badges/html5-icon.svg';
import JavaIcon from '@/assets/images/badges/java-icon.svg';
import JavaScriptIcon from '@/assets/images/badges/javascript-icon.svg';
import JiraIcon from '@/assets/images/badges/jira-icon.svg';
import KubernetesIcon from '@/assets/images/badges/k8s-icon.svg';
import MariaDbIcon from '@/assets/images/badges/mariadb-icon.svg';
import MongoDbIcon from '@/assets/images/badges/mongodb-icon.svg';
import MssqlIcon from '@/assets/images/badges/mssql-icon.svg';
import MaterialUiIcon from '@/assets/images/badges/mui-icon.svg';
import MySqlIcon from '@/assets/images/badges/mysql-icon.svg';
import NestJsIcon from '@/assets/images/badges/nestjs-icon.svg';
import NextJsIcon from '@/assets/images/badges/nextjs-icon.svg';
import NginxIcon from '@/assets/images/badges/nginx-icon.svg';
import NpmIcon from '@/assets/images/badges/npm-icon.svg';
import OracleIcon from '@/assets/images/badges/oracle-icon.svg';
import PnpmIcon from '@/assets/images/badges/pnpm-icon.svg';
import PostgreSqlIcon from '@/assets/images/badges/psql-icon.svg';
import PythonIcon from '@/assets/images/badges/python-icon.svg';
import ReactIcon from '@/assets/images/badges/react-icon.svg';
import ReactQueryIcon from '@/assets/images/badges/react-query-icon.svg';
import RecoilIcon from '@/assets/images/badges/recoil-icon.svg';
import ReduxIcon from '@/assets/images/badges/redux-icon.svg';
import RelayIcon from '@/assets/images/badges/relay-icon.svg';
import SassIcon from '@/assets/images/badges/sass-icon.svg';
import SpringIcon from '@/assets/images/badges/spring-icon.svg';
import SpringBootIcon from '@/assets/images/badges/springboot-icon.svg';
import StorybookIcon from '@/assets/images/badges/storybook-icon.svg';
import SwrIcon from '@/assets/images/badges/swr-icon.svg';
import ApacheTomcatIcon from '@/assets/images/badges/tomcat-icon.svg';
import TypeOrmIcon from '@/assets/images/badges/typeorm-icon.svg';
import TypeScriptIcon from '@/assets/images/badges/typescript-icon.svg';
import ViteIcon from '@/assets/images/badges/vite-icon.svg';
import VueIcon from '@/assets/images/badges/vue-icon.svg';
import YarnIcon from '@/assets/images/badges/yarn-icon.svg';
import { TechLogo } from '@/graphql/graphql';

export const logoValues = {
  [TechLogo.C]: {
    href: 'https://learn.microsoft.com/ko-kr/cpp/c-language/?view=msvc-170',
    label: 'C',
    icon: CLangIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#004482',
  },
  [TechLogo.Cpp]: {
    href: 'https://learn.microsoft.com/ko-kr/cpp/cpp/?view=msvc-170',
    label: 'C++',
    icon: CppIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#004482',
  },
  [TechLogo.Html5]: {
    href: 'https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML',
    label: 'HTML5',
    icon: Html5Icon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#E34F26',
  },
  [TechLogo.Css3]: {
    href: 'https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/CSS_basics',
    label: 'CSS3',
    icon: Css3Icon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#264DE4',
  },
  [TechLogo.JavaScript]: {
    href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
    label: 'JavaScript',
    icon: JavaScriptIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#F7DF1E',
    textColor: '#463E00',
  },
  [TechLogo.Angular]: {
    href: 'https://angular.kr/guide/setup-local',
    label: 'Angular',
    icon: AngularIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#DD0031',
  },
  [TechLogo.React]: {
    href: 'https://react.dev/learn/start-a-new-react-project',
    label: 'React',
    icon: ReactIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#2EBBEF',
  },
  [TechLogo.ReactNative]: {
    href: 'https://reactnative.dev/docs/environment-setup',
    label: 'React Native',
    icon: ReactIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#1694C2',
  },
  [TechLogo.Expo]: {
    href: 'https://docs.expo.dev/get-started/installation/',
    label: 'Expo',
    icon: ExpoIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 -1 10 10',
    },
    backgroundColor: '#1877B8',
  },
  [TechLogo.Sass]: {
    href: 'https://sass-lang.com/install/',
    label: 'Sass',
    icon: SassIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#BD347C',
  },
  [TechLogo.Vue]: {
    href: 'https://vuejs.org/guide/quick-start.html#try-vue-online',
    label: 'Vue',
    icon: VueIcon,
    svgProps: {
      width: 16,
      height: 12,
      viewBox: '0.5 -0.7 10 10',
    },
    backgroundColor: '#4A9A6A',
  },
  [TechLogo.Java]: {
    href: 'https://www.java.com/ko/',
    label: 'Java',
    icon: JavaIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#E4320A',
  },
  [TechLogo.Python]: {
    href: 'https://www.python.org/',
    label: 'Python',
    icon: PythonIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#44709F',
  },
  [TechLogo.Docker]: {
    href: 'https://docs.docker.com/desktop/?_gl=1*20734j*_ga*MTQwOTM1MTYwMS4xNjkyNTExMDEx*_ga_XJWPQMJYHQ*MTY5NjA2NjU5MS4yLjEuMTY5NjA2NjYyMi4yOS4wLjA.',
    label: 'Docker',
    icon: DockerIcon,
    svgProps: {
      width: 21,
      height: 16,
      viewBox: '0.5 -1.5 12 12',
    },
    backgroundColor: '#00A3FF',
  },
  [TechLogo.Kubernetes]: {
    href: 'https://kubernetes.io/docs/setup/',
    label: 'Kubernetes',
    icon: KubernetesIcon,
    svgProps: {
      width: 15,
      height: 14,
      viewBox: '-0.5 -0.5 11 11',
    },
    backgroundColor: '#326CE5',
  },
  [TechLogo.MySql]: {
    href: 'https://www.mysql.com/',
    label: 'MySQL',
    icon: MySqlIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#007AA0',
  },
  [TechLogo.MariaDb]: {
    href: 'https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.3.0',
    label: 'MariaDB',
    icon: MariaDbIcon,
    svgProps: {
      width: 17,
      height: 14,
      viewBox: '0 -2 12 12',
    },
    backgroundColor: '#003545',
  },
  [TechLogo.Spring]: {
    href: 'https://spring.io/quickstart',
    label: 'Spring',
    icon: SpringIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#6DB33F',
  },
  [TechLogo.SpringBoot]: {
    href: 'https://spring.io/quickstart',
    label: 'Spring Boot',
    icon: SpringBootIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#4F9620',
  },
  [TechLogo.Grails]: {
    href: 'https://start.grails.org/',
    label: 'Grails',
    icon: GrailsIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#FEB571',
  },
  [TechLogo.Hibernate]: {
    href: 'https://docs.jboss.org/hibernate/orm/6.3/quickstart/html_single/',
    label: 'Hibernate',
    icon: HibernateIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#BCAE79',
  },
  [TechLogo.NestJs]: {
    href: 'https://docs.nestjs.com/',
    label: 'Nest.js',
    icon: NestJsIcon,
    svgProps: {
      width: 15,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#E0234E',
  },
  [TechLogo.TypeOrm]: {
    href: 'https://typeorm.io/#installation',
    label: 'TypeORM',
    icon: TypeOrmIcon,
    svgProps: {
      width: 16,
      height: 14,
      viewBox: '1 0 12 10',
    },
    backgroundColor: '#FE0902',
  },
  [TechLogo.Flask]: {
    href: 'https://flask-docs-kr.readthedocs.io/ko/latest/installation.html',
    label: 'Flask',
    icon: FlaskIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#3BABC3',
  },
  [TechLogo.Django]: {
    href: 'https://docs.djangoproject.com/ko/4.2/intro/install/',
    label: 'Django',
    icon: DjangoIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 -1 9 9',
    },
    backgroundColor: '#092E20',
  },
  [TechLogo.NextJs]: {
    href: 'https://nextjs.org/docs/getting-started/installation',
    label: 'Next.js',
    icon: NextJsIcon,
    svgProps: {
      width: 26,
      height: 5,
    },
    backgroundColor: '#000000',
  },
  [TechLogo.ApolloClient]: {
    href: 'https://www.apollographql.com/docs/react/get-started',
    label: 'Apollo Client',
    icon: ApolloIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#1C223E',
  },
  [TechLogo.Relay]: {
    href: 'https://relay.dev/docs/getting-started/installation-and-setup/',
    label: 'Relay',
    icon: RelayIcon,
    svgProps: {
      width: 18,
      height: 14,
      viewBox: '0 -1 14 10',
    },
    backgroundColor: '#F26B00',
  },
  [TechLogo.ReactQuery]: {
    href: 'https://tanstack.com/query/v3/docs/react/overview',
    label: 'React Query',
    icon: ReactQueryIcon,
    svgProps: {
      width: 16,
      height: 14,
      viewBox: '0 -0.5 9 9',
    },
    backgroundColor: '#FF4154',
  },
  [TechLogo.Swr]: {
    href: 'https://swr.vercel.app/ko/docs/getting-started',
    label: 'SWR',
    icon: SwrIcon,
    svgProps: {
      width: 24,
      height: 14,
      viewBox: '3 -3.5 12 12',
    },
    backgroundColor: '#111111',
  },
  [TechLogo.RtkQuery]: {
    href: 'https://redux-toolkit.js.org/rtk-query/overview',
    label: 'RTK Query',
    icon: ReduxIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 12 10',
    },
    backgroundColor: '#764ABC',
  },
  [TechLogo.PostgreSql]: {
    href: 'https://www.postgresql.org/',
    label: 'PostgreSQL',
    icon: PostgreSqlIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#336791',
  },
  [TechLogo.Oracle]: {
    href: 'https://www.oracle.com/kr/',
    label: 'Oracle',
    icon: OracleIcon,
    svgProps: {
      width: 34,
      height: 20,
      viewBox: '2.5 -4 10 10',
    },
    backgroundColor: '#C74634',
  },
  [TechLogo.Mssql]: {
    href: 'https://www.microsoft.com/ko-kr/sql-server/sql-server-downloads',
    label: 'MS-SQL',
    icon: MssqlIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 8 8',
    },
    backgroundColor: '#AA1E23',
  },
  [TechLogo.MongoDb]: {
    href: 'https://www.mongodb.com/',
    label: 'MongoDB',
    icon: MongoDbIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '-2 0 10 10',
    },
    backgroundColor: '#4EA75C',
  },
  [TechLogo.Npm]: {
    href: 'https://www.npmjs.com/package/npm',
    label: 'NPM',
    icon: NpmIcon,
    svgProps: {
      width: 24,
      height: 14,
      viewBox: '2 -2.5 10 9',
    },
    backgroundColor: '#CB3837',
  },
  [TechLogo.Yarn]: {
    href: 'https://yarnpkg.com/getting-started/install',
    label: 'Yarn',
    icon: YarnIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 -0.5 10 10',
    },
    backgroundColor: '#2C8EBB',
  },
  [TechLogo.Pnpm]: {
    href: 'https://pnpm.io/ko/installation',
    label: 'PNPM',
    icon: PnpmIcon,
    svgProps: {
      width: 15,
      height: 15,
      viewBox: '0 -1 8 10',
    },
    backgroundColor: '#F9AD00',
  },
  [TechLogo.Vite]: {
    href: 'https://ko.vitejs.dev/guide/',
    label: 'Vite',
    icon: ViteIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
      fill: brown['700'],
    },
    backgroundColor: '#F3BA48',
    textColor: brown['700'],
  },
  [TechLogo.AntDesign]: {
    href: 'https://ant.design/components/overview/',
    label: 'Ant Design',
    icon: AntDesignIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#1A71E2',
  },
  [TechLogo.Storybook]: {
    href: 'https://storybook.js.org/docs/react/get-started/install/',
    label: 'Storybook',
    icon: StorybookIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '-1 -1 10 10',
    },
    backgroundColor: '#FF4785',
  },
  [TechLogo.ECharts]: {
    href: 'https://echarts.apache.org/handbook/en/get-started/',
    label: 'ECharts.js',
    icon: EChartsIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#E43961',
  },
  [TechLogo.MaterialUi]: {
    href: 'https://mui.com/',
    label: 'Material UI',
    icon: MaterialUiIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '-1 -1 10 10',
    },
    backgroundColor: '#007FFF',
  },
  [TechLogo.Redux]: {
    href: 'https://ko.redux.js.org/introduction/getting-started/',
    label: 'Redux',
    icon: ReduxIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 12 10',
    },
    backgroundColor: '#764ABC',
  },
  [TechLogo.Recoil]: {
    href: 'https://recoiljs.org/ko/docs/introduction/installation',
    label: 'Recoil',
    icon: RecoilIcon,
    svgProps: {
      width: 10,
      height: 14,
      viewBox: '0 0 6 10',
    },
    backgroundColor: '#764ABC',
  },
  [TechLogo.TypeScript]: {
    href: 'https://www.typescriptlang.org/',
    label: 'TypeScript',
    icon: TypeScriptIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 8 8',
    },
    backgroundColor: '#3178C6',
  },
  [TechLogo.Nginx]: {
    href: 'https://www.nginx.com/',
    label: 'NGINX',
    icon: NginxIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#009639',
  },
  [TechLogo.ApacheTomcat]: {
    href: 'https://tomcat.apache.org/',
    label: 'Apache Tomcat',
    icon: ApacheTomcatIcon,
    svgProps: {
      width: 18,
      height: 14,
      viewBox: '0 -1.5 11 11',
    },
    backgroundColor: '#FFDC76',
    textColor: '#67592E',
  },
  [TechLogo.GithubActions]: {
    href: 'https://docs.github.com/ko/actions/quickstart',
    label: 'Github Actions',
    icon: GithubActionsIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#4A7EBF',
  },
  [TechLogo.Firebase]: {
    href: 'https://firebase.google.com/?hl=ko',
    label: 'Firebase SDK',
    icon: FirebaseIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '-0.5 0 8 8',
    },
    backgroundColor: '#1A73E8',
  },
  [TechLogo.Jira]: {
    href: 'https://www.atlassian.com/ko/software/jira/guides/getting-started/introduction#what-is-jira-software',
    label: 'Jira',
    icon: JiraIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 8 8',
    },
    backgroundColor: '#0052CC',
  },
  [TechLogo.Figma]: {
    href: 'https://www.figma.com/',
    label: 'Figma',
    icon: FigmaIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 1 10 10',
    },
    backgroundColor: '#1E1E1E',
  },
};
