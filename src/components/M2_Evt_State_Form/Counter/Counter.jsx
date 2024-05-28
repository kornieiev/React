import React, { Component } from 'react';

export default class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: this.props.initialValue,
  //   };
  // }

  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  handleIncrement = evt => {
    console.log('Increment was clicked');
    console.log(this.props);
    this.state.value += 1;
    console.log(this.state.value);
  };

  handleDecrement = evt => {
    console.log('Increment was clicked');
    console.log(this.props);
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.initialValue}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
