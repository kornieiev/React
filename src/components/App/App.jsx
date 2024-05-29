import UsersList from '../UsersList/UsersList';
import { Profile } from '../Profile/Profile';
import users from '../users.json';

import { FaBeer } from 'react-icons/fa';

import { Box } from './App.styled';
import { GlobalStyle } from './GlobalStyles';
import styled from 'styled-components';
import Children from 'components/Children/Children';
import Counter from 'components/M2_Class_Evt_State_Form/Counter/Counter';
import LoginFormUncontrolled from 'components/M2_Class_Evt_State_Form/LoginFormUncontrolled/LoginFormUncontrolled';
import LoginFormControlled from 'components/M2_Class_Evt_State_Form/LoginFormControlled/LoginFormControlled';
import SignUpForm from 'components/M2_Class_Evt_State_Form/SignUpForm/SignUpForm';

const user1 = {
  id: 1,
  name: 'Lola',
  email: 'lola@gmail.com',
  age: 24,
  avatar:
    'https://todler.pl/28584-large_default/p4416-malpka-lola-w-sukience-32-cm-asi-0606240.webp',
};

const user2 = {
  id: 2,
  name: 'Max',
  email: 'max@gmail.com',
  age: 30,
  avatar:
    'https://fastly.picsum.photos/id/335/200/300.jpg?hmac=G81PbTg8uAk00mCq0eZdiTJwpa_-_FvFZJVhEGcouXQ',
};

const IconWrapperSpan = styled.span`
  color: orange;
`;

export const App = () => {
  return (
    <>
      <h1>Top users</h1>
      <UsersList users={users} />

      <hr />
      <hr />

      <h2>
        Повторное использование компонента Profile с передачей пропса с данными
        по одному юзеру
      </h2>
      <Profile props={user1} />
      <Profile props={user2} />

      <hr />
      <hr />

      <h2>
        React Icons
        <IconWrapperSpan>
          <FaBeer size="40" />
        </IconWrapperSpan>
      </h2>

      <hr />
      <hr />
      <h2>styled-components:</h2>

      <Box $variant="primary" />
      <Box $variant="secondary" />
      <Box />

      <hr />
      <hr />
      <h2>Children:</h2>

      <Children>SomeTexT</Children>

      <GlobalStyle />

      {/*  */}

      {/* <button
        style={{ margin: '10px' }}
        onClick={evt => {
          console.log(evt);
        }}
      >
        Press me!
      </button> */}

      {/*  */}

      <hr />
      <hr />

      {/* Стан + Підіймання стану */}
      <Counter step={3} initialValue={10} />

      <hr />
      <hr />

      {/* Неконтрольовані елементи форми */}
      <LoginFormUncontrolled
        onSubmit={values =>
          console.log('🚀 ~ App - LoginFormUncontrolled ~ values:', values)
        }
      />

      <hr />
      <hr />

      {/* Контрольовані елементи форми */}
      <LoginFormControlled />

      <hr />
      <hr />

      {/* Складні форми. Форма реєстрації */}
      <SignUpForm
        onSubmit={values =>
          console.log('🚀 ~ App - SignUpForm ~ values:', values)
        }
      />
    </>
  );
};
