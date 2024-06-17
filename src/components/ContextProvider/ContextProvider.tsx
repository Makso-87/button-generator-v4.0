import React, { ReactNode, useState } from 'react';
import ButtonGeneratorContext from '../../utils/buttonGeneratorContext';
import { tabs } from '../../utils/inputsData';
import { getChangeMethodName } from '../../utils/getChangeMethodName';

export type TContextProviderMethod = (value: string) => void;

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState: Record<string, string | number> = {};
  const methods: Record<string, TContextProviderMethod> = {};

  for (const tab in tabs) {
    tabs[tab].inputs.forEach((item) => {
      initialState[item.name] = item.defaultValue;

      methods[getChangeMethodName(item.name)] = (value: string | number) => {
        setState({ ...state, [item.name]: value });
      };
    });
  }

  const [state, setState] = useState(initialState);

  return (
    <ButtonGeneratorContext.Provider value={{ values: { ...state }, methods }}>
      {children}
    </ButtonGeneratorContext.Provider>
  );
};

export default ContextProvider;
