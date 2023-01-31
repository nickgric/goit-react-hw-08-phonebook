import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import {
  NavigationStyled,
  NavListStyled,
  NavListItemStyled,
  HeaderStyled,
  NavLinkStyled,
} from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <HeaderStyled>
      <NavigationStyled>
        <NavListStyled>
          {!token && (
            <NavListItemStyled>
              <NavLinkStyled to="/">Home</NavLinkStyled>
            </NavListItemStyled>
          )}
          {!token && (
            <NavListItemStyled>
              <NavLinkStyled to="/login">Login</NavLinkStyled>
            </NavListItemStyled>
          )}
          {!token && (
            <NavListItemStyled>
              <NavLinkStyled to="/register">Register</NavLinkStyled>
            </NavListItemStyled>
          )}
          {token && (
            <NavListItemStyled>
              <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
            </NavListItemStyled>
          )}
          <NavListItemStyled>
            <NavLinkStyled to="/about">About</NavLinkStyled>
          </NavListItemStyled>
        </NavListStyled>
      </NavigationStyled>
    </HeaderStyled>
  );
};
