import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

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
      <form onSubmit={submitHandler}>
        <p>Please, login in the phonebook!</p>
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
        <button>Login</button>
      </form>
    </>
  );
};
