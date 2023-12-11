import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, selectUser } from '../../Redux/Reducers/authSlice';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
