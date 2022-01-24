import React, { useState } from 'react';
import { MultiSelect, ItemType } from './multi-select';

export const BasicMultiSelect = () => {
  const placeholderText = 'Item';
  const [text, setText] = useState(placeholderText);
  const [list, setList] = useState<ItemType[]>([
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
    {
      value: 'four',
      checked: false,
      disabled: true,
    },
    {
      value: 'five',
      checked: false,
    },
  ]);

  const updateCount = () => {
    const checkedCount = list.filter((item) => item.checked).length;
    if (checkedCount > 1) {
      setText(`${checkedCount} ${placeholderText}s`);
    } else setText(`${checkedCount} ${placeholderText}`);
  };

  const onCheck = (value: string, checked: boolean) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = checked;
      }
      return item;
    });
    setList(newList);
    updateCount();
  };

  const onClear = () => {
    const newList = list.map((item, index) => {
      item.checked = false;
      return item;
    });
    setList(newList);
  };

  return (
    <MultiSelect
      placeholderText={text}
      itemsList={list}
      onCheck={onCheck}
      onClear={onClear}
      onSubmit={() => alert(`clicked on done! ${JSON.stringify(list)}`)}
    />
  );
};

export const MultiSelectWithDescription = () => {
  const placeholderText = 'Item';
  const [text, setText] = useState(placeholderText);
  const [list, setList] = useState<ItemType[]>([
    {
      value: 'one',
      description: 'one description',
      checked: false,
    },
    {
      value: 'two',
      description: 'two description',
      checked: false,
    },
    {
      value: 'three',
      description: 'three description',
      checked: false,
    },
    {
      value: 'four',
      description: 'four description',
      checked: false,
      disabled: true,
    },
    {
      value: 'five',
      description: 'five description',
      checked: false,
    },
  ]);

  const updateCount = () => {
    const checkedCount = list.filter((item) => item.checked).length;
    if (checkedCount > 1) {
      setText(`${checkedCount} ${placeholderText}s`);
    } else setText(`${checkedCount} ${placeholderText}`);
  };

  const onCheck = (value: string, checked: boolean) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = checked;
      }
      return item;
    });
    setList(newList);
    updateCount();
  };

  const onClear = () => {
    const newList = list.map((item, index) => {
      item.checked = false;
      return item;
    });
    setList(newList);
  };

  return (
    <MultiSelect
      placeholderText={text}
      itemsList={list}
      onCheck={onCheck}
      onClear={onClear}
      onSubmit={() => alert(`clicked on done! ${JSON.stringify(list)}`)}
    />
  );
};
