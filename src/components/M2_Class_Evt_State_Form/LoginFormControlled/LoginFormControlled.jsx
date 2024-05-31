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
        <h3>Контрольовані елементи форми:</h3>
        <p>"LoginFormControlled"</p>
        <input type="text" value={inputValue} onChange={this.handleChange} />
      </>
    );
  }
}
