import React, { useContext } from 'react';
import classes from './PreviewArea.module.scss';
import ButtonGeneratorContext from '../../utils/buttonGeneratorContext';
import { getCSSObject } from '../../utils/getCSSObject';
const PreviewArea = () => {
  const { values } = useContext(ButtonGeneratorContext);
  const result = getCSSObject(Object.entries(values));

  return <div>{<button style={result}>Кнопка</button>}</div>;
};

export default PreviewArea;
