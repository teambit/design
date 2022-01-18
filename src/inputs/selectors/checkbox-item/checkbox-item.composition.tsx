import React from 'react';
import { CheckboxItem } from './checkbox-item';

export const BasicCheckboxItem = () => {
  return <CheckboxItem onInputChanged={(e) => console.log(e.target.checked)}>hello world!</CheckboxItem>;
};

export const DisabledCheckboxItem = () => {
  return <CheckboxItem disabled>hello world!</CheckboxItem>;
};

export const CheckedCheckboxItem = () => {
  return <CheckboxItem checked>hello world!</CheckboxItem>;
};
