import React, { useContext } from 'react';
import ButtonGeneratorContext from '../../utils/buttonGeneratorContext';
import { getCSSString } from '../../utils/getCSSString';

const ResultCodeArea = () => {
  const { values } = useContext(ButtonGeneratorContext);
  const result = getCSSString(Object.entries(values));

  return (
    <div>
      <pre>{result}</pre>
    </div>
  );
};
export default ResultCodeArea;
