import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './Reducers/contactSlice';
import filterReducer from './Reducers/filterSlice';
import authReducer from './Reducers/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
