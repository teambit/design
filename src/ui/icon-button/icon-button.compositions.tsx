import React from 'react';
import { colorPalette } from '@teambit/base-ui.theme.accent-color';
import { IconButton } from './icon-button';

export function IconButtonExample() {
  return (
    <IconButton id="icon-and-text" icon="error-circle">
      Terminate
    </IconButton>
  );
}

export function IconButtonDisabled() {
  return (
    <IconButton id="disabled-icon-button" icon="error-circle" disabled>
      Terminate
    </IconButton>
  );
}

export function IconOnlyButtonExample() {
  return <IconButton id="icon-only" icon="error-circle"></IconButton>;
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
    <IconButton active icon="error-circle">
      Terminate
    </IconButton>
  );
}

export function SmallActiveIconOnlyWithOverrideSize() {
  return <IconButton icon="plus" active size={null} style={{ width: 24, height: 24, justifyContent: 'center' }} />;
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
    <IconButton priority="cta" icon="download">
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

// export function WarningButton() {
//   return (
//     <IconButton priority="cta" className={colorPalette.warning}>
//       Make Admin?
//     </IconButton>
//   );
// }
