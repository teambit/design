---
description: Checkbox entry with icon.
labels: ['checkbox', 'menu', 'item', 'select']
---

import { Icon } from '@teambit/design.elements.icon';
import { CheckboxItem } from './checkbox-item';

A Checkbox Item component that render content with icon option.

### Component usage

```js live
<CheckboxItem
  description="description text example"
  icon={<Icon of="note" />}
  onInputChanged={(e) => console.log(e.target.checked)}
>
  hello world!
</CheckboxItem>
```
