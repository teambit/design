import React from 'react';
import { render } from '@testing-library/react';
import {
  InputExample,
  ErrorInput,
  SuccessInput,
  DisabledInput,
  TextAreaExample,
  ErrorTextArea,
  SuccessTextArea,
  DisabledTextArea,
} from './text.composition';

describe('Text component', () => {
  it('should render input correctly', () => {
    const { getByTestId } = render(<InputExample />);
    const rendered = getByTestId('test-input');

    expect(rendered).toBeInTheDocument();
    expect(rendered.tagName).toBe('INPUT');
  });

  it('should not have error or success styles', () => {
    const { getByTestId } = render(<InputExample />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('success')).toBeFalsy();
    expect(rendered.classList.contains('error')).toBeFalsy();
  });

  it('should have error class', () => {
    const { getByTestId } = render(<ErrorInput />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('error')).toBeTruthy();
  });

  it('should have success class', () => {
    const { getByTestId } = render(<SuccessInput />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('success')).toBeTruthy();
  });

  it('should have disabled attribute', () => {
    const { getByTestId } = render(<DisabledInput />);
    const rendered = getByTestId('test-input');
    console.log(rendered.getAttribute('disabled'));

    expect(rendered.getAttribute('disabled')).toBe('');
  });
});

describe('TextArea component', () => {
  it('should render text-area correctly', () => {
    const { getByTestId } = render(<TextAreaExample />);
    const rendered = getByTestId('test-textarea');

    expect(rendered).toBeInTheDocument();
    expect(rendered.tagName).toBe('TEXTAREA');
  });

  it('should not have error or success styles', () => {
    const { getByTestId } = render(<TextAreaExample />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.classList.contains('success')).toBeFalsy();
    expect(rendered.classList.contains('error')).toBeFalsy();
  });

  it('should have error class', () => {
    const { getByTestId } = render(<ErrorTextArea />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.classList.contains('error')).toBeTruthy();
  });

  it('should have success class', () => {
    const { getByTestId } = render(<SuccessTextArea />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.classList.contains('success')).toBeTruthy();
  });

  it('should have disabled attribute', () => {
    const { getByTestId } = render(<DisabledTextArea />);
    const rendered = getByTestId('test-textarea');
    console.log(rendered.getAttribute('disabled'));

    expect(rendered.getAttribute('disabled')).toBe('');
  });
});
