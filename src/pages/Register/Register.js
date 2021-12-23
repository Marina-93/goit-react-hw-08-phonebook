import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-options';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
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
    <div>
      <h1>Страница регистрации</h1>
      
      <form
        onSubmit={handleSubmit}
      >
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        
        <label>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        
        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}
      