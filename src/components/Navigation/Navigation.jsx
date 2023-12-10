import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logoutUser } from '../../Redux/reducers/authSlice';
import './Navigation.css';

const Navigation = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error('Błąd podczas wylogowywania:', error);
    }
  };

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
                <Link to="/contacts" className="nav-link">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/usermenu" className="nav-link">
                  User Menu
                </Link>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-logout">
                  Logout
                </button>
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
