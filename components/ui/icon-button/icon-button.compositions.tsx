import React from 'react';
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
