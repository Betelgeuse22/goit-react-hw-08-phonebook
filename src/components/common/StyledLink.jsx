import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  &.active {
    color: #ed6c02;
  }
`;
