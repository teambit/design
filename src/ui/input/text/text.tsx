import React from 'react';
import classNames from 'classnames';
import { colorPalette } from '@teambit/base-ui.theme.accent-color';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import styles from './text.module.scss';

export type Props = {
  /**
   * error style
   */
  error?: boolean;
  /**
   * success style
   */
  success?: boolean;
  /**
   * filled style
   */
  filled?: boolean;
};

export type TextProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
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

const getAccent = ({ error, success }: Props) => {
  return (
    (error && classNames(colorPalette.error, styles.error)) ||
    (success && classNames(colorPalette.success, styles.success))
  );
};

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

export function Text({ className, error, success, filled, ...rest }: TextProps) {
  const accent = getAccent({ error, success });
  return <input className={classNames(styles.input, filled && styles.filled, accent, className)} {...rest} />;
}

export function TextArea({ className, error, success, filled, ...rest }: TextareaProps) {
  const accent = getAccent({ error, success });
  return (
    <textarea
      className={classNames(styles.input, styles.textarea, filled && styles.filled, accent, className)}
      {...rest}
    />
  );
}
