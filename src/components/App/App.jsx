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
import ComplicatedForm from 'components/M2_Class_Evt_State_Form/ComplicatedForm/ComplicatedForm';
import FormIdGeneration from 'components/M2_Class_Evt_State_Form/FormIdGeneration/FormIdGeneration';
import CheckBox from 'components/M2_Class_Evt_State_Form/CheckBox/CheckBox';
import RadioButtons from 'components/M2_Class_Evt_State_Form/RadioButtons/RadioButtons';
import Select from 'components/M2_Class_Evt_State_Form/Select/Select';
import IndexM02 from 'components/M2_Class_Evt_State_Form/Index_M_02';

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
      {/* Глобальные стили */}
      <GlobalStyle />

      {/* Рендер массива компонентов с данными из JSON с использованием map */}
      <UsersList users={users} />

      <hr />
      <hr />

      {/* Рендер одиночных компонентов с данными из JSON */}
      <h3>
        Повторное использование компонента Profile с передачей пропса с данными
        по одному юзеру
      </h3>
      <Profile props={user1} />
      <Profile props={user2} />

      <hr />
      <hr />

      {/* React Icons */}
      <h2>
        React Icons
        <IconWrapperSpan>
          <FaBeer size="40" />
        </IconWrapperSpan>
      </h2>

      <hr />
      <hr />

      {/* Передача пропас признаком $ с использованием styled-components: */}
      <h3>styled-components. Передача пропас признаком $:</h3>
      <Box $variant="primary" />
      <Box $variant="secondary" />
      <Box />

      <hr />
      <hr />

      {/* Передача сhildren в компонент с использованием styled-components: */}
      <Children>SomeTexT</Children>

      <hr />
      <hr />

      {/* Кнопка с инлайн стилями и событием onClick */}
      <h3>Кнопка с инлайн стилями и событием onClick</h3>
      <button
        style={{ margin: '10px' }}
        onClick={evt => {
          console.log(evt);
        }}
      >
        Press me!
      </button>

      <hr />
      <hr />

      {/*  */}
      {/* M-02 Події та стан - класові компоненти. Передача пропсів дітям, підйом стейту батькам */}

      {/* <IndexM02>
        M-02 Події та стан - класові компоненти. Передача пропсів дітям, підйом
        стейту батькам
      </IndexM02> */}

      <hr />
      <hr />
    </>
  );
};
