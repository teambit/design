import React, { useState } from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { ColorPicker, DEFAULT_COLOR } from './color-picker';

export function PreviewColorPicker() {
  const [color, setColor] = useState<string>(DEFAULT_COLOR);
  return (
    <ColorPicker value={color} onSelect={(value) => setColor(value.toString())} size="l" style={{ margin: 100 }}>
      Select color
    </ColorPicker>
  );
}

export function DisabledColorPicker() {
  return (
    <ColorPicker onSelect={() => {}} disabled size="l" value="#897DEC">
      Select color
    </ColorPicker>
  );
}

export function ColorPickerWithNoText() {
  const [color, setColor] = useState('#23C76A');
  return <ColorPicker value={color} onSelect={(value) => setColor(value.toString())} size="l" />;
}

export function DisabledColorPickerWithNoText() {
  return <ColorPicker onSelect={() => {}} disabled size="l" />;
}

export function DarkThemePreviewColorPicker() {
  const [color, setColor] = useState(DEFAULT_COLOR);
  return (
    <div className={darkMode} style={{ padding: 16, borderRadius: 4, background: '#0c0c0c' }}>
      <ColorPicker value={color} onSelect={(value) => setColor(value.toString())} size="l">
        Select color
      </ColorPicker>
    </div>
  );
}
