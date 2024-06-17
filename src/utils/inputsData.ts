import { ChangeEventHandler } from 'react';

export type TInput = {
  name: string;
  value?: string | number;
  label?: string;
  type?: string;
  defaultValue?: string | number;
  tabName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onInput?: ChangeEventHandler<HTMLInputElement>;
  switchable?: boolean;
};

export type TTab = {
  tabName: string;
  name: string;
  inputs: TInput[];
};

export const tabs = [
  {
    tabName: 'general-settings',
    name: 'Основные параметры',
    inputs: [
      {
        name: 'buttonBg',
        label: 'Цвет фона',
        type: 'color',
        defaultValue: '#4058ce',
        tabName: 'general',
      },
      {
        name: 'buttonWidth',
        label: 'Ширина кнопки',
        type: 'range',
        defaultValue: 100,
        tabName: 'general',
      },
      {
        name: 'buttonHeight',
        label: 'Высота кнопки',
        type: 'range',
        defaultValue: 40,
        tabName: 'general',
      },
      {
        name: 'buttonBorderRadius',
        label: 'Скругление углов',
        type: 'range',
        defaultValue: 5,
        tabName: 'general',
        switchable: true,
      },
    ],
  },
  {
    tabName: 'text-settings',
    name: 'Параметры текста',
    inputs: [],
  },
  {
    tabName: 'additional-settings',
    name: 'Дополнительные параметры',
    inputs: [],
  },
  {
    tabName: 'hover-settings',
    name: 'Эффект наведения',
    inputs: [],
  },
];
