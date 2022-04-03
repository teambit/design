import React from 'react';
import { Icon } from '@teambit/design.elements.icon';
import { CheckboxItem } from './checkbox-item';

export const BasicCheckboxItem = () => {
  return <CheckboxItem onInputChanged={(e) => console.log(e.target.checked)}>hello world!</CheckboxItem>;
};

export const CheckboxItemWithDescription = () => {
  return (
    <CheckboxItem description="description text example" onInputChanged={(e) => console.log(e.target.checked)}>
      hello world!
    </CheckboxItem>
  );
};

export const DisabledCheckboxItem = () => {
  return <CheckboxItem disabled>hello world!</CheckboxItem>;
};

export const DisabledCheckboxItemWithDescription = () => {
  return (
    <CheckboxItem description="description text example" disabled onInputChanged={(e) => console.log(e.target.checked)}>
      hello world!
    </CheckboxItem>
  );
};

export const CheckedCheckboxItem = () => {
  return <CheckboxItem checked>hello world!</CheckboxItem>;
};

export const CheckboxItemWithIcon = () => {
  return (
    <CheckboxItem icon={<Icon of="note" />} onInputChanged={(e) => console.log(e.target.checked)}>
      hello world!
    </CheckboxItem>
  );
};

export const CheckboxItemWithImage = () => {
  return (
    <CheckboxItem
      icon={<img src="https://static.bit.dev/extensions-icons/vuejs.svg" />}
      onInputChanged={(e) => console.log(e.target.checked)}
    >
      hello world!
    </CheckboxItem>
  );
};

export const CheckboxItemWithDescriptionAndIcon = () => {
  return (
    <CheckboxItem
      description="description text example"
      icon={<Icon of="note" />}
      onInputChanged={(e) => console.log(e.target.checked)}
    >
      hello world!
    </CheckboxItem>
  );
};
