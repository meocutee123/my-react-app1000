import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import blog from "./blog";
import pokemon from "./pokemon";

export const store = configureStore({
  reducer: { pokemon, blog },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        token: 'meocuteequas'
      }
    }
  })
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch