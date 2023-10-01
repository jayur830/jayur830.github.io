'use client';

import { PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache, { EmotionCache, Options } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

export interface ThemeRegistryProps {
  options: Options;
}

export default function ThemeRegistry(props: PropsWithChildren<ThemeRegistryProps>) {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    let inserted: string[] = [];
    return {
      cache: {
        ...cache,
        compat: true,
        insert(...args) {
          const [, serialized] = args;
          if (cache.inserted[serialized.name] === undefined) {
            inserted.push(serialized.name);
          }
          return cache.insert(...args);
        },
      } as EmotionCache,
      flush() {
        const prevInserted = inserted;
        inserted = [];
        return prevInserted;
      },
    };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    const styles = names.reduce((result, name) => result + cache.inserted[name], '');
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: options.prepend ? `@layer emotion {${styles}}` : styles,
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
