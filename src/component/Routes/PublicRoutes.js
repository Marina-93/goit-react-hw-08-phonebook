import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../../redux/auth/auth-selector';

export function PublicRoutes({children}) {
  const isloggedIn = useSelector(getLoggedIn);
  return isloggedIn ?  <Navigate to='/'/> : children;
}