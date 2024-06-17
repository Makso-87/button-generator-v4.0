import React, { useState } from 'react';
import classes from './RangeInput.module.scss';
import { TInput } from '../../../utils/inputsData';
import Checkbox from '../Checkbox/Checkbox';
const RangeInput = (props: TInput) => {
  const [isActive, setIsActive] = useState(true);
  const { name, label, onChange, value, switchable = false } = props;

  const onChangeActivity = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <span>{label}</span>
      {switchable ? <Checkbox onChange={onChangeActivity} initialValue={true} /> : null}
      <input onChange={onChange} name={name} type='range' value={value} disabled={!isActive} />
      <input onChange={onChange} name={name} type='text' value={value} disabled={!isActive} />
    </div>
  );
};

export default RangeInput;
