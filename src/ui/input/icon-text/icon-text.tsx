import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { TextInput, TextProps } from '@teambit/design.ui.input.text';
import styles from './icon-text.module.scss';

export type IconTextProps = {
  /**
   * An optional Icon element to be render at the end of the input, can be an Image or an Icon.
   */
  icon?: ReactElement;
  /**
   * input override class
   */
  inputClass?: string;
} & TextProps;

export function IconText({ icon, inputClass, className, style, value, ...rest }: IconTextProps) {
  return (
    <div className={classNames(styles.inputIcon, icon && styles.withIcon, className)} style={style}>
      <TextInput className={classNames(styles.input, inputClass)} value={value} {...rest} />
      {icon}
    </div>
  );
}
