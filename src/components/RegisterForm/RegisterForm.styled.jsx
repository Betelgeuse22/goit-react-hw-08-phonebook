import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-style: italic;
  font-size: 16px;
  text-decoration: dotted;
  color: grey;
`;

export const InputRegister = styled.input`
  padding-left: 10px;
  margin: 20px 0;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border-style: 2px solid green;

  background-color: rgba(206, 186, 186, 0.4);
`;

export const IconPassword = styled.span`
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  user-select: none;
  z-index: 99;
`;
