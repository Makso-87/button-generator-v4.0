import { capitalizeString } from './capitalizeString';

export const getChangeMethodName = (name: string) => {
  return `change${capitalizeString(name)}`;
};
