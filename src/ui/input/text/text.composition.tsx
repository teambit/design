import React from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { TextInput, TextArea } from './text';

export const InputExample = () => <TextInput placeholder="enter text..." data-testid="test-input" />;

export const FilledExample = () => <TextInput value="some text" filled data-testid="test-input" />;

export const ErrorInput = () => <TextInput error data-testid="test-input" />;

export const SuccessInput = () => <TextInput success data-testid="test-input" />;

export const DisabledInput = () => {
  return <TextInput placeholder="placeholder..." disabled data-testid="test-input" />;
};

export const SmallInput = () => <TextInput style={{ fontSize: 12 }} placeholder="enter text..." data-testid="test-input" />;

export const BigInput = () => <TextInput style={{ fontSize: 24 }} placeholder="enter text..." data-testid="test-input" />;

export const InputDarkMode = () => (
  <div className={darkMode} style={{ padding: '20px 40px', backgroundColor: '#0c0c0c' }}>
    <TextInput placeholder="enter text..." data-testid="test-input" />
  </div>
);

export const TextAreaExample = () => <TextArea placeholder="multiline text..." data-testid="test-textarea" />;

export const ErrorTextArea = () => <TextArea error data-testid="test-textarea" />;

export const SuccessTextArea = () => <TextArea success data-testid="test-textarea" />;

export const DisabledTextArea = () => <TextArea placeholder="placeholder..." disabled data-testid="test-textarea" />;
