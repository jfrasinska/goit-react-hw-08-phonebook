import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, selectUser } from '../../Redux/reducers/authSlice'; // Zmieniono import

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
