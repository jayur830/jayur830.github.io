import { brown } from '@mui/material/colors';

import AntDesignIcon from '@/assets/images/antd-icon.svg';
import ApolloIcon from '@/assets/images/apollo-icon.svg';
import DockerIcon from '@/assets/images/docker-icon.svg';
import JavaIcon from '@/assets/images/java-icon.svg';
import MongoDbIcon from '@/assets/images/mongodb-icon.svg';
import MaterialUiIcon from '@/assets/images/mui-icon.svg';
import MySqlIcon from '@/assets/images/mysql-icon.svg';
import NextJsIcon from '@/assets/images/nextjs-icon.svg';
import NginxIcon from '@/assets/images/nginx-icon.svg';
import OracleIcon from '@/assets/images/oracle-icon.svg';
import PostgreSqlIcon from '@/assets/images/psql-icon.svg';
import PythonIcon from '@/assets/images/python-icon.svg';
import ReactIcon from '@/assets/images/react-icon.svg';
import ReduxIcon from '@/assets/images/redux-icon.svg';
import SassIcon from '@/assets/images/sass-icon.svg';
import SpringIcon from '@/assets/images/spring-icon.svg';
import SpringBootIcon from '@/assets/images/springboot-icon.svg';
import StorybookIcon from '@/assets/images/storybook-icon.svg';
import ApacheTomcatIcon from '@/assets/images/tomcat-icon.svg';
import TypeScriptIcon from '@/assets/images/typescript-icon.svg';
import ViteIcon from '@/assets/images/vite-icon.svg';
import VueIcon from '@/assets/images/vue-icon.svg';
import YarnIcon from '@/assets/images/yarn-icon.svg';
import { TechLogo } from '@/graphql/graphql';

export const logoValues = {
  [TechLogo.React]: {
    href: 'https://ko.reactjs.org/',
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
    href: 'https://reactnative.dev/',
    label: 'React Native',
    icon: ReactIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#1694C2',
  },
  [TechLogo.Sass]: {
    href: 'https://sass-lang.com/',
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
    href: 'https://vuejs.org/',
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
    href: 'https://www.docker.com/',
    label: 'Docker',
    icon: DockerIcon,
    svgProps: {
      width: 21,
      height: 16,
      viewBox: '0.5 -1.5 12 12',
    },
    backgroundColor: '#00A3FF',
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
  [TechLogo.Spring]: {
    href: 'https://spring.io/',
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
    href: 'https://spring.io/projects/spring-boot',
    label: 'Spring Boot',
    icon: SpringBootIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#4F9620',
  },
  [TechLogo.NextJs]: {
    href: 'https://nextjs.org/',
    label: 'Next.js',
    icon: NextJsIcon,
    svgProps: {
      width: 26,
      height: 5,
    },
    backgroundColor: '#000000',
  },
  [TechLogo.ApolloClient]: {
    href: 'https://www.apollographql.com/docs/react/',
    label: 'Apollo Client',
    icon: ApolloIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 0 10 10',
    },
    backgroundColor: '#1C223E',
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
  [TechLogo.Yarn]: {
    href: 'https://yarnpkg.com/',
    label: 'Yarn',
    icon: YarnIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '0 -0.5 10 10',
    },
    backgroundColor: '#2C8EBB',
  },
  [TechLogo.Vite]: {
    href: 'https://vitejs-kr.github.io/',
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
    href: 'https://ant.design/',
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
    href: 'https://storybook.js.org/',
    label: 'Storybook',
    icon: StorybookIcon,
    svgProps: {
      width: 14,
      height: 14,
      viewBox: '-1 -1 10 10',
    },
    backgroundColor: '#FF4785',
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
};
