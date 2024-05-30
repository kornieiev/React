// https://www.edu.goit.global/uk/learn/10961022/31183/31219/training?blockId=20318876

import React, { Component } from 'react';

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export default class ComplicatedForm extends Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = evt => {
    const { name, value } = evt.target;
    console.log('🚀 ~ ComplicatedForm ~ name:', name);
    console.log('🚀 ~ ComplicatedForm ~ value:', value);

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <>
        <h3>Складні форми. Форма реєстрації. ComplicatedForm: !!!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              name="login"
              value={login}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sign up as {login}</button>
        </form>
      </>
    );
  }
}
