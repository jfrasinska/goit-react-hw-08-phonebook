import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers/contactSlice';
import filterReducer from './reducers/filterSlice';
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
