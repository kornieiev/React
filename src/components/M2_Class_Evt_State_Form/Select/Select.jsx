// https://www.edu.goit.global/uk/learn/10961022/31183/31219/training?blockId=20318876
import React, { Component } from 'react';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};
const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

export default class Select extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    console.log('🚀 ~ CheckBox ~ name:', evt.target.name);
    console.log('🚀 ~ CheckBox ~ type:', evt.target.type);
    console.log('🚀 ~ CheckBox ~ value:', evt.target.value);
    // console.log('🚀 ~ CheckBox ~ checked:', evt.target.checked);

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
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <>
        <h3>Select:</h3>

        <form onSubmit={this.handleSubmit}>
          <section>
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
            <label>
              Agree to terms
              <input
                type="checkbox"
                name="agreed"
                checked={agreed}
                onChange={this.handleChange}
              />
            </label>
          </section>
          <br />

          <section>
            <h4>Choose your gender</h4>
            <label>
              Male
              <input
                type="radio"
                checked={gender === Gender.MALE}
                name="gender"
                value={Gender.MALE}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                checked={gender === Gender.FEMALE}
                name="gender"
                value={Gender.FEMALE}
                onChange={this.handleChange}
              />
            </label>
          </section>
          <br />

          <section>
            <label>
              Choose your age
              <select name="age" value={age} onChange={this.handleChange}>
                <option value="" disabled>
                  ...
                </option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36+">36+</option>
              </select>
            </label>
          </section>

          <button type="submit" disabled={!agreed}>
            Sign up as {login}
          </button>
        </form>
      </>
    );
  }
}
