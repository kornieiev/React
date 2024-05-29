import React, { Component } from 'react';

export default class LoginFormControlled extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    // console.log('evt.target.value', evt.target.value);
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <p>Контрольовані елементи форми:</p>
        <input type="text" value={inputValue} onChange={this.handleChange} />
      </>
    );
  }
}
