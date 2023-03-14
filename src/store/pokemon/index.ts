import { fetchPokemon } from "./actions"
import { createSlice } from "@reduxjs/toolkit"
interface PokemonState {
  collection: any[],
  loading: 'idle' | 'pending' | 'failed'
}

const initialState: PokemonState = {
  collection: [],
  loading: 'idle'
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    increment: () => console.log('increment'),
    decrement: () => console.log('decrement')
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, state => ({ ...state, loading: 'pending' }))
    builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => ({ ...state, loading: 'idle', collection: payload }))
    builder.addCase(fetchPokemon.rejected, (state) => ({ ...state, loading: 'failed' }))
  }
})

export const { increment, decrement } = pokemonSlice.actions

export default pokemonSlice.reducer