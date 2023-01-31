import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';

import { Box } from '@mui/material';
import { Typography, TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Box component="form" onSubmit={submitHandler}>
        <Typography variant="body1">
          Please, <b>sign up</b> to the phonebook:
        </Typography>
        <TextField
          sx={{ marginBottom: '16px' }}
          helperText="Name*"
          variant="outlined"
          name="name"
          type="text"
          value={name}
          onInput={inputHandler}
          required
          fullWidth={true}
        />
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
          Sign up
        </Button>
      </Box>
    </>
  );
};
