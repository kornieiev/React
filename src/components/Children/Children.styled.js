import styled from 'styled-components';

export const ChildrenH3 = styled.h3`
  color: ${props => {
    // console.log('props', props.theme.colors.accent);
    return props.theme.colors.accent;
  }};
  width: 100px;
  border: 2px solid ${p => p.theme.colors.accent};

  border-radius: ${p => p.theme.radii.medium};

  margin: ${p => p.theme.spacing(2)};
`;
