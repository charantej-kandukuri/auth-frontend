import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../../app/withTypes";
import {
  getMe,
  login as loginService,
  logout as logoutService,
} from "./authAPI";
import type { RootState } from "../../app/store";
import type { AuthState } from "../../types/auth.types";

const initialState: AuthState = {
  user: null,
  isInitialized: false,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// 🔥 Check current user (rehydration)
export const fetchMe = createAppAsyncThunk(
  "auth/fetchMe",
  async () => {
    const data = await getMe();
    return data;
  },
  {
    condition(_arg, thunkApi) {
      const isLoading = selectAuthStatus(thunkApi.getState());
      if (isLoading) {
        return false;
      }
    },
  },
);

// 🔥 Login
export const login = createAppAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const data = await loginService(email, password);
    return data;
  },
  {
    condition(_arg, thunkApi) {
      const isLoading = selectAuthStatus(thunkApi.getState());
      if (isLoading) {
        return false;
      }
    },
  },
);

// 🔥 Logout
export const logout = createAppAsyncThunk("auth/logout", async () => {
  logoutService();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchMe
      .addCase(fetchMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isInitialized = true;
        state.isAuthenticated = true;
      })
      .addCase(fetchMe.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isInitialized = true;
        state.isAuthenticated = false;
      })

      // login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = "Login failed";
      })

      // logout
      .addCase(logout.fulfilled, (state) => {
        state.error = null;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const selectAuthStatus = (state: RootState) => state.auth.isLoading;

export default authSlice.reducer;
