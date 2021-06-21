import React, { useState } from 'react';
import { ColorPicker, DEFAULT_COLOR } from './color-picker';

export function ColorPickerExample() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  return <ColorPicker colorValue={color} onInputChanged={(e) => setColor(e.target.value)} />;
}
