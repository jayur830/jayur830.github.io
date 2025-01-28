import type { PropsWithChildren, ReactNode } from 'react';

export type PropsWithSegment<T extends string> = PropsWithChildren<{ [key in T]: ReactNode }>;
