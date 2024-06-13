declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const svg: FC<SVGProps<SVGSVGElement>>;
  export default svg;
}
