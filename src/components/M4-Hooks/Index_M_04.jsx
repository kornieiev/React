import React from 'react';
import UseStateExample from './UseStateExample/UseStateExample';
import UseEffectExample from './UseEffectExample/UseEffectExample';
import AppQuizOnHooks from './QuizOnHooks/AppQuiz';
import UseRefExample from './UseRefExample/UseRefExample';
import UseMemoExample from './UseMemoExample/UseMemoExample';
import SkipMountEffect from './SkipMountEffect/SkipMountEffect';

export default function Index_M_04() {
  return (
    <>
      <h2>Модуль 4 - Hooks</h2>
      {/* <UseStateExample /> */}
      {/* <hr /> */}

      {/* <UseEffectExample /> */}
      {/* <hr /> */}

      {/* <AppQuizOnHooks /> */}
      {/* <hr /> */}

      {/* <UseRefExample /> */}
      {/* <hr /> */}

      <UseMemoExample />

      {/* <SkipMountEffect /> */}
    </>
  );
}
