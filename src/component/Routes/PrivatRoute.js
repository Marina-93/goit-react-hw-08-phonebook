import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../../redux/auth/auth-selector';

export function PrivateRoute({children}) {
  const isloggedIn = useSelector(getLoggedIn);
  return isloggedIn ? children : <Navigate to='/login'/>;
}