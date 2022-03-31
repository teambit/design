---
description: Menu entry with icon.
labels: ['menu', 'item', 'select']
---

import { useState } from 'react';
import { Icon } from '@teambit/design.elements.icon';
import { MenuItem } from './menu-item';

A Menu Item component that render content with icon option.

### Component usage

```js live
() => {
  const [active, setActive] = useState(false);
  return (
    <MenuItem Icon={<Icon of="settings" />} active={active} onClick={() => setActive(!active)}>
      Menu item
    </MenuItem>
  );
};
```
