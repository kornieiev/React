import styled from 'styled-components';

export const Box = styled.div`
  margin: 40px;
  width: 150px;
  height: 150px;
  background-color: ${props => {
    console.log('props', props.$variant);
    switch (props.$variant) {
      case 'primary':
        return 'lightgreen';
      case 'secondary':
        return 'lightblue';
      default:
        return 'lightgray';
    }
  }};
`;
