import { configureStore } from "@reduxjs/toolkit";

import blog from "./blog";
import notion from "./notion";
import pokemon from "./pokemon";

export const store = configureStore({
  reducer: { pokemon, blog, notion }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch