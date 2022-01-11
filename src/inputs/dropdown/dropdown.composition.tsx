import React from 'react';
import { Dropdown } from './dropdown';

export const ForcedOpen = () => (
  <div style={{ padding: '11px 11px 70px' }}>
    <Dropdown
      placeholder="placeholder"
      open={true} // force open
    >
      tooltip menu
    </Dropdown>
  </div>
);

export const Uncontrolled = () => (
  <div style={{ padding: '11px 11px 70px' }}>
    <Dropdown placeholder="placeholder">tooltip menu</Dropdown>
  </div>
);
