// https://www.edu.goit.global/uk/learn/10961022/31183/31219/training?blockId=20318876

import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export default class FormIdGeneration extends Component {
  loginInputId = nanoid();

  render() {
    return (
      <>
        <h3>nanoid - FormIdGeneration:</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <label htmlFor={this.loginInputId}>Login</label>
          <input type="text" name="login" id={this.loginInputId} />
        </form>
      </>
    );
  }
}
