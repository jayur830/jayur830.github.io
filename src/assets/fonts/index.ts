import localFont from 'next/font/local';

export const goormSansFont = localFont({
  src: [
    {
      path: './goorm-sans-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './goorm-sans-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './goorm-sans-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
