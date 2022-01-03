import React from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@teambit/base-ui.surfaces.drawer';
import { Position, ContaineeProps, Containee } from '@teambit/base-ui.surfaces.abs-container';
import { elevationClass, ElevationHeight } from '@teambit/base-ui.css-components.elevation';
import { roundnessClass, Roundness } from '@teambit/base-ui.css-components.roundness';
import { backgrounds } from '@teambit/base-ui.surfaces.background';
import styles from './dropdown.module.scss';
import { fadeInOutClass } from '@teambit/evangelist.css-components.fade-in-out';

export type DropdownProps = { dropClass?: string } & DrawerProps & DropdownMenuProps;

export function Dropdown({
  children,
  position = 'bottom',
  elevation = 'medium',
  roundness = 'sharp',
  dropClass,
  ...rest
}: DropdownProps) {
  return (
    <Drawer {...rest}>
      <DropdownMenu position={position} elevation={elevation} roundness={roundness} className={dropClass}>
        {children}
      </DropdownMenu>
    </Drawer>
  );
}

type DropdownMenuProps = {
  position?: Position;
  elevation?: ElevationHeight;
  roundness?: Roundness;
} & ContaineeProps;

function DropdownMenu({ className, elevation = 'medium', roundness = 'sharp', ...rest }: DropdownMenuProps) {
  return (
    <Containee
      {...rest}
      className={classNames(
        styles.dropdown,
        backgrounds.layer,
        elevationClass[elevation],
        roundnessClass[roundness],
        fadeInOutClass,
        className
      )}
    />
  );
}
