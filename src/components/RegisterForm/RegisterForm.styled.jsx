import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputRegister = styled.input`
  padding-left: 10px;
  margin: 20px 0;
  width: 100%;
  height: 40px;
  background-color: rgba(206, 186, 186, 0.4);
`;

export const IconPassword = styled.span`
  position: absolute;
  bottom: 5px;
  right: 10px;
  cursor: pointer;
  z-index: 99;
`;
