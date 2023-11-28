'use client';

import { Card, Grid, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import AngularLogo from '@/assets/images/logos/angular-logo.svg';
import AntdLogo from '@/assets/images/logos/antd-logo.svg';
import ApolloLogo from '@/assets/images/logos/apollo-logo.svg';
import CLogo from '@/assets/images/logos/c-logo.svg';
import CppLogo from '@/assets/images/logos/cpp-logo.svg';
import Css3Logo from '@/assets/images/logos/css3-logo.svg';
import DjangoLogo from '@/assets/images/logos/django-logo.svg';
import DockerLogo from '@/assets/images/logos/docker-logo.svg';
import EchartsLogo from '@/assets/images/logos/echarts-logo.svg';
import ExpoLogo from '@/assets/images/logos/expo-logo.svg';
import FigmaLogo from '@/assets/images/logos/figma-logo.svg';
import FirebaseLogo from '@/assets/images/logos/firebase-logo.svg';
import FlaskLogo from '@/assets/images/logos/flask-logo.svg';
import GithubActionsLogo from '@/assets/images/logos/github-actions-logo.svg';
import GrailsLogo from '@/assets/images/logos/grails-logo.svg';
import HibernateLogo from '@/assets/images/logos/hibernate-logo.svg';
import Html5Logo from '@/assets/images/logos/html5-logo.svg';
import JavaLogo from '@/assets/images/logos/java-logo.svg';
import JavascriptLogo from '@/assets/images/logos/javascript-logo.svg';
import JiraLogo from '@/assets/images/logos/jira-logo.svg';
import K8sLogo from '@/assets/images/logos/k8s-logo.svg';
import MariadbLogo from '@/assets/images/logos/mariadb-logo.svg';
import MongodbLogo from '@/assets/images/logos/mongodb-logo.svg';
import MssqlLogo from '@/assets/images/logos/mssql-logo.svg';
import MuiLogo from '@/assets/images/logos/mui-logo.svg';
import MysqlLogo from '@/assets/images/logos/mysql-logo.svg';
import NestjsLogo from '@/assets/images/logos/nestjs-logo.svg';
import NextLogo from '@/assets/images/logos/next-logo.svg';
import NginxLogo from '@/assets/images/logos/nginx-logo.svg';
import NpmLogo from '@/assets/images/logos/npm-logo.svg';
import OracleLogo from '@/assets/images/logos/oracle-logo.svg';
import PnpmLogo from '@/assets/images/logos/pnpm-logo.svg';
import PsqlLogo from '@/assets/images/logos/psql-logo.svg';
import PythonLogo from '@/assets/images/logos/python-logo.svg';
import ReactLogo from '@/assets/images/logos/react-logo.svg';
import ReactQueryLogo from '@/assets/images/logos/react-query-logo.svg';
import RecoilLogo from '@/assets/images/logos/recoil-logo.svg';
import ReduxLogo from '@/assets/images/logos/redux-logo.svg';
import RelayLogo from '@/assets/images/logos/relay-logo.svg';
import SassLogo from '@/assets/images/logos/sass-logo.svg';
import SpringLogo from '@/assets/images/logos/spring-logo.svg';
import SpringbootLogo from '@/assets/images/logos/springboot-logo.svg';
import StorybookLogo from '@/assets/images/logos/storybook-logo.svg';
import SwrLogo from '@/assets/images/logos/swr-logo.svg';
import TomcatLogo from '@/assets/images/logos/tomcat-logo.svg';
import TypeormLogo from '@/assets/images/logos/typeorm-logo.svg';
import TypescriptLogo from '@/assets/images/logos/typescript-logo.svg';
import ViteLogo from '@/assets/images/logos/vite-logo.svg';
import VueLogo from '@/assets/images/logos/vue-logo.svg';
import YarnLogo from '@/assets/images/logos/yarn-logo.svg';

const aboutMe = [
  {
    label: 'NAME',
    value: '이재열',
  },
  {
    label: 'BIRTH',
    value: '1995-08-30',
  },
  {
    label: 'EMAIL',
    value: 'jayur830@naver.com',
  },
  {
    label: 'GITHUB',
    value: 'https://github.com/jayur830',
  },
  {
    label: 'BLOG',
    value: 'https://jumbled-seat-0ac.notion.site/2aaa7273cb3b4df88017cd5ebbde1115?pvs=4',
  },
];

const icons = [
  AngularLogo,
  AntdLogo,
  ApolloLogo,
  CLogo,
  CppLogo,
  Css3Logo,
  DjangoLogo,
  DockerLogo,
  EchartsLogo,
  ExpoLogo,
  FigmaLogo,
  FirebaseLogo,
  FlaskLogo,
  GithubActionsLogo,
  GrailsLogo,
  HibernateLogo,
  Html5Logo,
  JavaLogo,
  JavascriptLogo,
  JiraLogo,
  K8sLogo,
  MariadbLogo,
  MongodbLogo,
  MssqlLogo,
  MuiLogo,
  MysqlLogo,
  NestjsLogo,
  NextLogo,
  NginxLogo,
  NpmLogo,
  OracleLogo,
  PnpmLogo,
  PsqlLogo,
  PythonLogo,
  ReactLogo,
  ReactQueryLogo,
  RecoilLogo,
  ReduxLogo,
  RelayLogo,
  SassLogo,
  SpringLogo,
  SpringbootLogo,
  StorybookLogo,
  SwrLogo,
  TomcatLogo,
  TypeormLogo,
  TypescriptLogo,
  ViteLogo,
  VueLogo,
  YarnLogo,
].reduce((result, icon) => {
  return [
    ...result,
    {
      x: Math.random(),
      y: Math.random(),
      size: 24,
    },
  ];
}, []);

export default function App() {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
    >
      <Grid
        maxWidth={1000}
        width="100%"
      >
        <Typography
          fontWeight={700}
          fontSize={36}
        >
          About me
        </Typography>
        <HeaderCard variant="outlined">
          {aboutMe.map(({ label, value }, i) => (
            <Typography
              key={i}
              fontWeight={400}
              fontSize={16}
            >
              {label}: {value}
            </Typography>
          ))}
        </HeaderCard>
      </Grid>
    </Grid>
  );
}

const HeaderCard = styled(Card)(({ theme }) => ({
  display: 'grid',
  gap: 8,
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  borderRadius: 16,
  marginTop: 30,
  padding: 20,
  boxShadow: `0 0 10px 3px ${theme.palette.mode === 'light' ? grey['300'] : grey['A700']}`,
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
}));
