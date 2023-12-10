import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/reducers/authSlice';

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

  const handleSubmit = e => {
    e.preventDefault();

    // Dodaj walidację dla hasła
    if (formData.password.length < 7) {
      alert('Hasło musi mieć co najmniej 7 znaków.');
      return;
    }

    // Wywołaj akcję rejestracji
    dispatch(registerUser(formData));

    // Przeładuj stronę do ścieżki prywatnej (np. /contacts) po udanej rejestracji
    // UWAGA: Poniższa linijka przekłada stronę, ale zależy to od struktury Twojej aplikacji
    // Możesz użyć react-router-dom do bardziej zaawansowanego zarządzania trasami
    window.location.href = '/contacts';
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
