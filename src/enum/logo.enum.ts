import { registerEnumType } from '@nestjs/graphql';

export enum Logo {
  React = 'React',
  ReactNative = 'ReactNative',
  Sass = 'Sass',
  Vue = 'Vue',
  Java = 'Java',
  Python = 'Python',
  Docker = 'Docker',
  MySQL = 'MySQL',
  Spring = 'Spring',
  SpringBoot = 'SpringBoot',
  NextJS = 'NextJS',
  ApolloClient = 'ApolloClient',
  PostgreSQL = 'PostgreSQL',
  Oracle = 'Oracle',
  MongoDB = 'MongoDB',
  Yarn = 'Yarn',
  Vite = 'Vite',
  AntDesign = 'AntDesign',
  Storybook = 'Storybook',
  MaterialUI = 'MaterialUI',
  Redux = 'Redux',
  TypeScript = 'TypeScript',
  Nginx = 'Nginx',
  ApacheTomcat = 'ApacheTomcat',
}

registerEnumType(Logo, {
  name: 'Logo',
  description: '프레임워크, 라이브러리 로고',
});
