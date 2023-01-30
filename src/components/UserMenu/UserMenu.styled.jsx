import styled from 'styled-components';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const UserNavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserNavWelcomeText = styled.p`
  text-align: center;
  color: #000;
  margin: 0px 15px 0px 3px;
`;

export const UserName = styled.span`
  color: lightgreen;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-style: none;
  border-radius: 50px;
  outline: none;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    background-color: lightgreen;
  }
`;

export const IconSvg = styled(BsFillArrowLeftCircleFill)`
  width: 50px;
  height: 50px;
`;
