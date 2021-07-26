import React, { useState } from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { ColorPicker, DEFAULT_BACKGROUND_ICON_COLOR } from './color-picker';

export function PreviewColorPicker() {
  const [color, setColor] = useState<string>(DEFAULT_BACKGROUND_ICON_COLOR);
  return (
    <ColorPicker value={color} onColorSelect={(value) => setColor(value)} size="l" style={{ margin: 100 }}>
      Select color
    </ColorPicker>
  );
}

export function DisabledColorPicker() {
  return (
    <ColorPicker disabled size="l" value="#897DEC">
      Select color
    </ColorPicker>
  );
}

export function ColorPickerWithNoText() {
  const [color, setColor] = useState('#23C76A');
  return <ColorPicker value={color} onColorSelect={(value) => setColor(value)} size="l" />;
}

export function DisabledColorPickerWithNoText() {
  return <ColorPicker disabled size="l" />;
}

export function DarkThemePreviewColorPicker() {
  const [color, setColor] = useState(DEFAULT_BACKGROUND_ICON_COLOR);
  return (
    <div className={darkMode} style={{ padding: 16, borderRadius: 4, background: '#0c0c0c' }}>
      <ColorPicker value={color} onColorSelect={(value) => setColor(value)} size="l">
        Select color
      </ColorPicker>
    </div>
  );
}
