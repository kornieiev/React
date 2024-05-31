import React, { Component } from 'react';
import Counter from './Counter/Counter';
import LoginFormUncontrolled from './LoginFormUncontrolled/LoginFormUncontrolled';
import LoginFormControlled from './LoginFormControlled/LoginFormControlled';
import SignUpForm from './SignUpForm/SignUpForm';
import ComplicatedForm from './ComplicatedForm/ComplicatedForm';
import FormIdGeneration from './FormIdGeneration/FormIdGeneration';
import CheckBox from './CheckBox/CheckBox';
import RadioButtons from './RadioButtons/RadioButtons';
import Select from './Select/Select';

export default class IndexM02 extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('props', props);
  // }
  render() {
    return (
      <>
        <h2 style={this.props.styles}>{this.props.children}</h2>
        <hr />
        <hr />

        {/* Стан + Підіймання стану */}
        <Counter step={3} initialValue={10} />

        <hr />

        {/* Неконтрольовані елементи форми */}
        <LoginFormUncontrolled
          onSubmit={values =>
            console.log('🚀 ~ App - LoginFormUncontrolled ~ values:', values)
          }
        />

        <hr />

        {/* Контрольовані елементи форми */}
        <LoginFormControlled />

        <hr />

        {/* Складні форми. Форма реєстрації */}
        <SignUpForm
          onSubmit={values =>
            console.log('🚀 ~ App - SignUpForm ~ values:', values)
          }
        />

        <hr />

        {/* Складні форми. Форма реєстрації. ComplicatedForm !!! */}
        <ComplicatedForm
          onSubmit={values =>
            console.log('🚀 ~ App - SignUpForm ~ values:', values)
          }
        />

        <hr />

        {/* Генерація Id елементів форми - nanoid, htmlFor, id */}
        <FormIdGeneration />

        <hr />

        {/* CheckBox */}
        <CheckBox onSubmit={values => console.log(values)} />

        <hr />

        {/* RadioButtons */}
        <RadioButtons onSubmit={values => console.log(values)} />

        <hr />

        {/* Select */}
        <Select onSubmit={values => console.log(values)} />
      </>
    );
  }
}
