import React from 'react';
import { render } from '@testing-library/react';
import {
  InputTextExample,
  ErrorInputText,
  SuccessInputText,
  DisabledInputText,
  InputTextAreaExample,
  ErrorInputTextArea,
  SuccessInputTextArea,
  DisabledInputTextArea,
  InputTextWithImage,
} from './input-text.composition';

describe('InputText component', () => {
  it('should render input correctly', () => {
    const { getByTestId } = render(<InputTextExample />);
    const rendered = getByTestId('test-input');

    expect(rendered).toBeInTheDocument();
    expect(rendered.tagName).toBe('INPUT');
  });

  it('should not have error or success styles', () => {
    const { getByTestId } = render(<InputTextExample />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('success')).toBeFalsy();
    expect(rendered.classList.contains('error')).toBeFalsy();
  });

  it('should have error class', () => {
    const { getByTestId } = render(<ErrorInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('error')).toBeTruthy();
  });

  it('should have success class', () => {
    const { getByTestId } = render(<SuccessInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.classList.contains('success')).toBeTruthy();
  });

  it('should have disabled attribute', () => {
    const { getByTestId } = render(<DisabledInputText />);
    const rendered = getByTestId('test-input');

    expect(rendered.getAttribute('disabled')).toBe('');
  });
});

describe('InputText component with icon', () => {
  it('should have img tag', () => {
    const { container } = render(<InputTextWithImage />);

    expect(container.querySelector('img')).toBeInTheDocument();
  });
});

describe('InputTextArea component', () => {
  it('should render text-area correctly', () => {
    const { getByTestId } = render(<InputTextAreaExample />);
    const rendered = getByTestId('test-textarea');

    expect(rendered).toBeInTheDocument();
    expect(rendered.tagName).toBe('TEXTAREA');
  });

  it('should not have error or success styles', () => {
    const { getByTestId } = render(<InputTextAreaExample />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.classList.contains('success')).toBeFalsy();
    expect(rendered.classList.contains('error')).toBeFalsy();
  });

  it('should have error class', () => {
    const { getByTestId } = render(<ErrorInputTextArea />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.classList.contains('error')).toBeTruthy();
  });

  it('should have success class', () => {
    const { getByTestId } = render(<SuccessInputTextArea />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.classList.contains('success')).toBeTruthy();
  });

  it('should have disabled attribute', () => {
    const { getByTestId } = render(<DisabledInputTextArea />);
    const rendered = getByTestId('test-textarea');

    expect(rendered.getAttribute('disabled')).toBe('');
  });
});
