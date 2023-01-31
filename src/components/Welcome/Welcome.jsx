import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>You nead sign up or login</p>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Sign up</button>
      <p>to access your contacts</p>
    </>
  );
};
