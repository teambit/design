import React, { forwardRef, ReactElement } from 'react';
import classNames from 'classnames';
import { colorPalette } from '@teambit/base-ui.theme.accent-color';
import styles from './input-text.module.scss';

type Props = {
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

export type InputTextProps = {
  /**
   * An optional Icon element to be render at the end of the input, can be an Image or an Icon.
   */
  icon?: ReactElement;
} & Props &
  React.InputHTMLAttributes<HTMLInputElement>;

export type InputTextAreaProps = Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const getAccent = ({ error, success }: Props) => {
  return (
    (error && classNames(colorPalette.error, styles.error)) ||
    (success && classNames(colorPalette.success, styles.success))
  );
};

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(function InputTextWithRef(
  { className, style, error, success, filled, icon, ...rest }: InputTextProps,
  ref
) {
  const accent = getAccent({ error, success });

  if (icon)
    return (
      <div className={classNames(styles.inputTextWithIcon, className)} style={style}>
        <input ref={ref} className={classNames(styles.inputText, filled && styles.filled, accent)} {...rest} />
        {icon}
      </div>
    );

  return (
    <input
      ref={ref}
      className={classNames(styles.inputText, filled && styles.filled, accent, className)}
      style={style}
      {...rest}
    />
  );
});

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(function InputTextAreaWithRef(
  { className, error, success, filled, ...rest }: InputTextAreaProps,
  ref
) {
  const accent = getAccent({ error, success });

  return (
    <textarea
      ref={ref}
      className={classNames(styles.inputText, styles.inputTextArea, filled && styles.filled, accent, className)}
      {...rest}
    />
  );
});
