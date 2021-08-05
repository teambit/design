import React from 'react';
import classNames from 'classnames';
import { colorPalette } from '@teambit/base-ui.theme.accent-color';
import styles from './text.module.scss';

export type Props = {
  error?: boolean;
  success?: boolean;
};

export type TextProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const getAccent = ({ error, success }: Props) => {
  return (
    (error && classNames(colorPalette.error, styles.error)) ||
    (success && classNames(colorPalette.success, styles.success))
  );
};

export function Text({ className, error, success, ...rest }: TextProps) {
  const accent = getAccent({ error, success });
  return <input className={classNames(styles.input, accent, className)} {...rest} />;
}

export function TextArea({ className, error, success, ...rest }: TextareaProps) {
  const accent = getAccent({ error, success });
  return <textarea className={classNames(styles.input, accent, className)} {...rest} />;
}
