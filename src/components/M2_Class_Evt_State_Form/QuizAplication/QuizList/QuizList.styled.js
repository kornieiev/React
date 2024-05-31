import styled from 'styled-components';

function colorR(color) {
  switch (color) {
    case 'beginner':
      return 'blue';
    case 'intermediate':
      return 'green';
    case 'advanced':
      return 'red';
    default:
      return 'grey';
  }
}

export const ListWrapperUl = styled.ul`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const ItemWrapperLi = styled.li`
  border: 3px solid ${p => colorR(p.$level)};
  border-radius: 10px;
  padding: 10px;

  width: 300px;
`;
