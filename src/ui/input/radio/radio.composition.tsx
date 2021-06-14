import React from 'react';
import { Radio } from './radio';

export const DefaultRadio = () => {
  return <Radio />;
};

export const CheckedRadio = () => {
  return <Radio checked />;
};

export const DisabledRadio = () => {
  return <Radio disabled />;
};

export const DisabledAndCheckedRadio = () => {
  return <Radio disabled checked />;
};
