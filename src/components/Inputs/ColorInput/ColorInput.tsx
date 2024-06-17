import React from 'react';
import { TInput } from '../../../utils/inputsData';

const ColorInput = (props: TInput) => {
  const { name, label, onChange, value } = props;

  return (
    <div>
      <span>{label}</span>
      <input onChange={onChange} name={name} type='color' value={value} />
      <input onChange={onChange} name={name} type='text' value={value} />
    </div>
  );
};

export default ColorInput;
