import React, { Component } from 'react';

export default class SignUpForm extends Component {
  state = {
    login: '',
  };

  // Відповідає за оновлення стану
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  // Викликається під час відправлення форми
  handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <>
        <p>Складні форми. Форма реєстрації:</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              value={login}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sign up as {login}</button>
        </form>
      </>
    );
  }
}
