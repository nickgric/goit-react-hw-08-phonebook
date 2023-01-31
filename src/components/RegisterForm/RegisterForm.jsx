import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperations';

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
      <form onSubmit={submitHandler}>
        <p>Please, sign up in the phonebook!</p>
        <label>
          <p>Name</p>
          <input
            name="name"
            type="text"
            value={name}
            onInput={inputHandler}
            required
          />
        </label>
        <label>
          <p>Email</p>
          <input
            name="email"
            type="email"
            value={email}
            onInput={inputHandler}
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            type="password"
            value={password}
            onInput={inputHandler}
            required
          />
        </label>
        <button>Sign up</button>
      </form>
    </>
  );
};
