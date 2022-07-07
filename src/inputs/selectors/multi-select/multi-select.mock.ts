import { ItemType } from './item-list-plugin';
export const basicMockList: ItemType[] = [
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
  },
  {
    value: 'five',
    checked: false,
  },
  {
    value: 'six',
    checked: false,
  },
  {
    value: 'seven',
    checked: false,
  },
  {
    value: 'eight',
    checked: false,
  },
  {
    value: 'nine',
    checked: false,
  },
  {
    value: 'ten',
    checked: false,
  },
  {
    value: 'a',
    checked: false,
  },
  {
    value: 'b',
    checked: false,
  },
  {
    value: 'c',
    checked: false,
  },
];

export const searchMockList: ItemType[] = basicMockList.map((item) => {
  item.visible = true;
  return item;
});

export const descriptionMockList: ItemType[] = basicMockList.map((item) => {
  item.description = `${item.value} description`;
  return item;
});
