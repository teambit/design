---
description: Multi select dropdown
labels: ['input', 'select', 'dropdown', 'list']
---

A Multi Select dropdown component that renders a list of items.

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
icon?: string;
/**
 * If the Item is selected or not.
 */
checked: boolean;
/**
 * Make item disbaled.
 */
disabled?: boolean;
/**
 * Custom element to be rendered as Item in the list.
 */
element?: ReactNode;
```
