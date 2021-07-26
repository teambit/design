---
description: A color picker input.
labels: ['react', 'typescript', 'input', 'color']
---

import { useState } from 'react';
import { ColorPicker, DEFAULT_BACKGROUND_ICON_COLOR } from './color-picker';

A color picker component.  
Basic example:

```js live
() => {
  const [color, setColor] = useState(DEFAULT_BACKGROUND_ICON_COLOR);
  return (
    <ColorPicker value={color} onColorSelect={(value) => setColor(value)} size="l">
      Color
    </ColorPicker>
  );
};
```

`onColorSelect` function is required is to handle the changes.

<iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjuFzg6Qsc3UKhJ5HZKQZE2%2FBase-UI-Button%3Fnode-id%3D1318%253A1815" allowFullScreen></iframe>
