import React from 'react';
import { Toggle } from './toggle';

export function BasicToggle() {
  return <Toggle onInputChanged={(e) => console.log('e', e.target.checked)} />;
}

export function DisabledToggle() {
  return <Toggle disabled />;
}

export function DisabledAndCheckedToggle() {
  return <Toggle disabled checked />;
}
