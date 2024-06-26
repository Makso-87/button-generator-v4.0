import React, { ReactNode, useState } from 'react';
import ButtonGeneratorContext, { TCSSPropertiesData } from '../../utils/buttonGeneratorContext';
import { tabs } from '../../utils/inputsData';
import { getChangeMethodName } from '../../utils/getChangeMethodName';

export type TContextProviderMethod = (value: string) => void;

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState: Record<string, TCSSPropertiesData> = {};
  const methods: Record<string, TContextProviderMethod> = {};

  for (const tab in tabs) {
    tabs[tab].inputs.forEach((item) => {
      initialState[item.name] = { value: item.defaultValue, units: item.units };

      methods[getChangeMethodName(item.name)] = (value: string | number) => {
        setState({ ...state, [item.name]: { value, units: item.units } });
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
