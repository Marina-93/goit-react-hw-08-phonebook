import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/auth-options';
import { getLoggedIn } from '../../redux/auth/auth-selector';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);
  
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default: return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  
  return (
    !isLoggedIn && (
      <div>
        <h1 className='text-register'>SignUp</h1>
      
        <form
          className='form-register'
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label>
            Name
            <input
              className='input-register'
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
        
          <label>
            Email
            <input
              className='input-register'
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        
          <label>
            Password
            <input
              className='input-register'
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        
          <button className='btn-register' type="submit">SignUp</button>
        </form>
      </div>
    )
  );
}
      