// https://www.edu.goit.global/uk/learn/10961022/31183/31219/training?blockId=20318876

import React, { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
};

export default class CheckBox extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );
  };

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {/* ... */}
          <label>
            Agree to terms
            <input
              type="checkbox"
              checked={agreed}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" disabled={!agreed}>
            Sign up as {login}
          </button>
        </form>
      </>
    );
  }
}
