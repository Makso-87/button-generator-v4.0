import { createContext } from 'react';
import { TContextProviderMethod } from '../components/ContextProvider/ContextProvider';

export type TCSSPropertiesData = { value: string | number; units: string };

export type TCSSPropertiesTuple = [string, TCSSPropertiesData];

export type TContext = {
  values: Record<string, TCSSPropertiesData>;
  methods: Record<string, TContextProviderMethod>;
};

const defaultValue: TContext = {
  values: {},
  methods: {},
};
export default createContext(defaultValue);
