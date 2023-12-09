import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../../Redux/Reducers/contactSlice';
import './ContactForm.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };

    try {
      await dispatch(createContact(newContact));
      setName('');
      setNumber('');
    } catch (error) {
      console.error('Error creating contact:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label className="form-input">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Za-яА-Я]+(['-][a-zA-Za-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <label className="form-input">
        Phone number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="[+]?[0-9]{1,4}[-.\s]?[(]?[0-9]{1,3}[)]?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}"
          title="Phone number must be digits and can start with +"
          required
        />
      </label>
      <button type="submit" className="button-add">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
