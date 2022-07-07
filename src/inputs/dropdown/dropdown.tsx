import React, { ComponentType } from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@teambit/base-ui.surfaces.drawer';
import { Position, ContaineeProps, Containee } from '@teambit/base-ui.surfaces.abs-container';
import { elevationClass, ElevationHeight } from '@teambit/base-ui.css-components.elevation';
import { roundnessClass, Roundness } from '@teambit/base-ui.css-components.roundness';
import { backgrounds } from '@teambit/base-ui.surfaces.background';
import { fadeInOutClass } from '@teambit/evangelist.css-components.fade-in-out';
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
   * a plugin to display elements at the top section of the dropdown menu
   */
  topPlugin?: React.ReactNode;
  /**
   * a plugin to display elements at the bottom section of the dropdown menu
   */
  bottomPlugin?: React.ReactNode;
} & DrawerProps &
  DropdownMenuProps;

export function Dropdown({
  children,
  position = 'bottom',
  elevation = 'low',
  roundness = 'small',
  margin = 4,
  placeholder,
  PlaceholderComponent,
  dropClass,
  placeholderBorder = true,
  topPlugin,
  bottomPlugin,
  clickToggles = false,
  className,
  ...rest
}: DropdownProps) {
  return (
    <Drawer
      margin={margin}
      className={classNames(!placeholderBorder && styles.removePlaceholderBorder, className)}
      PlaceholderComponent={typeof placeholder === 'string' ? Placeholder : PlaceholderComponent}
      placeholder={placeholder}
      clickToggles={clickToggles}
      {...rest}
    >
      <DropdownMenu position={position} elevation={elevation} roundness={roundness} className={dropClass}>
        {topPlugin}
        {children}
        {bottomPlugin}
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
