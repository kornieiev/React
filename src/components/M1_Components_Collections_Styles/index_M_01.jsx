import { Box } from 'components/App/App.styled';
import Children from 'components/M1_Components_Collections_Styles/Children/Children';
import UsersList from 'components/M1_Components_Collections_Styles/UsersList/UsersList';
import React, { Component } from 'react';
import styled from 'styled-components';
import users from '../json/users.json';
import { Profile } from 'components/M1_Components_Collections_Styles/Profile/Profile';
import { FaBeer } from 'react-icons/fa';

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

export default class IndexM01 extends Component {
  render() {
    return (
      <>
        <h2 style={this.props.styles}>{this.props.children}</h2>

        {/* Рендер массива компонентов с данными из JSON с использованием map */}
        <UsersList users={users} />

        <hr />
        <hr />

        {/* Рендер одиночных компонентов с данными из JSON */}
        <h3>
          Повторное использование компонента Profile с передачей пропса с
          данными по одному юзеру
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

        {/* Передача пропс признаком $ с использованием styled-components: */}
        <h3>styled-components. Передача пропас признаком $:</h3>
        <div style={{ display: 'flex' }}>
          <Box $variant="primary" />
          <Box $variant="secondary" />
          <Box />
        </div>

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
      </>
    );
  }
}
