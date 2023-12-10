import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/reducers/authSlice';
import './Register.css';

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password.length < 7) {
      alert('Hasło musi mieć co najmniej 7 znaków.');
      return;
    }

    try {
      const response = await dispatch(registerUser(formData));
      if (registerUser.fulfilled.match(response)) {
        window.location.href = '/navigation';
      }
    } catch (error) {
      console.error('Błąd rejestracji:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
