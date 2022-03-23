import React from 'react';
import classNames from 'classnames';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import { Text, TextProps } from '@teambit/design.ui.input.text';
import styles from './icon-text.module.scss';

export type IconTextProps = {
  /**
   * icon name
   */
  icon?: string;
  /**
   * icon override class
   */
  iconClass?: string;
  /**
   * A function that is trigger when the user click on the icon.
   */
  onSubmit?: () => void;
  /**
   * input override class
   */
  inputClass?: string;
} & TextProps;

export function IconText({
  icon = 'discovery',
  iconClass,
  onSubmit,
  inputClass,
  className,
  style,
  value,
  ...rest
}: IconTextProps) {
  return (
    <div className={classNames(styles.inputIcon, className)} style={style}>
      <Text className={classNames(styles.input, inputClass)} value={value} {...rest} />
      <BaseIcon
        className={classNames(styles.icon, onSubmit && styles.clickable, iconClass)}
        of={`bitcon-${icon}`}
        onClick={onSubmit}
      />
    </div>
  );
}
