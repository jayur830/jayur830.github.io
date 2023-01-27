// import package modules
import { Chip, styled } from '@mui/material';
import { brown } from '@mui/material/colors';

// Import global modules
import AntDesignIcon from '@/assets/images/antd-icon.svg';
import ApolloIcon from '@/assets/images/apollo-icon.svg';
import DockerIcon from '@/assets/images/docker-icon.svg';
import JavaIcon from '@/assets/images/java-icon.svg';
import MongoDbIcon from '@/assets/images/mongodb-icon.svg';
import MUiIcon from '@/assets/images/mui-icon.svg';
import MySqlIcon from '@/assets/images/mysql-icon.svg';
import NextJsIcon from '@/assets/images/nextjs-icon.svg';
import OracleIcon from '@/assets/images/oracle-icon.svg';
import PostgreSqlIcon from '@/assets/images/psql-icon.svg';
import PythonIcon from '@/assets/images/python-icon.svg';
import ReactIcon from '@/assets/images/react-icon.svg';
import SassIcon from '@/assets/images/sass-icon.svg';
import SpringIcon from '@/assets/images/spring-icon.svg';
import SpringBootIcon from '@/assets/images/springboot-icon.svg';
import StorybookIcon from '@/assets/images/storybook-icon.svg';
import ViteIcon from '@/assets/images/vite-icon.svg';
import VueIcon from '@/assets/images/vue-icon.svg';
import YarnIcon from '@/assets/images/yarn-icon.svg';

// Import local modules

export default function LogoBadge() {
  return <></>;
}

const StyledChip = styled(Chip)<{ 'background-color': string; 'text-color'?: string }>(({ theme, ...props }) => ({
  backgroundColor: props['background-color'],
  borderRadius: 3,
  color: props['text-color'] ?? theme.palette.common.white,
  fontSize: 12,
  fontWeight: 400,
  height: 22,
  ['.MuiChip-icon']: {
    paddingLeft: 3,
  },
  ['.MuiChip-label']: {
    paddingLeft: 12,
  },
}));

LogoBadge.React = () => (
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
);

LogoBadge.ReactNative = () => (
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
);

LogoBadge.Sass = () => (
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
);

LogoBadge.Vue = () => (
  <StyledChip
    icon={
      <VueIcon
        width={14}
        height={12}
        viewBox="1 -0.7 10 10"
      />
    }
    label="Vue"
    background-color="#4A9A6A"
  />
);

LogoBadge.Java = () => (
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
);

LogoBadge.Python = () => (
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
);

LogoBadge.Docker = () => (
  <StyledChip
    icon={
      <DockerIcon
        width={21}
        height={16}
        viewBox="1 -0.5 10 10"
      />
    }
    label="Docker"
    background-color="#00A3FF"
  />
);

LogoBadge.MySQL = () => (
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
);

LogoBadge.Spring = () => (
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
);

LogoBadge.SpringBoot = () => (
  <StyledChip
    icon={
      <SpringBootIcon
        width={14}
        height={14}
        viewBox="0 0 10 10"
      />
    }
    label="SpringBoot"
    background-color="#4F9620"
  />
);

LogoBadge.NextJS = () => (
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
);

LogoBadge.ApolloClient = () => (
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
);

LogoBadge.PostgreSQL = () => (
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
);

LogoBadge.Oracle = () => (
  <StyledChip
    icon={
      <OracleIcon
        width={32}
        height={20}
        viewBox="3 -4 10 10"
      />
    }
    label="Oracle"
    background-color="#C74634"
  />
);

LogoBadge.MongoDB = () => (
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
);

LogoBadge.Yarn = () => (
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
);

LogoBadge.Vite = () => (
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
);

LogoBadge.AntDesign = () => (
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
);

LogoBadge.Storybook = () => (
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
);

LogoBadge.MUi = () => (
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
);
