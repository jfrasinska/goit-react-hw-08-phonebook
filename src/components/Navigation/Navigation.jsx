import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/Reducers/authSlice';
import './Navigation.css';

const Navigation = () => {
  const user = useSelector(selectUser);

  return (
    <div className="navigation-container">
      <nav>
        <ul className="nav-list">
          {!user ? (
            <>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts" className="nav-link">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/usermenu" className="nav-link">
                  User Menu
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
