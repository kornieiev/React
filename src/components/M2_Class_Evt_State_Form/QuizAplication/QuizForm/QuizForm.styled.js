import {
  Field as StyledField,
  Form as StyledForm,
  ErrorMessage as StyledErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 15px;
  max-width: 500px;
  border: 2px solid grey;
  border-radius: 10px;
  gap: 10px;
  background-color: lightgrey;
`;

export const Field = styled(StyledField)`
  width: 100%;
`;

export const ErrorMessage = styled(StyledErrorMessage)`
  color: ${p => p.theme.colors.accent};
`;
