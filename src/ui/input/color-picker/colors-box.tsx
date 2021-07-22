import React from 'react';
import classNames from 'classnames';
import { Card } from '@teambit/base-ui.surfaces.card';
import { Selectable } from '@teambit/design.surfaces.selectable';
import { colorsList } from './colors-list';
import styles from './colors-box.module.scss';

export type ColorsBoxProps = {
  /**
   * The selected color to show in the colors box.
   */
  value?: string;
  /**
   * A function that is trigger when the user click on a color from the list.
   * The function return the selected color.
   */
  onSelect: (value: string) => void;
  hidden?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function ColorsBox({ value, onSelect, hidden, className, ...rest }: ColorsBoxProps) {
  return (
    <Card roundness="small" className={classNames(styles.colorsBox, hidden && styles.hidden, className)} {...rest}>
      {colorsList.map((color, index) => {
        return (
          <Selectable
            onClick={(e) => onSelect(color)}
            key={color}
            roundness="circle"
            className={styles.selectableColor}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </Card>
  );
}
