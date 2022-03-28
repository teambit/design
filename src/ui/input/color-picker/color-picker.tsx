import React from "react";
import classNames from "classnames";
import { Dropdown } from "@teambit/design.surfaces.dropdown";
import styles from "./color-picker.module.scss";
import sizes from "./sizes.module.scss";
import { ColorsBox, ColorsBoxProps } from "./colors-box";

export type ColorPickerProps = {
  /**
   * The selected color to show in the colors box.
   */
  value?: string;
  /**
   * box sizes
   */
  size?: "m" | "l";
  disabled?: boolean;
  dropClassName?: string;
} & ColorsBoxProps;

export const DEFAULT_BACKGROUND_ICON_COLOR = "#C0CA36";
export const DEFAULT_STRIP_COLOR = "#EDEDED";

export function ColorPicker({
  value = DEFAULT_BACKGROUND_ICON_COLOR,
  size,
  disabled,
  dropClassName,
  onColorSelect,
  className,
  children,
  ...rest
}: ColorPickerProps) {
  return (
    <Dropdown
      //@ts-ignore
      placeholder={
        <div
          className={classNames(
            styles.colorPicker,
            sizes.pickerSizes,
            disabled && styles.disabled
          )}
          data-size={size}
        >
          {children && <div className={styles.textBox}>{children}</div>}
          <div
            className={classNames(styles.colorBox, !children && styles.noText)}
            style={{ backgroundColor: value }}
          />
        </div>
      }
      roundness="small"
      className={classNames(styles.dropDown, className)}
      dropClass={classNames(styles.dropClass, dropClassName)}
      open={!disabled && undefined}
      margin={4}
      {...rest}
    >
      <ColorsBox onColorSelect={onColorSelect} />
    </Dropdown>
  );
}
