import React from 'react';
import classNames from 'classnames';
import { Selectable } from '@teambit/design.surfaces.selectable';
import { colorsList as defaultColorsList } from './colors-list';
import styles from './colors-box.module.scss';

export type ColorsBoxProps = {
  /**
   * A function that is trigger when the user click on a color from the list.
   * The function return the selected color.
   */
  onColorSelect?: (value: string) => void;
  /**
   * An array of colors.
   */
  colorsList?: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export function ColorsBox({ onColorSelect, colorsList = defaultColorsList, className, ...rest }: ColorsBoxProps) {
  return (
    <div className={classNames(styles.colorsBox, className)} {...rest}>
      {colorsList.map((color, index) => {
        return (
          <Selectable
            onClick={(e) => onColorSelect?.(color)}
            key={color}
            roundness="circle"
            className={styles.selectableColor}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
}
