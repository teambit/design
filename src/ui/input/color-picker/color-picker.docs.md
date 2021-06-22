---
description: A color picker input.
labels: ['react', 'typescript', 'input', 'color']
---

import { useState } from 'react';
import { ColorPicker, DEFAULT_COLOR } from './color-picker';

A color type input component with all the native options, based on [checkbox from base-ui](https://bit.dev/teambit/base-ui/input/checkbox/label) scope.  
Basic example:

```js live
() => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  return (
    <ColorPicker value={color} onInputChanged={(e) => setColor(e.target.value)} size="l">
      Color
    </ColorPicker>
  );
};
```

`onInputChanged` function is required is to handle the input changes.
