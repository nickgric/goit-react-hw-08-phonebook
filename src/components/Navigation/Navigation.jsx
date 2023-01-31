import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import { NavLink } from 'react-router-dom';
import { Link, List, ListItem } from '@mui/material';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <List sx={{ display: 'flex' }} color="inherit">
      {!token && (
        <ListItem sx={{ width: '90px' }} color="inherit">
          <Link color="inherit" aria-label="Home" component={NavLink} to="/">
            Home
          </Link>
        </ListItem>
      )}
      {!token && (
        <ListItem sx={{ width: '90px' }} color="inherit">
          <Link color="inherit" component={NavLink} to="/login">
            Sign in
          </Link>
        </ListItem>
      )}
      {!token && (
        <ListItem sx={{ width: '90px' }} color="inherit">
          <Link color="inherit" component={NavLink} to="/register">
            Sign up
          </Link>
        </ListItem>
      )}
      {token && (
        <ListItem sx={{ width: '90px' }} color="inherit">
          <Link color="inherit" component={NavLink} to="/contacts">
            Contacts
          </Link>
        </ListItem>
      )}
      <ListItem sx={{ width: '90px' }} color="inherit">
        <Link color="inherit" component={NavLink} to="/about">
          About
        </Link>
      </ListItem>
    </List>
  );
};
