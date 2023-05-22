import { Chip, Link, styled } from '@mui/material';
import { brown } from '@mui/material/colors';

import AntDesignIcon from '@/assets/images/antd-icon.svg';
import ApolloIcon from '@/assets/images/apollo-icon.svg';
import DockerIcon from '@/assets/images/docker-icon.svg';
import JavaIcon from '@/assets/images/java-icon.svg';
import MongoDbIcon from '@/assets/images/mongodb-icon.svg';
import MUiIcon from '@/assets/images/mui-icon.svg';
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

export default function LogoBadge() {
  return <></>;
}

const LinkButton = styled(Link)({
  display: 'flex',
  textDecoration: 'none',
});

const StyledChip = styled(Chip)<{ 'background-color': string; 'text-color'?: string }>(({ theme, ...props }) => ({
  backgroundColor: props['background-color'],
  borderRadius: 3,
  color: props['text-color'] ?? theme.palette.common.white,
  fontSize: 12,
  fontWeight: 400,
  height: 22,
  cursor: 'pointer',
  ['.MuiChip-icon']: {
    paddingLeft: 3,
  },
  ['.MuiChip-label']: {
    paddingLeft: 12,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 10,
    height: 18,
  },
}));

LogoBadge.React = () => (
  <LinkButton
    href="https://ko.reactjs.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <ReactIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="React"
      background-color="#2EBBEF"
    />
  </LinkButton>
);

LogoBadge.ReactNative = () => (
  <LinkButton
    href="https://reactnative.dev/"
    target="_blank"
  >
    <StyledChip
      icon={
        <ReactIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="React Native"
      background-color="#1694C2"
    />
  </LinkButton>
);

LogoBadge.Sass = () => (
  <LinkButton
    href="https://sass-lang.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <SassIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Sass"
      background-color="#BD347C"
    />
  </LinkButton>
);

LogoBadge.Vue = () => (
  <LinkButton
    href="https://vuejs.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <VueIcon
          width={16}
          height={12}
          viewBox="0.5 -0.7 10 10"
        />
      }
      label="Vue"
      background-color="#4A9A6A"
    />
  </LinkButton>
);

LogoBadge.Java = () => (
  <LinkButton
    href="https://www.java.com/ko/"
    target="_blank"
  >
    <StyledChip
      icon={
        <JavaIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Java"
      background-color="#E4320A"
    />
  </LinkButton>
);

LogoBadge.Python = () => (
  <LinkButton
    href="https://www.python.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <PythonIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Python"
      background-color="#44709F"
    />
  </LinkButton>
);

LogoBadge.Docker = () => (
  <LinkButton
    href="https://www.docker.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <DockerIcon
          width={21}
          height={16}
          viewBox="0.5 -1.5 12 12"
        />
      }
      label="Docker"
      background-color="#00A3FF"
    />
  </LinkButton>
);

LogoBadge.MySQL = () => (
  <LinkButton
    href="https://www.mysql.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <MySqlIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="MySQL"
      background-color="#007AA0"
    />
  </LinkButton>
);

