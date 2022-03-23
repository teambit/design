import React, { useState } from 'react';
import { MenuItem } from './menu-item';

export function Preview() {
  const [active, setActive] = useState(false);
  return (
    <MenuItem icon="settings" active={active} onClick={() => setActive(!active)}>
      Menu item
    </MenuItem>
  );
}

export function Active() {
  return (
    <MenuItem icon="settings" active>
      Active item
    </MenuItem>
  );
}

export function Interactive() {
  return (
    <MenuItem icon="settings" interactive>
      Hoverable item
    </MenuItem>
  );
}
