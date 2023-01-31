import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectToken } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';
import { IconButton, Typography, Box } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AuthMenu = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      {token && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            Welcome, <b>{user.name}</b>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Log out"
            onClick={() => dispatch(logout())}
          >
            <ExitToAppIcon color="inherit" />
          </IconButton>
        </Box>
      )}
    </>
  );
};
