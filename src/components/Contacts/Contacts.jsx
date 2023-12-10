import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/reducers/authSlice';

const Contacts = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <h2>Contacts</h2>
      <p>User: {user.email}</p>
      {/* Add your contacts management components here */}
    </div>
  );
};

export default Contacts;
