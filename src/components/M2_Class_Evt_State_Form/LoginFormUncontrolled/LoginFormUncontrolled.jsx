import React, { Component } from 'react';

export default class LoginFormUncontrolled extends Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log('login, password:', login, password);
    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <>
        <h3>Неконтрольовані елементи форми:</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="login" />
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}
