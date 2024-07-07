import { capitalizeString } from './capitalizeString';

export const toCamelCase = (string: string) => {
  const [firstWord, ...rest] = string.split(/[-_]+/g);
  return rest.reduce((acc, word) => {
    return acc + capitalizeString(word);
  }, firstWord);
};
