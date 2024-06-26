import { TCSSPropertiesTuple } from './buttonGeneratorContext';

export const cssPropertiesMapping: Record<string, string> = {
  buttonBg: 'background',
  buttonWidth: 'width',
  buttonHeight: 'height',
  buttonBorderRadius: 'border-radius',
};

export const getCSSString = (data: TCSSPropertiesTuple[]): string => {
  const space = ' ';

  return (
    data.reduce((acc: string, [key, value]) => {
      return (
        acc + `${space.repeat(4)}${cssPropertiesMapping[key]}: ${value.value}${value.units};\n`
      );
    }, '{\n') + '}'
  );
};
