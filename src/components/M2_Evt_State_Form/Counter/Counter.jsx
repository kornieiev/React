import React, { Component } from 'react';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  handleIncrement = evt => {
    console.log('Increment was clicked');
    console.log(this.props);
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button
          type="button"
          onClick={evt => {
            console.log('Decrement was clicked');
            console.log(this.props);
          }}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}
