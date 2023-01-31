import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

import { Box } from '@mui/system';
import { Typography, TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    switch (target.name) {
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      default:
        break;
    }
  };

  const submitHandler = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box component="form" onSubmit={submitHandler}>
        <Typography variant="body1">
          Please, <b>sign in</b> to the phonebook:
        </Typography>
        <TextField
          sx={{ marginBottom: '16px' }}
          helperText="Email*"
          variant="outlined"
          name="email"
          type="email"
          value={email}
          onInput={inputHandler}
          required
          fullWidth={true}
        />
        <TextField
          sx={{ marginBottom: '16px' }}
          helperText="Password*"
          variant="outlined"
          name="password"
          type="password"
          value={password}
          onInput={inputHandler}
          required
          fullWidth={true}
        />
        <Button type="submit" variant="contained">
          Sign in
        </Button>
      </Box>
    </>
  );
};
