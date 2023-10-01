import { createState } from '@/utils';

interface InitialState {
  isDarkMode: boolean;
  setDarkMode(): void;

  loading: boolean;
  setLoading(loading: boolean): void;
}

export const useCommonState = createState<InitialState>(
  (set) => ({
    isDarkMode: false,
    setDarkMode() {
      set((state) => ({ isDarkMode: !state.isDarkMode }));
    },

    loading: false,
    setLoading(loading) {
      set(() => ({ loading }));
    },
  }),
  {
    name: 'common',
    whitelist: ['isDarkMode'],
  },
);
