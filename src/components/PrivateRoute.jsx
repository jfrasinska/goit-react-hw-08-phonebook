import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/reducers/userSlice';

const PrivateRoute = ({ element, redirectTo = '/login', ...rest }) => {
  const user = useSelector(selectUser);

  return (
    <Route {...rest} element={user ? element : <Navigate to={redirectTo} />} />
  );
};

export default PrivateRoute;
