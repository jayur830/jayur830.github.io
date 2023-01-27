import { Context, createContext, createElement, FC, PropsWithChildren, useContext as useReactContext } from 'react';

export interface NameMapObj<K extends keyof V, V> {
  value: V[K];
  context: Context<V[K]>;
}

type NameMap<Keys extends keyof Values, Values> = {
  [K in Keys]: NameMapObj<K, Values>;
};

export function createProvider<Props, Values>(useValue: (props: Props) => Values) {
  type Keys = keyof Values;

  let nameMap: NameMap<Keys, Values> | never;

  const Provider: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
    const obj = useValue(props as Props);

    nameMap = Object.keys(obj as any).reduce((result, key) => {
      if (!nameMap) {
        return {
          ...result,
          [key]: {
            context: createContext(obj[key as Keys]),
            value: obj[key as Keys],
          },
        };
      }

      return {
        ...result,
        [key]: {
          ...nameMap[key as Keys],
          value: obj[key as Keys],
        },
      };
    }, {}) as NameMap<Keys, Values>;

    return Object.keys(nameMap).reduceRight((children, key) => {
      const { context, value } = nameMap[key as Keys];
      return createElement(context.Provider, { value }, children);
    }, children) as JSX.Element;
  };

  function useContext<T extends NameMap<Keys, Values>[Keys]>(selector: (value: NameMap<Keys, Values>) => T): T['value'];
  function useContext(): { [Key in Keys]: Values[Key] };

  function useContext<T extends NameMap<Keys, Values>[Keys]>(selector?: (value: NameMap<Keys, Values>) => T) {
    if (!nameMap) {
      throw Error('The context consumer must be wrapped with its corresponding Provider');
    }

    if (selector) {
      const { context } = selector(nameMap);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useReactContext<T['value'] | never>(context as any);
    }

    return Object.keys(nameMap).reduce((result, key) => {
      return {
        ...result,
        // eslint-disable-next-line react-hooks/rules-of-hooks
        [key]: useReactContext(nameMap[key as keyof typeof nameMap].context),
      };
    }, {});
  }

  return { Provider, useContext };
}
