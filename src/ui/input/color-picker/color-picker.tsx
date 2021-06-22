import React from 'react';
import classNames from 'classnames';
import { CheckboxLabel, CheckboxLabelProps } from '@teambit/base-ui.input.checkbox.label';
import styles from './color-picker.module.scss';
import sizes from './sizes.module.scss';
import { HiddenColorInput } from './hidden-color-input';

export type ColorPickerProps = {
  /**
   * The color to show in the color box, and also the color value for the Input.
   */
  value?: string;
  /**
   * Control the CSS class of the indicator.
   */
  indicatorClassName?: string;
  /**
   * box sizes
   */
  size?: 'm' | 'l';
} & CheckboxLabelProps;

export const DEFAULT_COLOR = '#babec9';

export function ColorPicker({
  value = DEFAULT_COLOR,
  onInputChanged,
  disabled,
  className,
  children,
  input = <HiddenColorInput onChange={onInputChanged} disabled={disabled} value={value} />,
  indicatorClassName,
  size,
  ...rest
}: ColorPickerProps) {
  const indicator = (
    <div className={classNames(styles.indicator, indicatorClassName)}>
      {children && <div className={styles.textBox}>{children}</div>}
      <div className={styles.colorBox} style={{ backgroundColor: value }} />
    </div>
  );
  return (
    <CheckboxLabel
      className={classNames(styles.label, sizes.pickerSizes, className)}
      input={input}
      indicator={indicator}
      {...rest}
      data-size={size}
    />
  );
}