LogoBadge.Spring = () => (
  <LinkButton
    href="https://spring.io/"
    target="_blank"
  >
    <StyledChip
      icon={
        <SpringIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Spring"
      background-color="#6DB33F"
    />
  </LinkButton>
);

LogoBadge.SpringBoot = () => (
  <LinkButton
    href="https://spring.io/projects/spring-boot"
    target="_blank"
  >
    <StyledChip
      icon={
        <SpringBootIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Spring Boot"
      background-color="#4F9620"
    />
  </LinkButton>
);

LogoBadge.NextJS = () => (
  <LinkButton
    href="https://nextjs.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <NextJsIcon
          width={26}
          height={5}
        />
      }
      label="Next.js"
      background-color="#000000"
    />
  </LinkButton>
);

LogoBadge.ApolloClient = () => (
  <LinkButton
    href="https://www.apollographql.com/docs/react/"
    target="_blank"
  >
    <StyledChip
      icon={
        <ApolloIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Apollo Client"
      background-color="#1C223E"
    />
  </LinkButton>
);

LogoBadge.PostgreSQL = () => (
  <LinkButton
    href="https://www.postgresql.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <PostgreSqlIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="PostgreSQL"
      background-color="#336791"
    />
  </LinkButton>
);

LogoBadge.Oracle = () => (
  <LinkButton
    href="https://www.oracle.com/kr/"
    target="_blank"
  >
    <StyledChip
      icon={
        <OracleIcon
          width={34}
          height={20}
          viewBox="2.5 -4 10 10"
        />
      }
      label="Oracle"
      background-color="#C74634"
    />
  </LinkButton>
);

LogoBadge.MongoDB = () => (
  <LinkButton
    href="https://www.mongodb.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <MongoDbIcon
          width={14}
          height={14}
          viewBox="-2 0 10 10"
        />
      }
      label="MongoDB"
      background-color="#4EA75C"
    />
  </LinkButton>
);

LogoBadge.Yarn = () => (
  <LinkButton
    href="https://yarnpkg.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <YarnIcon
          width={14}
          height={14}
          viewBox="0 -0.5 10 10"
        />
      }
      label="Yarn"
      background-color="#2C8EBB"
    />
  </LinkButton>
);

LogoBadge.Vite = () => (
  <LinkButton
    href="https://vitejs-kr.github.io/"
    target="_blank"
  >
    <StyledChip
      icon={
        <ViteIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
          fill={brown['700']}
        />
      }
      label="Vite"
      background-color="#F3BA48"
      text-color={brown['700']}
    />
  </LinkButton>
);

LogoBadge.AntDesign = () => (
  <LinkButton
    href="https://ant.design/"
    target="_blank"
  >
    <StyledChip
      icon={
        <AntDesignIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="Ant Design"
      background-color="#1A71E2"
    />
  </LinkButton>
);

LogoBadge.Storybook = () => (
  <LinkButton
    href="https://storybook.js.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <StorybookIcon
          width={14}
          height={14}
          viewBox="-1 -1 10 10"
        />
      }
      label="Storybook"
      background-color="#FF4785"
    />
  </LinkButton>
);

LogoBadge.MUi = () => (
  <LinkButton
    href="https://mui.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <MUiIcon
          width={14}
          height={14}
          viewBox="-1 -1 10 10"
        />
      }
      label="Material UI"
      background-color="#007FFF"
    />
  </LinkButton>
);

LogoBadge.Redux = () => (
  <LinkButton
    href="https://ko.redux.js.org/introduction/getting-started/"
    target="_blank"
  >
    <StyledChip
      icon={
        <ReduxIcon
          width={14}
          height={14}
          viewBox="0 0 12 10"
        />
      }
      label="Redux"
      background-color="#764ABC"
    />
  </LinkButton>
);

LogoBadge.TypeScript = () => (
  <LinkButton
    href="https://www.typescriptlang.org/"
    target="_blank"
  >
    <StyledChip
      icon={
        <TypeScriptIcon
          width={14}
          height={14}
          viewBox="0 0 8 8"
        />
      }
      label="TypeScript"
      background-color="#3178C6"
    />
  </LinkButton>
);

LogoBadge.Nginx = () => (
  <LinkButton
    href="https://www.nginx.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <NginxIcon
          width={14}
          height={14}
          viewBox="0 0 10 10"
        />
      }
      label="NGINX"
      background-color="#009639"
    />
  </LinkButton>
);

LogoBadge.ApacheTomcat = () => (
  <LinkButton
    href="https://www.nginx.com/"
    target="_blank"
  >
    <StyledChip
      icon={
        <ApacheTomcatIcon
          width={18}
          height={14}
          viewBox="0 -1.5 11 11"
        />
      }
      label="Apache Tomcat"
      background-color="#FFDC76"
      text-color="#67592E"
    />
  </LinkButton>
);
