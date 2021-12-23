import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-options';
import authSelectors from '../../../redux/auth/auth-selector';
import '../Menu.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div>
    <img src="" alt="" width="32" />
    <span >Welcome, {name}</span>
    <button type="button" onClick={() => dispatch(logOut())}>
      Sign out
    </button>
  </div>
  )
}