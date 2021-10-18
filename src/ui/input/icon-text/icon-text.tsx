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
   *
   */
  onIconClick?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * input override class
   */
  inputClass?: string;
} & TextProps;

export function IconText({
  icon = 'discovery',
  iconClass,
  onIconClick,
  inputClass,
  className,
  style,
  ...rest
}: IconTextProps) {
  return (
    <div className={classNames(styles.inputIcon, className)} style={style}>
      <Text className={classNames(styles.input, inputClass)} {...rest} />
      <BaseIcon
        className={classNames(styles.icon, onIconClick && styles.clickable, iconClass)}
        of={`bitcon-${icon}`}
        onClick={onIconClick}
      />
    </div>
  );
}
