import React, { ChangeEventHandler, FC, useState } from 'react';

export type TCheckbox = {
  onChange: ChangeEventHandler;
  initialValue?: boolean;
};
const Checkbox: FC<TCheckbox> = ({ onChange, initialValue = false }) => {
  const [checked, setChecked] = useState(initialValue);

  return (
    <div>
      <label htmlFor=''></label>
      <input
        onChange={(e) => {
          onChange(e);
          setChecked(!checked);
        }}
        type='checkbox'
        checked={checked}
      />
    </div>
  );
};

export default Checkbox;
