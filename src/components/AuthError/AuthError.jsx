import { Section } from 'components/Section';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/authSelectors';

export const AuthError = () => {
  const authError = useSelector(selectAuthError);
  return (
    <>
      {authError && (
        <Section>
          <p>{authError}</p>
        </Section>
      )}
    </>
  );
};
