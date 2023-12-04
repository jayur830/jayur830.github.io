import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type PersistOptions<T> =
  | {
      name?: string;
      whitelist?: (keyof T)[];
    }
  | {
      name?: string;
      blacklist?: (keyof T)[];
    };

export function createState<T extends {}>(
  initialStateFn: StateCreator<T, [['zustand/devtools', unknown], ['zustand/persist', unknown], ['zustand/immer', unknown]]>,
  persistOptions?: PersistOptions<T>,
) {
  return create<T, [['zustand/devtools', unknown], ['zustand/persist', unknown], ['zustand/immer', unknown]]>(
    devtools(
      persist(immer(initialStateFn), {
        name: persistOptions?.name || initialStateFn.name,
        partialize(state) {
          const whitePersistOptions = persistOptions as Extract<typeof persistOptions, { whitelist?: (keyof T)[] }>;
          const blackPersistOptions = persistOptions as Extract<typeof persistOptions, { blacklist?: (keyof T)[] }>;

          if (whitePersistOptions?.whitelist) {
            return Object.entries(state).reduce((result, [key, value]) => {
              if ((whitePersistOptions?.whitelist || []).includes(key as keyof T) || typeof value === 'function') {
                return {
                  ...result,
                  [key]: value,
                };
              }

              return result;
            }, {}) as never;
          }

          if (blackPersistOptions?.blacklist) {
            return Object.entries(state).reduce((result, [key, value]) => {
              if (!(blackPersistOptions?.blacklist || []).includes(key as keyof T) || typeof value === 'function') {
                return {
                  ...result,
                  [key]: value,
                };
              }

              return result;
            }, {}) as never;
          }

          return state as never;
        },
      }),
    ),
  );
}
