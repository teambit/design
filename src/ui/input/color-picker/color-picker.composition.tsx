import React, { useState } from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { ColorPicker, DEFAULT_COLOR } from './color-picker';

export function PreviewColorPicker() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  return (
    <ColorPicker value={color} onInputChanged={(e) => setColor(e.target.value)} size="l">
      Select color
    </ColorPicker>
  );
}

export function DisabledColorPicker() {
  return (
    <ColorPicker disabled size="l" value="#d507c4">
      Select color
    </ColorPicker>
  );
}

export function ColorPickerWithNoText() {
  const [color, setColor] = useState('#23c76a');
  return <ColorPicker value={color} onInputChanged={(e) => setColor(e.target.value)} size="l" />;
}

export function DisabledColorPickerWithNoText() {
  return <ColorPicker disabled size="l" />;
}

export function DarkThemePreviewColorPicker() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  return (
    <div className={darkMode}>
      <ColorPicker value={color} onInputChanged={(e) => setColor(e.target.value)} size="l">
        Select color
      </ColorPicker>
    </div>
  );
}
