import React, { useState } from 'react';
import { MenuItem } from '@teambit/design.inputs.selectors.menu-item';
import { CheckboxItem } from '@teambit/design.inputs.selectors.checkbox-item';
import { ButtonsPlugin } from './buttons-plugin';
import { Dropdown } from './dropdown';

const styleContainer = { padding: '11px 11px 70px' };

export const ForcedOpen = () => (
  <div style={styleContainer}>
    <Dropdown
      placeholder="placeholder"
      open={true} // force open
    >
      dropdown menu
    </Dropdown>
  </div>
);

export const Uncontrolled = () => (
  <div style={styleContainer}>
    <Dropdown placeholder="placeholder">dropdown menu</Dropdown>
  </div>
);

export const DropdownWithoutBorderOnPlaceholder = () => (
  <div style={styleContainer}>
    <Dropdown placeholder="placeholder" placeholderBorder={false}>
      dropdown menu
    </Dropdown>
  </div>
);

export const DropdownWithCustomlaceholder = () => (
  <div style={styleContainer}>
    {/* @ts-ignore */}
    <Dropdown placeholder={<div style={{ padding: 8, color: 'red' }}>Custom placeholder</div>}>dropdown menu</Dropdown>
  </div>
);

export const DropdownWithItemList = () => {
  const [selected, setSelected] = useState('');
  const mockList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  return (
    <div style={styleContainer}>
      <Dropdown placeholder={selected || 'placeholder'} clickToggles>
        {mockList.map((value, index) => (
          <MenuItem key={index} onClick={() => setSelected(value)}>
            {value}
          </MenuItem>
        ))}
      </Dropdown>
    </div>
  );
};

export const DropdownWithCheckboxList = () => {
  const mockList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  return (
    <div style={styleContainer}>
      <Dropdown placeholder="placeholder">
        {mockList.map((value, index) => (
          <CheckboxItem key={index}>{value}</CheckboxItem>
        ))}
      </Dropdown>
    </div>
  );
};

export const DropdownWithButtons = () => {
  return (
    <div style={styleContainer}>
      <Dropdown
        bottomPlugin={
          <ButtonsPlugin onClear={() => alert('click on clear')} onSubmit={() => alert('click on submit')} />
        }
        placeholder="placeholder"
      >
        dropdown menu
      </Dropdown>
    </div>
  );
};
