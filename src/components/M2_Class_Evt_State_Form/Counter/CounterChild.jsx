import React, { Component } from 'react';

export default class CounterChild extends Component {
  render() {
    const { step, onIncrementClick, onDecrementClick } = this.props;

    return (
      <div>
        <h3>
          Передача состояния пропсом от родителя ребенку и подъем состояния
          родителю. CounterChild:
        </h3>
        <p>"CounterChild"</p>

        <button type="button" onClick={onIncrementClick}>
          Increment by {step}
        </button>
        <button type="button" onClick={onDecrementClick}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
