import { Section } from 'components/Section';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectToken } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

export const AuthMenu = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      {token && (
        <Section>
          <p>
            Welcome, <b>{user.name}</b>
          </p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </Section>
      )}
    </>
  );
};
