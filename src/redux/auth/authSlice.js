import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, refresh } from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  authError: null,
  authLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(
        register.fulfilled,
        (
          state,
          {
            payload: {
              user: { name, email },
              token,
            },
          }
        ) => {
          state.user = { name, email };
          state.token = token;
        }
      )
      .addCase(
        login.fulfilled,
        (
          state,
          {
            payload: {
              user: { name, email },
              token,
            },
          }
        ) => {
          state.user = { name, email };
          state.token = token;
        }
      )
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
      })
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          refresh.fulfilled,
          logout.fulfilled
        ),
        state => {
          state.authLoading = false;
          state.authError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refresh.pending,
          logout.pending
        ),
        state => {
          state.authLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refresh.rejected,
          logout.rejected
        ),
        (state, { payload }) => {
          state.authLoading = false;
          state.authError = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
