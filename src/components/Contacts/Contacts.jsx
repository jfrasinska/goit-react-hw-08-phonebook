import React from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import ContactFilter from '../ContactFilter/ContactFilter';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2 className="contacts-heading">Contacts</h2>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default Contacts;
