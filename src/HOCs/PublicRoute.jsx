import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const redirect = token && restricted;
  return redirect ? <Navigate to="/contacts" /> : children;
};
