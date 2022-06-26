import React from 'react';
import { darkMode } from '@teambit/base-ui.theme.dark-theme';
import { Icon } from '@teambit/design.elements.icon';
import { InputText, InputTextArea } from './input-text';

export const InputTextExample = () => <InputText placeholder="enter text..." data-testid="test-input" />;

export const FilledInputTextExample = () => <InputText value="some text" filled data-testid="test-input" />;

export const ErrorInputText = () => <InputText error data-testid="test-input" />;

export const SuccessInputText = () => <InputText success data-testid="test-input" />;

export const DisabledInputText = () => {
  return <InputText placeholder="placeholder..." disabled data-testid="test-input" />;
};

export const SmallInputText = () => (
  <InputText style={{ fontSize: 12 }} placeholder="enter text..." data-testid="test-input" />
);

export const BigInputText = () => (
  <InputText style={{ fontSize: 24 }} placeholder="enter text..." data-testid="test-input" />
);

export const InputTextDarkMode = () => (
  <div className={darkMode} style={{ padding: '20px 40px', backgroundColor: '#0c0c0c' }}>
    <InputText placeholder="enter text..." data-testid="test-input" />
  </div>
);

export const InputTextWithIcon = () => (
  <InputText
    placeholder="search..."
    icon={<Icon of="discovery" style={{ cursor: 'pointer' }} onClick={() => alert('on icon click')} />}
  />
);

export const InputTextWithImage = () => (
  <InputText
    placeholder="search..."
    icon={
      <img
        src="https://static.bit.dev/bit-icons/filter.svg"
        style={{ cursor: 'pointer' }}
        onClick={() => alert('on icon click')}
      />
    }
  />
);

export const InputTextAreaExample = () => <InputTextArea placeholder="multiline text..." data-testid="test-textarea" />;

export const ErrorInputTextArea = () => <InputTextArea error data-testid="test-textarea" />;

export const SuccessInputTextArea = () => <InputTextArea success data-testid="test-textarea" />;

export const DisabledInputTextArea = () => (
  <InputTextArea placeholder="placeholder..." disabled data-testid="test-textarea" />
);
