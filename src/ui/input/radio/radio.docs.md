---
description: A radio input.
labels: ['react', 'typescript', 'input', 'switch', 'radio']
---

import { Radio } from './radio';

A radio component with all the native options, based on [checkbox from base-ui](https://bit.dev/teambit/base-ui/input/checkbox/label) scope.  
The size is based on `em` so we can change the size by changing the font-size.  
Basic example:

```js live
<>
  <Radio name="option" value="one" />
  <br />
  <Radio name="option" value="two" />
</>
```

Different size example:

```js live
<>
  <Radio style={{ fontSize: 24 }} name="big-option" value="one" />
  <br />
  <Radio style={{ fontSize: 24 }} name="big-option" value="two" />
</>
```
