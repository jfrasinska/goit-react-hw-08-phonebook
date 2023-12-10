import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import UserMenu from '../UserMenu/UserMenu';
import Home from '../Home/Home';

const App = () => {
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default App;
