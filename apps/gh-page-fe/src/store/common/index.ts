import { createState } from '@/utils';

interface InitialState {
  isDarkMode: boolean;
  setDarkMode(): void;
}

export const useCommonState = createState<InitialState>((set) => ({
  isDarkMode: false,
  setDarkMode() {
    set((state) => ({ isDarkMode: !state.isDarkMode }));
  },
}));
