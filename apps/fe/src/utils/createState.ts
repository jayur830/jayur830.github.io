import { create, StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export function createState<T>(initialStateFn: StateCreator<T, [['zustand/immer', never]]>) {
  return create<T, [['zustand/immer', never]]>(immer(initialStateFn));
}
