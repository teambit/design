import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps, Input } from '@teambit/base-ui.input.checkbox.label';
import styles from './color-picker.module.scss';

export type ColorPickerProps = {
  /**
   * The color to show in the color box, and also the color value for the Input.
   */
  colorValue?: string;
} & CheckboxLabelProps;

export const DEFAULT_COLOR = '#babec9';

export function ColorPicker({
  colorValue = DEFAULT_COLOR,
  onInputChanged,
  disabled,
  className,
  children = 'Select color',
  ...rest
}: ColorPickerProps) {
  const input = <Input type="color" onChange={onInputChanged} disabled={disabled} value={colorValue} />;
  const indicator = (
    <div className={styles.indicator}>
      <div className={styles.textBox}>{children}</div>
      <div className={styles.colorBox} style={{ backgroundColor: colorValue }} />
    </div>
  );
  return (
    <CheckboxLabel className={classNames(styles.label, className)} input={input} indicator={indicator} {...rest} />
  );
}
