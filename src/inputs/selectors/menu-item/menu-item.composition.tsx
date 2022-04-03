import React, { useState } from 'react';
import { Icon } from '@teambit/design.elements.icon';
import { MenuItem } from './menu-item';

export function BasicMenuItem() {
  const [active, setActive] = useState(false);
  return (
    <MenuItem active={active} onClick={() => setActive(!active)}>
      Menu item
    </MenuItem>
  );
}

export function WithIcon() {
  const [active, setActive] = useState(false);
  return (
    <MenuItem icon={<Icon of="settings" />} active={active} onClick={() => setActive(!active)}>
      Menu item
    </MenuItem>
  );
}

export function WithImage() {
  const [active, setActive] = useState(false);
  return (
    <MenuItem
      icon={<img src="https://static.bit.dev/extensions-icons/react.svg" />}
      active={active}
      onClick={() => setActive(!active)}
    >
      Menu item
    </MenuItem>
  );
}

export function Active() {
  return (
    <MenuItem icon={<Icon of="settings" />} active>
      Active item
    </MenuItem>
  );
}

export function Interactive() {
  return (
    <MenuItem icon={<Icon of="settings" />} interactive>
      Hoverable item
    </MenuItem>
  );
}
