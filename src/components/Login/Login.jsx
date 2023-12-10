import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/reducers/authSlice';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter a valid email and password.');
      return;
    }

    const userData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      await dispatch(loginUser(userData));
      window.location.href = '/contacts';
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
