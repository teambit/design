import React from 'react';
import { Radio } from './radio';

export const DefaultRadio = () => {
  return (
    <div>
      <Radio name="colors" value="blue">
        {' '}
        blue
      </Radio>
      <br />
      <Radio name="colors" value="red">
        {' '}
        red
      </Radio>
    </div>
  );
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
