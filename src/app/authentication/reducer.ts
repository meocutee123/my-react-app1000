import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "./";

export interface State {
  currentUser: {} | null;
  status: 'authenticated' | 'not-authenticated';
}

const initialState: State = {
  currentUser: null,
  status: 'not-authenticated'
}

export const authentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = 'authenticated'
        state.currentUser = payload
      })

      .addCase(logout.fulfilled, (state) => {
        state.status = 'not-authenticated'
        state.currentUser = null
      })

  }
})

export default authentication.reducer 