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

  const onCheck = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = e.target.checked;
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
      placeholder={text}
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

  const onCheck = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = e.target.checked;
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
      placeholder={text}
      itemsList={list}
      onCheck={onCheck}
      onClear={onClear}
      onSubmit={() => alert(`clicked on done! ${JSON.stringify(list)}`)}
    />
  );
};

export const MultiSelectWithIcons = () => {
  const placeholderText = 'Item';
  const [text, setText] = useState(placeholderText);
  const [list, setList] = useState<ItemType[]>([
    {
      value: 'Vue',
      icon: 'https://static.bit.dev/extensions-icons/vuejs.svg',
      checked: false,
      description: 'Some text',
    },
    {
      value: 'Angular',
      icon: 'https://static.bit.dev/extensions-icons/angular.svg',
      checked: false,
      description: 'Some text',
    },
    {
      value: 'React',
      icon: 'https://static.bit.dev/extensions-icons/react.svg',
      checked: false,
    },
    {
      value: 'Node JS',
      icon: 'https://static.bit.dev/extensions-icons/nodejs.svg',
      checked: false,
      disabled: true,
    },
    {
      value: 'warning',
      icon: 'note',
      checked: false,
    },
  ]);

  const updateCount = () => {
    const checkedCount = list.filter((item) => item.checked).length;
    if (checkedCount > 1) {
      setText(`${checkedCount} ${placeholderText}s`);
    } else setText(`${checkedCount} ${placeholderText}`);
  };

  const onCheck = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = e.target.checked;
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
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .dropClass {
      width: 250px;
    }
    `,
        }}
      />
      <MultiSelect
        placeholder={text}
        itemsList={list}
        onCheck={onCheck}
        onClear={onClear}
        onSubmit={() => alert(`clicked on done! ${JSON.stringify(list)}`)}
        dropClass="dropClass"
      />
    </>
  );
};

export const CustomMultiSelect = () => {
  const placeholderText = 'Item';
  const [text, setText] = useState(placeholderText);
  const [list, setList] = useState<ItemType[]>([
    {
      value: 'one',
      checked: false,
      element: (
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 'auto', paddingLeft: 16 }}>
          <span>Custom element</span>
        </div>
      ),
    },
    {
      value: 'two',
      checked: false,
      element: (
        <div style={{ display: 'flex', justifyContent: 'space-between', flex: 'auto', paddingLeft: 16 }}>
          <div>Custom element</div>
          <div style={{ display: 'flex' }}>
            <img src="https://static.bit.dev/extensions-icons/react.svg" style={{ width: 16 }} />
          </div>
        </div>
      ),
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

  const onCheck = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = list.map((item, index) => {
      if (item.value === value) {
        item.checked = e.target.checked;
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
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .dropClass {
      width: 250px;
    }
    `,
        }}
      />
      <MultiSelect
        placeholder={<span style={{ color: 'red' }}>Custom placeholder {text}</span>}
        itemsList={list}
        onCheck={onCheck}
        onClear={onClear}
        onSubmit={() => alert(`clicked on done! ${JSON.stringify(list)}`)}
        dropClass="dropClass"
      />
    </>
  );
};
