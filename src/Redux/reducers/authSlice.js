import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, { getState }) => {
    const token = selectToken(getState());
    try {
      const response = await axios.get(`${API_BASE_URL}/users/current`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        userData
      );
      dispatch(fetchUser());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const token = selectToken(getState());
    try {
      await axios.post(`${API_BASE_URL}/users/logout`, null, {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      });
      dispatch(fetchUser());
      return null;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error logging out');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/signup`,
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, state => {
        state.loading = false;
      })
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, state => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, state => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectUser = state => state.auth.user;
export const selectIsLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;
export const selectToken = state => state.auth.user?.token;

export default authSlice.reducer;
