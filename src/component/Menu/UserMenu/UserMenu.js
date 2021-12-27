import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/auth-options';
import { getUserName } from '../../../redux/auth/auth-selector';
import './UserMenu.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className='user-contaner'>
    <img className='user-img' src="https://bipbap.ru/wp-content/uploads/2018/03/01-700x1050-640x960.jpg" alt="" width="32" />
    <span className='user-text'>Welcome, {name}</span>
    <button className='btn-user' type="button" onClick={() => dispatch(logOut())}>
      Sign out
    </button>
  </div>
  )
}