import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, ButtonGroup, Typography } from '@mui/material';

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>
          You nead <b>sign in</b> or <b>sign up</b> to access your contacts:
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => navigate('/login')}>Sign in</Button>
          <Button onClick={() => navigate('/register')}>Sign up</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};
