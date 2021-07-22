import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './color-picker.module.scss';
import sizes from './sizes.module.scss';
import { ColorsBox, ColorsBoxProps } from './colors-box';

export type ColorPickerProps = {
  /**
   * box sizes
   */
  size?: 'm' | 'l';
  disabled?: boolean;
  /**
   * Control the CSS class of the colors box.
   */
  colorsBoxClassName?: string;
} & ColorsBoxProps;

type ColorPickerState = {
  isHidden: boolean;
};

export const DEFAULT_COLOR = '#BABEC9';

export class ColorPicker extends PureComponent<ColorPickerProps, ColorPickerState> {
  state = {
    isHidden: true,
  };

  handleOpen = () => {
    const { isHidden } = this.state;
    this.setState({ isHidden: !isHidden });
  };

  render() {
    const {
      value = DEFAULT_COLOR,
      size,
      disabled,
      colorsBoxClassName,
      onSelect,
      className,
      children,
      ...rest
    } = this.props;
    const { isHidden } = this.state;
    return (
      <div
        className={classNames(
          styles.colorPicker,
          !isHidden && styles.isOpen,
          sizes.pickerSizes,
          disabled && styles.disabled,
          className
        )}
        data-size={size}
        onClick={this.handleOpen}
        {...rest}
      >
        {children && <div className={styles.textBox}>{children}</div>}
        <div className={classNames(styles.colorBox, !children && styles.noText)} style={{ backgroundColor: value }} />
        <ColorsBox value={value} onSelect={onSelect} hidden={isHidden} />
      </div>
    );
  }
}
