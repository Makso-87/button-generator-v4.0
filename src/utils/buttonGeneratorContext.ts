import { createContext } from 'react';
import { TContextProviderMethod } from '../components/ContextProvider/ContextProvider';

export type TContext = {
  values: Record<string, string | number>;
  methods: Record<string, TContextProviderMethod>;
};

const defaultValue: TContext = {
  values: {},
  methods: {},
};
export default createContext(defaultValue);
