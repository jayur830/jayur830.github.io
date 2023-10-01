'use client';

import { PropsWithChildren } from 'react';

import { Loading } from '@/components';
import { useCommonState } from '@/store/common';

export default function AppTemplate({ children }: PropsWithChildren) {
  const loading = useCommonState((state) => state.loading);

  return (
    <>
      {children}
      {loading ? <Loading /> : <></>}
    </>
  );
}
