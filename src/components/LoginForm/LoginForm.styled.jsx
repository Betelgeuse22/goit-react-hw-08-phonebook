import { Field, Form } from 'formik';
import styled from 'styled-components';


export const LoginFormStyled = styled(Form)`
  width: 320px;
`;

export const InputLogin = styled(Field)`
  padding-left: 10px;
  margin: 20px 0;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border-style: 2px solid green;

  background-color: rgba(206, 186, 186, 0.4);
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-style: italic;
  font-size: 16px;
  text-decoration: dotted;
  color: grey;
`;

export const ErrorMessageStyled = styled.div`
  color: red;
`;
