// Navigation.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/reducers/userSlice';

const Navigation = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/usermenu">User Menu</Link>
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
