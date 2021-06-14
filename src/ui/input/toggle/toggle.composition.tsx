import React from 'react';
import { Toggle } from './toggle';

export const BasicToggle = () => {
  return <Toggle />;
};

export const DisabledToggle = () => {
  return <Toggle disabled />;
};

export const DisabledAndCheckedToggle = () => {
  return <Toggle disabled checked />;
};
