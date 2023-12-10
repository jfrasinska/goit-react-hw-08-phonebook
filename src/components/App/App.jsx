// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import UserMenu from '../UserMenu/UserMenu';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="usermenu" element={<UserMenu />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
