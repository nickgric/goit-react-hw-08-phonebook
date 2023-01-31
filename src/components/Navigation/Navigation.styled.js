import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  width: 768px;
  margin: 0 auto;
  padding: 0 25px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationStyled = styled.nav``;

export const NavListStyled = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const NavListItemStyled = styled.li`
  height: 25px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 15px;
  color: teal;
  text-decoration: none;
  &:hover,
  &:focus {
    color: burlywood;
  }
  &.active {
    color: navy;
  }
`;
