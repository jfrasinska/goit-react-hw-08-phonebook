import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Reducers/contactSlice.js';
import filterReducer from './Reducers/filterSlice.js';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

export default store;
