import React from 'react';
import { Text, TextArea } from './text';

export const InputExample = () => <Text placeholder="enter text..." data-testid="test-input" />;

export const ErrorInput = () => <Text error data-testid="test-input" />;

export const SuccessInput = () => <Text success data-testid="test-input" />;

export const DisabledInput = () => {
  return <Text placeholder="placeholder..." disabled data-testid="test-input" />;
};

export const TextAreaExample = () => <TextArea placeholder="multiline text..." data-testid="test-textarea" />;

export const ErrorTextArea = () => <TextArea error data-testid="test-textarea" />;

export const SuccessTextArea = () => <TextArea success data-testid="test-textarea" />;

export const DisabledTextArea = () => <TextArea placeholder="placeholder..." disabled data-testid="test-textarea" />;
