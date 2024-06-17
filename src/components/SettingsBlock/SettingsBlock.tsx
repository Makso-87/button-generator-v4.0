import React, { ChangeEventHandler, ReactElement, useContext } from 'react';
import classes from './SettingsBlock.module.scss';
import { tabs, TInput, TTab } from '../../utils/inputsData';
import Panel from '../Panel/Panel';
import ColorInput from '../Inputs/ColorInput/ColorInput';
import ButtonGeneratorContext from '../../utils/buttonGeneratorContext';
import RangeInput from '../Inputs/RangeInput/RangeInput';
import { getChangeMethodName } from '../../utils/getChangeMethodName';

type TInputAttrs = {
  key: string;
  name: string;
  label: string;
  tabName: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  switchable?: boolean;
};

const getInput = (data: TInput, type: string) => {
  const { methods, values } = useContext(ButtonGeneratorContext);
  const { name, label, tabName, switchable } = data;

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target as HTMLInputElement;
    methods[getChangeMethodName(name)]?.(value);
  };

  const attrs: TInputAttrs = {
    key: name,
    name,
    label,
    tabName,
    onChange,
    value: values[name],
    switchable,
  };

  return getInputByType[type]?.(attrs);
};

const getInputByType: Record<string, (attrs: TInputAttrs) => ReactElement> = {
  color: (attrs) => <ColorInput {...attrs} />,
  range: (attrs) => <RangeInput {...attrs} />,
};

const SettingsBlock = () => {
  return (
    <div className={classes.SettingsBlock}>
      {tabs.map((tab: TTab) => {
        const { name, tabName, inputs } = tab;

        return (
          <Panel name={name} key={tabName}>
            {inputs.length
              ? inputs.map((input) => {
                  return getInput(input, input.type);
                })
              : null}
          </Panel>
        );
      })}
    </div>
  );
};

export default SettingsBlock;
