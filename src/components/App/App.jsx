import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <h1>Contact Book App</h1>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </div>
  );
};

export default App;
