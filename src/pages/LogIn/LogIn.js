import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/auth-options';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import './LogIn.css';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default: return;
    }
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    !isLoggedIn && (
      <div>
        <h1 className='text-logIn'>LogIn</h1>

        <form
          className='form-login'
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label >
            Email
            <input
              className='input-login'
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label >
            Password
            <input
              className='input-login'
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button className='btn-login' type="submit">LogIn</button>
        </form>
      </div>
    )
  );
}