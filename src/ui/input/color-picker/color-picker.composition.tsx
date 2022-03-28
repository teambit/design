import React, { useState } from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { ColorPicker, DEFAULT_BACKGROUND_ICON_COLOR } from './color-picker';

export function PreviewColorPicker() {
  const [color, setColor] = useState<string>(DEFAULT_BACKGROUND_ICON_COLOR);
  return (
    <ColorPicker
      value={color}
      onColorSelect={(value) => setColor(value)}
      size="l"
      style={{ margin: '16px 100px 230px 16px' }}
    >
      Select color
    </ColorPicker>
  );
}

export function DisabledColorPicker() {
  return (
    <ColorPicker disabled size="l" value="#897DEC" style={{ margin: '16px 100px 230px 16px' }}>
      Select color
    </ColorPicker>
  );
}

export function ColorPickerWithNoText() {
  const [color, setColor] = useState('#23C76A');
  return (
    <div>
      <ColorPicker value={color} onColorSelect={setColor} size="l" style={{ margin: '16px 210px 230px 16px' }} />
    </div>
  );
}

export function DisabledColorPickerWithNoText() {
  return <ColorPicker disabled size="l" style={{ margin: '16px 210px 230px 16px' }} />;
}

export function DarkThemePreviewColorPicker() {
  const [color, setColor] = useState(DEFAULT_BACKGROUND_ICON_COLOR);
  return (
    <div className={darkMode} style={{ padding: '16px 100px 230px 16px', borderRadius: 4, background: '#0c0c0c' }}>
      <ColorPicker value={color} onColorSelect={setColor} size="l">
        Select color
      </ColorPicker>
    </div>
  );
}

export function CustomColorsListColorPicker() {
  const [color, setColor] = useState<string>(DEFAULT_BACKGROUND_ICON_COLOR);
  return (
    <ColorPicker
      value={color}
      onColorSelect={(value) => setColor(value)}
      size="l"
      style={{ margin: '16px 100px 230px 16px' }}
      colorsList={[
        '#C0CA36',
        '#3E85F3',
        '#6C707C',
        '#878C9A',
        '#BABEC9',
        '#CCCFD4',
        '#EDEDED',
        '#A79B8E',
        '#616161',
        '#7A5548',
        '#8F24A9',
        '#9F69AF',
        '#B39DDB',
        '#7886CA',
        '#3E51B5',
        '#2B2B2B',
        '#009BE4',
        '#009688',
        '#008043',
        '#2BB679',
        '#7BB343',
        '#FFE922',
        '#F7BF2A',
        '#F29309',
        '#F16C07',
        '#F65120',
        '#E87C73',
        '#D70203',
        '#DA1C60',
        '#AF1457',
      ]}
    >
      Select color
    </ColorPicker>
  );
}
