import { RootState } from "@app/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface State {
  collection: any[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: State = {
  collection: [],
  status: 'idle',
};

export const fetchCountries = createAsyncThunk('country/fetch-countries', async () => {
  const countries = await fetch("https://restcountries.com/v3.1/all")
  return countries.json()
})

export const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.collection = payload;
      })

      .addCase(fetchCountries.rejected, (state) => {
        state.status = 'failed';
      });
  }
})

export const collection = (state: RootState) => state.COUNTRY.collection

export default countrySlice.reducer;