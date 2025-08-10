'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

import Loading from '@/components/layouts/Loading';

const loadingContext = createContext<boolean>(false);
const onChangeLoadingContext = createContext<(loading: boolean) => void>(() => {});

export function useLoadingContext() {
  return {
    loading: useContext(loadingContext),
    onChangeLoading: useContext(onChangeLoadingContext),
  };
}

export function useLoading() {
  return useContext(loadingContext);
}

export function useOnChangeLoading() {
  return useContext(onChangeLoadingContext);
}

export default function LoadingProvider({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <loadingContext.Provider value={loading}>
      <onChangeLoadingContext.Provider value={setLoading}>
        {children}
        <Loading />
      </onChangeLoadingContext.Provider>
    </loadingContext.Provider>
  );
}
