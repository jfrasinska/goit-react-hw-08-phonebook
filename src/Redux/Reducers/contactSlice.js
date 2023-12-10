import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectUser } from './userSlice';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { getState }) => {
    const user = selectUser(getState());

    try {
      const response = await axios.get(`${API_BASE_URL}/contacts`, {
        headers: {
          Authorization: user.token ? `Bearer ${user.token}` : '', // Dodaj token autoryzacyjny do nagłówka
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching contacts');
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async newContact => {
    try {
      const response = await axios.post(`${API_BASE_URL}/contacts`, newContact);
      return response.data;
    } catch (error) {
      throw new Error('Error creating contact');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`${API_BASE_URL}/contacts/${id}`);
      return id;
    } catch (error) {
      throw new Error('Error deleting contact');
    }
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.status = 'failed';
        state.error = 'Error fetching contacts';
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, state => {
        state.status = 'failed';
        state.error = 'Error creating contact';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.status = 'failed';
        state.error = 'Error deleting contact';
      });
  },
});

export default contactSlice.reducer;
