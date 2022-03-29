import React from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@teambit/base-ui.surfaces.drawer';
import { Position, ContaineeProps, Containee } from '@teambit/base-ui.surfaces.abs-container';
import { elevationClass, ElevationHeight } from '@teambit/base-ui.css-components.elevation';
import { roundnessClass, Roundness } from '@teambit/base-ui.css-components.roundness';
import { backgrounds } from '@teambit/base-ui.surfaces.background';
import { fadeInOutClass } from '@teambit/evangelist.css-components.fade-in-out';
import styles from './dropdown.module.scss';

export type DropdownProps = { dropClass?: string } & DrawerProps & DropdownMenuProps;

export function Dropdown({
  children,
  position = 'bottom',
  elevation = 'low',
  roundness = 'small',
  dropClass,
  margin = 4,
  ...rest
}: DropdownProps) {
  return (
    <Drawer margin={margin} {...rest}>
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
