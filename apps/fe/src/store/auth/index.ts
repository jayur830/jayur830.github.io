import { createState } from '@/utils';

interface InitialState {
  authorization: `Bearer ${string}` | null;
  setAuthorization(authToken: string): void;
}

export const useAuthState = createState<InitialState>((set) => ({
  authorization: null,
  setAuthorization(authToken) {
    set(() => ({ authorization: `Bearer ${authToken}` }));
  },
}));
