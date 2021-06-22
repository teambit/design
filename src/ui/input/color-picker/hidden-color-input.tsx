import React, { PureComponent, ChangeEvent } from 'react';
import { Input } from '@teambit/base-ui.input.checkbox.label';

export type HiddenColorInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type HiddenColorInputState = {
  isOpen: boolean;
  type: string;
};

export class HiddenColorInput extends PureComponent<HiddenColorInputProps, HiddenColorInputState> {
  state = {
    isOpen: false,
    type: 'color',
  };

  handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange && onChange(e);
  };

  handleOnClick = (e: any) => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({ isOpen: false, type: 'text' });
      setTimeout(() => this.setState({ type: 'color' }), 500);
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    const { type } = this.state;
    return <Input type={type} {...this.props} onChange={this.handleOnChange} onClick={this.handleOnClick} />;
  }
}
