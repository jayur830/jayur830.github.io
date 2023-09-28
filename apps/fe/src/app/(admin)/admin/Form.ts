import { createProvider } from 'react-constate';
import { UseFormReturn } from 'react-hook-form';

import FormItem from './FormItem';

export interface FormProviderProps<FormDataType> {
  form: UseFormReturn<FormDataType>;
  onSubmit?(data: FormDataType): void | Promise<void>;
}

function FormProvider({ form, onSubmit }: FormProviderProps<typeof form extends infer F ? F : never>) {
  const { control, register, handleSubmit, setValue } = form;

  return {
    control,
    register,
    handleSubmit,
    onSubmit,
  };
}

const { Provider, useContext: useFormContext } = createProvider(FormProvider);

export const Form = Object.assign(Provider, { Item: FormItem });
export { useFormContext };

interface FooProps {
  a: string;
  b: number;
  c: boolean;
}

function Foo<T>({ a, b, c }: FooProps) {
  return {
    a,
    b,
    c,
  };
}

const { Provider: FooProvider } = createProvider(Foo);
