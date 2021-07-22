import React, { useState } from 'react';
import { Selectable } from './selectable';

export const BasicSelectable = ({ isSelected = false }: { isSelected?: boolean }) => {
  const [selected, setSelected] = useState(isSelected);
  return (
    <Selectable selected={selected} onClick={() => setSelected(!selected)}>
      S
    </Selectable>
  );
};

export const CircleSelectable = () => {
  const [selected, setSelected] = useState(false);
  return (
    <Selectable selected={selected} onClick={() => setSelected(!selected)} roundness="circle">
      C
    </Selectable>
  );
};
