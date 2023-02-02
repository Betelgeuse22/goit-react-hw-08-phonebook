import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: lightgreen;
  }
`;
