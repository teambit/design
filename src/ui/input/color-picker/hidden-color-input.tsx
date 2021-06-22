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

  handleOnClick = (e: any) => {
    const { isOpen, type } = this.state;
    // if the user click on the color box to close it, this code will close it.
    if (isOpen) {
      this.handleOnClose();
    } else if (type === 'color') {
      this.setState({ isOpen: true });
    }
  };

  hanldeOnBlur = () => {
    const { isOpen } = this.state;
    // if the user click outisde of the box, the color will be closed but we the state need to be updated.
    if (isOpen) {
      this.handleOnClose();
    }
  };

  handleOnClose = () => {
    this.setState({ isOpen: false, type: 'text' });
    setTimeout(() => this.setState({ type: 'color' }), 500);
  };

  render() {
    const { type } = this.state;
    return (
      <Input
        {...this.props}
        type={type}
        onChange={this.props.onChange}
        onClick={this.handleOnClick}
        onBlur={this.hanldeOnBlur}
      />
    );
  }
}
