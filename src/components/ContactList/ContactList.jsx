import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../Redux/Reducers/contactSlice';
import './ContactList.css';
import { selectUser } from '../../Redux/Reducers/authSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchContacts());
    }
  }, [dispatch, user]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <li className="contact-list-item" key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.phone}</p>
          <button
            className="button-list"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
