import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  notification: null,
};

const uiSlice = createSlice({
  name: "cart",
  initialState: initialUiState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
