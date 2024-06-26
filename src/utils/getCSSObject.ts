import { TCSSPropertiesTuple } from './buttonGeneratorContext';
import { cssPropertiesMapping } from './getCSSString';

export const getCSSObject = (data: TCSSPropertiesTuple[]): Record<string, string> => {
  return data.reduce((acc: Record<string, string>, [key, value]) => {
    acc[cssPropertiesMapping[key]] = `${value.value}${value.units}`;
    return acc;
  }, {});
};
