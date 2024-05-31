import React, { Component } from 'react';
import CounterChild from './CounterChild';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // console.log('Increment was clicked');
    this.setState((state, props) => {
      // console.log('state in SetState', state);
      // console.log('props in SetState', props);

      return { value: state.value + props.step };
    });
    // console.log('this.state!', this.state);
  };

  handleDecrement = () => {
    // console.log('Decrement was clicked');
    this.setState((state, props) => ({ value: state.value - props.step }));
    // console.log('this.state!', this.state);
  };

  render() {
    // console.log('PROPS', this.props);
    // console.log('STATE:', this.state);

    const { step } = this.props;

    return (
      <div>
        <h3>Состояние + Подъем состояния. CounterParent:</h3>
        <p>"Counter"</p>

        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
        <br />
        <br />

        <CounterChild
          onIncrementClick={this.handleIncrement}
          onDecrementClick={this.handleDecrement}
          step={step}
        />
      </div>
    );
  }
}
