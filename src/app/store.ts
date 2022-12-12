import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import countrySlice from '../pages/countries/countrySlice';
export const store = configureStore({
  reducer: {
    COUNTRY: countrySlice
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;