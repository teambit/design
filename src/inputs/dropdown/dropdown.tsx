import React from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@teambit/base-ui.surfaces.drawer';
import { Position, ContaineeProps, Containee } from '@teambit/base-ui.surfaces.abs-container';
import { elevationClass, ElevationHeight } from '@teambit/base-ui.css-components.elevation';
import { roundnessClass, Roundness } from '@teambit/base-ui.css-components.roundness';
import { backgrounds } from '@teambit/base-ui.surfaces.background';
import { fadeInOutClass } from '@teambit/evangelist.css-components.fade-in-out';
import { IconButton } from '@teambit/design.ui.icon-button';
import { Placeholder } from './placeholder';
import styles from './dropdown.module.scss';

export type DropdownProps = {
  /**
   * add class to the dropdown menu.
   */
  dropClass?: string;
  /**
   * add border to the placeholder.
   */
  placeholderBorder?: boolean;
  /**
   * a function that is trigger when clear is clicked.
   */
  onClear?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * a function that is trigger when done is clicked.
   */
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & DrawerProps &
  DropdownMenuProps;

export function Dropdown({
  children,
  position = 'bottom',
  elevation = 'low',
  roundness = 'small',
  margin = 4,
  placeholder,
  dropClass,
  placeholderBorder = true,
  onClear,
  onSubmit,
  className,
  ...rest
}: DropdownProps) {
  const hasButtons = !!onClear || !!onSubmit;

  return (
    <Drawer
      margin={margin}
      className={classNames(!placeholderBorder && styles.removePlaceholderBorder, className)}
      PlaceholderComponent={typeof placeholder === 'string' ? Placeholder : undefined}
      placeholder={placeholder}
      clickToggles={false}
      {...rest}
    >
      <DropdownMenu position={position} elevation={elevation} roundness={roundness} className={dropClass}>
        {children}
        {hasButtons && (
          <div className={styles.buttonsHolder}>
            {onClear && (
              <div className={styles.clearText} onClick={onClear}>
                Clear
              </div>
            )}
            {onSubmit && (
              <IconButton priority="cta" onClick={onSubmit}>
                Done
              </IconButton>
            )}
          </div>
        )}
      </DropdownMenu>
    </Drawer>
  );
}

type DropdownMenuProps = {
  position?: Position;
  elevation?: ElevationHeight;
  roundness?: Roundness;
} & Omit<ContaineeProps, 'onChange'>;

function DropdownMenu({ className, elevation = 'low', roundness = 'small', ...rest }: DropdownMenuProps) {
  return (
    <Containee
      {...rest}
      className={classNames(
        styles.dropdownMenu,
        backgrounds.layer,
        elevationClass[elevation],
        roundnessClass[roundness],
        fadeInOutClass,
        className
      )}
    />
  );
}
