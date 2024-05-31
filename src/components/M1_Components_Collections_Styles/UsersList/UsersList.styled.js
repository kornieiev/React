import styled from 'styled-components';

export const UsersBlockUl = styled.ul`
  display: flex;
`;

export const UserCardLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px;
  padding: 20px;
  gap: 10px;

  list-style: none;

  border: 1px solid grey;

  &:hover,
  &:focus {
    background-color: lightgray;
  }
`;
