import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/Reducers/authSlice';

const PrivateRoute = ({ children, redirectTo = '/login', ...rest }) => {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};

export default PrivateRoute;
