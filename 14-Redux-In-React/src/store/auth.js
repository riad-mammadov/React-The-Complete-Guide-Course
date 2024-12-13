import { createSlice } from "@reduxjs/toolkit";

const authState = { auth: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
