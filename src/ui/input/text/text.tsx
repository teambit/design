import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { colorPalette } from '@teambit/base-ui.theme.accent-color';
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

export type TextInputProps = Props & React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const getAccent = ({ error, success }: Props) => {
  return (
    (error && classNames(colorPalette.error, styles.error)) ||
    (success && classNames(colorPalette.success, styles.success))
  );
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInputWithRef(
  { className, error, success, filled, ...rest }: TextInputProps,
  ref
) {
  const accent = getAccent({ error, success });
  return <input ref={ref} className={classNames(styles.input, filled && styles.filled, accent, className)} {...rest} />;
});

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(function TextAreaWithRef(
  { className, error, success, filled, ...rest }: TextareaProps,
  ref
) {
  const accent = getAccent({ error, success });
  return (
    <textarea
      ref={ref}
      className={classNames(styles.input, styles.textarea, filled && styles.filled, accent, className)}
      {...rest}
    />
  );
});
