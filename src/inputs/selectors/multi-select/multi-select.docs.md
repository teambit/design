---
description: Multi select dropdown
labels: ['input', 'select', 'dropdown', 'list']
---

import { useState } from 'react';
import { MultiSelect } from './multi-select';

A Multi Select dropdown component that renders a list of items(`ItemType`).

### Component usage

Basic usage:

```js live
() => {
  const basicMockList = [
    {
      value: 'one',
      checked: false,
    },
    {
      value: 'two',
      checked: false,
    },
    {
      value: 'three',
      checked: false,
    },
  ];
  const [list, setList] = useState(basicMockList);

  const onCheck = (value, e) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = e.target.checked;
      }
      return item;
    });
    setList(newList);
  };

  return <MultiSelect placeholderContent="Items" itemsList={list} onCheck={onCheck} />;
};
```

### Item Type

Use `ItemType` to create a list.
When using `element`, `icon` and `description` will not be rendered.

```
/**
* Value to be rendered in the list.
*/
value: string;
/**
* Description to be rendered below the text.
*/
description?: string;
/**
* Icon to be rendered right to the text.
*/
icon?: ReactElement;
/**
* If the Item is selected or not.
*/
checked: boolean;
/**
* Make item disbaled.
*/
disabled?: boolean;
/**
* Make item visible or not.
*/
visible?: boolean;
/**
* Custom element to be rendered as Item in the list.
*/
element?: ReactNode;
```
