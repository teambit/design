import React from 'react';
import { colorPalette } from '@teambit/base-ui.theme.accent-color';
import { Icon } from '@teambit/design.elements.icon';
import { IconButton } from './icon-button';

export function IconButtonExample() {
  return <IconButton icon={<Icon of="error-circle" />}>Terminate</IconButton>;
}

export function IconButtonDisabled() {
  return (
    <IconButton icon={<Icon of="error-circle" />} disabled>
      Terminate
    </IconButton>
  );
}

export function IconOnlyButtonExample() {
  return <IconButton icon={<Icon of="error-circle" />}></IconButton>;
}

export function TextOnlyButtonExample() {
  return <IconButton>Terminate</IconButton>;
}

export function LoadingButtonExample() {
  return <IconButton loading />;
}

export function ActiveButtonExample() {
  return <IconButton active>Terminate</IconButton>;
}

export function ActiveWithIconButtonExample() {
  return (
    <IconButton active icon={<Icon of="error-circle" />}>
      Terminate
    </IconButton>
  );
}

export function SmallActiveIconOnlyWithOverrideSize() {
  return (
    <IconButton
      icon={<Icon of="plus" />}
      active
      size={null}
      style={{ width: 24, height: 24, justifyContent: 'center' }}
    />
  );
}

export function DefaultButton() {
  return <IconButton priority="ghost">Update</IconButton>;
}

export function GhostDisableButton() {
  return (
    <IconButton priority="ghost" disabled>
      Update
    </IconButton>
  );
}

export function CtaButton() {
  return <IconButton priority="cta">Save</IconButton>;
}

export function CtaButtonWithIcon() {
  return (
    <IconButton priority="cta" icon={<Icon of="download" />}>
      Save
    </IconButton>
  );
}

export function LargeCtaButton() {
  return (
    <IconButton priority="cta" size="l">
      Save
    </IconButton>
  );
}

export function CtaDisableButton() {
  return (
    <IconButton priority="cta" disabled>
      Delete
    </IconButton>
  );
}

export function DangerButton() {
  return (
    <IconButton priority="cta" className={colorPalette.error}>
      Delete
    </IconButton>
  );
}

export function LargeDangerButton() {
  return (
    <IconButton priority="cta" size="l" className={colorPalette.error}>
      Delete
    </IconButton>
  );
}

export function DangerDisabledButton() {
  return (
    <IconButton priority="cta" disabled className={colorPalette.error}>
      Delete
    </IconButton>
  );
}

export function SuccessButton() {
  return (
    <IconButton priority="cta" className={colorPalette.success}>
      Saved!
    </IconButton>
  );
}

export function ButtonWithImage() {
  return <IconButton icon={<img src="https://static.bit.dev/brands/logo-google.svg" />}>Login With Google</IconButton>;
}

export function DisabledButtonWithImage() {
  return (
    <IconButton disabled icon={<img src="https://static.bit.dev/brands/logo-google.svg" />}>
      Login With Google
    </IconButton>
  );
}

export function LargeButtonWithImage() {
  return (
    <IconButton size="l" icon={<img src="https://static.bit.dev/brands/logo-google.svg" />}>
      Login With Google
    </IconButton>
  );
}
